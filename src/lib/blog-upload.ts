import { createHash, randomUUID } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { v2 as cloudinary, type UploadApiResponse } from "cloudinary";

const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const MAX_BYTES = 5 * 1024 * 1024; // 5MB
const CLOUDINARY_FOLDER = "easy-spanish-academy/blogs";

function getCloudinaryConfig() {
  const cloud_name = process.env.CLOUDINARY_CLOUD_NAME?.trim();
  const api_key = process.env.CLOUDINARY_API_KEY?.trim();
  const api_secret = process.env.CLOUDINARY_API_SECRET?.trim();
  if (!cloud_name || !api_key || !api_secret) return null;
  return { cloud_name, api_key, api_secret };
}

function isServerlessRuntime() {
  return (
    process.env.VERCEL === "1" ||
    Boolean(process.env.VERCEL_ENV) ||
    Boolean(process.env.AWS_LAMBDA_FUNCTION_NAME) ||
    process.env.NEXT_RUNTIME === "nodejs" && process.cwd().startsWith("/var/task")
  );
}

function validateImage(file: File) {
  if (!ALLOWED_TYPES.has(file.type)) {
    throw new Error("Invalid image type. Use JPG, PNG, WEBP, or GIF.");
  }
  if (file.size <= 0 || file.size > MAX_BYTES) {
    throw new Error("Image must be between 1 byte and 5MB.");
  }
}

function explainCloudinaryError(raw: string): string {
  const message = raw.trim() || "Cloudinary upload failed.";
  const lower = message.toLowerCase();

  if (lower.includes("missing permissions") || lower.includes('actions=["create"]')) {
    return (
      "Cloudinary rejected the upload: this API key cannot create/upload assets. " +
      "In Cloudinary → Settings → API Keys, create a key with upload/create permission " +
      "(or use an unsigned Upload Preset via CLOUDINARY_UPLOAD_PRESET), then update " +
      "CLOUDINARY_CLOUD_NAME / CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET on Vercel and redeploy."
    );
  }

  if (lower.includes("invalid") && (lower.includes("signature") || lower.includes("api_key"))) {
    return (
      "Cloudinary credentials are invalid. Double-check CLOUDINARY_CLOUD_NAME, " +
      "CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET on Vercel, then redeploy."
    );
  }

  return message;
}

async function saveLocally(file: File): Promise<string> {
  if (isServerlessRuntime()) {
    throw new Error(
      "Local image storage is not available on this host. Configure working Cloudinary credentials.",
    );
  }

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

/** Unsigned preset upload — works when the API key is restricted from signed creates. */
async function uploadUnsigned(file: File, cloudName: string, uploadPreset: string): Promise<string> {
  const form = new FormData();
  form.append("file", file);
  form.append("upload_preset", uploadPreset);
  form.append("folder", CLOUDINARY_FOLDER);

  const endpoint = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  const response = await fetch(endpoint, { method: "POST", body: form });
  const payload = (await response.json()) as {
    secure_url?: string;
    error?: { message?: string };
  };

  if (!response.ok || !payload.secure_url) {
    throw new Error(explainCloudinaryError(payload.error?.message || `HTTP ${response.status}`));
  }
  return payload.secure_url;
}

/** Signed upload via Cloudinary Node SDK (stream). */
async function uploadSignedSdk(file: File): Promise<string> {
  const config = getCloudinaryConfig();
  if (!config) {
    throw new Error(
      "Cloudinary is not configured. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.",
    );
  }

  cloudinary.config({
    cloud_name: config.cloud_name,
    api_key: config.api_key,
    api_secret: config.api_secret,
    secure: true,
  });

  const buffer = Buffer.from(await file.arrayBuffer());
  const publicId = `blog-${Date.now()}-${randomUUID().slice(0, 8)}`;

  const result = await new Promise<UploadApiResponse>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: CLOUDINARY_FOLDER,
        public_id: publicId,
        resource_type: "image",
        overwrite: false,
      },
      (error, uploaded) => {
        if (error || !uploaded) {
          const message =
            error && typeof error === "object" && "message" in error
              ? String((error as { message?: string }).message)
              : "Cloudinary upload failed.";
          reject(new Error(explainCloudinaryError(message)));
          return;
        }
        resolve(uploaded);
      },
    );
    stream.end(buffer);
  });

  if (!result.secure_url) {
    throw new Error("Cloudinary upload did not return a URL.");
  }
  return result.secure_url;
}

