export function slugify(input: string): string {
  return input
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120);
}

export function ensureSlug(title: string, explicit?: string | null) {
  const fromExplicit = explicit ? slugify(explicit) : "";
  const fromTitle = slugify(title);
  const slug = fromExplicit || fromTitle;
  if (!slug) {
    throw new Error("Could not generate a valid slug from the title.");
  }
  return slug;
}
