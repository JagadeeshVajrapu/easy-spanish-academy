import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import { v2 as cloudinary, type UploadApiResponse } from "cloudinary";

const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const MAX_BYTES = 5 * 1024 * 1024; // 5MB

function getCloudinaryConfig() {
  const cloud_name = process.env.CLOUDINARY_CLOUD_NAME?.trim();
  const api_key = process.env.CLOUDINARY_API_KEY?.trim();
  const api_secret = process.env.CLOUDINARY_API_SECRET?.trim();

  if (!cloud_name || !api_key || !api_secret) return null;
  return { cloud_name, api_key, api_secret };
}

function ensureCloudinary() {
  const config = getCloudinaryConfig();
  if (!config) return null;

  cloudinary.config({
    cloud_name: config.cloud_name,
    api_key: config.api_key,
    api_secret: config.api_secret,
    secure: true,
  });
  return cloudinary;
}

function validateImage(file: File) {
  if (!ALLOWED_TYPES.has(file.type)) {
    throw new Error("Invalid image type. Use JPG, PNG, WEBP, or GIF.");
  }
  if (file.size <= 0 || file.size > MAX_BYTES) {
    throw new Error("Image must be between 1 byte and 5MB.");
  }
}

async function saveLocally(file: File): Promise<string> {
  const ext =
    file.type === "image/jpeg"
      ? "jpg"
      : file.type === "image/png"
        ? "png"
        : file.type === "image/webp"
          ? "webp"
          : "gif";

  const filename = `${Date.now()}-${randomUUID().slice(0, 8)}.${ext}`;
  const dir = path.join(process.cwd(), "public", "uploads", "blogs");
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, filename), Buffer.from(await file.arrayBuffer()));
  return `/uploads/blogs/${filename}`;
}

async function uploadToCloudinary(file: File): Promise<string> {
  const client = ensureCloudinary();
  if (!client) {
    throw new Error("Cloudinary is not configured.");
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const publicId = `blog-${Date.now()}-${randomUUID().slice(0, 8)}`;
  const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET?.trim();

  const result = await new Promise<UploadApiResponse>((resolve, reject) => {
    const options: Record<string, unknown> = {
      folder: "easy-spanish-academy/blogs",
      public_id: publicId,
      resource_type: "image",
      overwrite: false,
    };
    // Optional unsigned preset if the account blocks signed API uploads
    if (uploadPreset) {
      options.upload_preset = uploadPreset;
    }

    const stream = client.uploader.upload_stream(options, (error, uploaded) => {
      if (error || !uploaded) {
        const message =
          error && typeof error === "object" && "message" in error
            ? String((error as { message?: string }).message)
            : "Cloudinary upload failed.";
        reject(new Error(message));
        return;
      }
      resolve(uploaded);
    });
    stream.end(buffer);
  });

  if (!result.secure_url) {
    throw new Error("Cloudinary upload did not return a URL.");
  }
  return result.secure_url;
}

/**
 * Prefer Cloudinary; if Cloudinary rejects the upload (e.g. 403),
 * fall back to local public/uploads so admin blogging still works.
 */
export async function saveBlogImage(file: File): Promise<string> {
  validateImage(file);

  const hasCloudinary = Boolean(getCloudinaryConfig());
  if (!hasCloudinary) {
    return saveLocally(file);
  }

  try {
    return await uploadToCloudinary(file);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Cloudinary upload failed.";
    console.warn(`[blog-upload] Cloudinary failed (${message}). Saving locally instead.`);
    return saveLocally(file);
  }
}
