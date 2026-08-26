export const BLOG_IMAGE_FALLBACK =
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80";

/**
 * Resolve a blog featured image for display.
 * Local `/uploads/...` files only exist on the machine that wrote them — they are
 * missing on Vercel, so use a stable fallback there.
 */
export function resolveBlogImage(src: string | null | undefined): string {
  const value = src?.trim();
  if (!value) return BLOG_IMAGE_FALLBACK;

  const isLocalUpload = value.startsWith("/uploads/");
  const onServerless =
    process.env.VERCEL === "1" ||
    Boolean(process.env.VERCEL_ENV) ||
    Boolean(process.env.AWS_LAMBDA_FUNCTION_NAME);

  if (isLocalUpload && onServerless) return BLOG_IMAGE_FALLBACK;
  return value;
}

/** Whether next/image should skip optimization for this src. */
export function shouldUnoptimizeImage(src: string | null | undefined): boolean {
  if (!src) return true;
  if (src.startsWith("/")) return src.startsWith("/uploads/");
  try {
    const host = new URL(src).hostname;
    return (
      host !== "images.unsplash.com" &&
      host !== "res.cloudinary.com"
    );
  } catch {
    return true;
  }
}

export function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Basic HTML cleanup before storing blog content. */
export function sanitizeBlogHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<iframe[\s\S]*?>[\s\S]*?<\/iframe>/gi, "")
    .replace(/<object[\s\S]*?>[\s\S]*?<\/object>/gi, "")
    .replace(/<embed[\s\S]*?>/gi, "")
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/javascript:/gi, "")
    .trim();
}
