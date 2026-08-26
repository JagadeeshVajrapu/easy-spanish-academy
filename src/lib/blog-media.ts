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