/** Signed REST upload fallback if the SDK path fails for network/runtime reasons. */
async function uploadSignedRest(file: File): Promise<string> {
  const config = getCloudinaryConfig();
  if (!config) {
    throw new Error(
      "Cloudinary is not configured. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.",
    );
  }

  const timestamp = Math.round(Date.now() / 1000);
  const publicId = `blog-${Date.now()}-${randomUUID().slice(0, 8)}`;
  const toSign = `folder=${CLOUDINARY_FOLDER}&public_id=${publicId}&timestamp=${timestamp}${config.api_secret}`;
  const signature = createHash("sha1").update(toSign).digest("hex");

  const form = new FormData();
  form.append("file", file);
  form.append("api_key", config.api_key);
  form.append("timestamp", String(timestamp));
  form.append("folder", CLOUDINARY_FOLDER);
  form.append("public_id", publicId);
  form.append("signature", signature);

  const endpoint = `https://api.cloudinary.com/v1_1/${config.cloud_name}/image/upload`;
  const response = await fetch(endpoint, { method: "POST", body: form });
  const payload = (await response.json()) as {
    secure_url?: string;
    error?: { message?: string };
  };

  if (!response.ok || !payload.secure_url) {
    throw new Error(explainCloudinaryError(payload.error?.message || `HTTP ${response.status}`));
  }
  return payload.secure_url;
}

async function uploadToCloudinary(file: File): Promise<string> {
  const config = getCloudinaryConfig();
  if (!config) {
    throw new Error(
      "Cloudinary is not configured. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.",
    );
  }

  const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET?.trim();
  if (uploadPreset) {
    try {
      return await uploadUnsigned(file, config.cloud_name, uploadPreset);
    } catch (unsignedError) {
      // Fall through to signed upload if the preset is misconfigured.
      console.warn(
        "[blog-upload] Unsigned preset upload failed:",
        unsignedError instanceof Error ? unsignedError.message : unsignedError,
      );
    }
  }

  try {
    return await uploadSignedSdk(file);
  } catch (sdkError) {
    const sdkMessage = sdkError instanceof Error ? sdkError.message : "SDK upload failed.";
    // Permission errors will not succeed via REST either — rethrow with guidance.
    if (sdkMessage.toLowerCase().includes("missing permissions") || sdkMessage.toLowerCase().includes("create")) {
      throw sdkError instanceof Error ? sdkError : new Error(sdkMessage);
    }
    console.warn("[blog-upload] SDK upload failed, trying REST:", sdkMessage);
    return uploadSignedRest(file);
  }
}

/**
 * Upload blog images to Cloudinary.
 * Local disk is only used in local development when Cloudinary env vars are absent.
 * On Vercel / serverless, Cloudinary is required — never attempt mkdir under /var/task.
 */
export async function saveBlogImage(file: File): Promise<string> {
  validateImage(file);

  const hasCloudinary = Boolean(getCloudinaryConfig());

  if (!hasCloudinary) {
    if (isServerlessRuntime()) {
      throw new Error(
        "Cloudinary env vars are missing on this host. Add CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET (and optionally CLOUDINARY_UPLOAD_PRESET), then redeploy.",
      );
    }
    return saveLocally(file);
  }

  // Cloudinary is configured — never fall back to local disk (that breaks on Vercel).
  return uploadToCloudinary(file);
}
