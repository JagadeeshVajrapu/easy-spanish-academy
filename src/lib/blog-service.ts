import { BlogStatus, type Blog } from "@prisma/client";
import { z } from "zod";
import { sanitizeBlogHtml, stripHtml } from "@/lib/blog-media";
import { prisma } from "@/lib/db";
import { ensureSlug } from "@/lib/slug";

export const blogCategories = [
  "Spanish Language",
  "German Language",
  "Learning Tips",
] as const;

export const blogInputSchema = z
  .object({
    title: z.string().trim().min(3, "Title must be at least 3 characters.").max(160),
    slug: z.string().trim().max(160).optional().nullable(),
    content: z.string().trim().min(1, "Content is required."),
    excerpt: z.string().trim().min(10, "Excerpt must be at least 10 characters.").max(400),
    featuredImage: z
      .string()
      .trim()
      .min(1, "Featured image is required.")
      .refine(
        (value) => value.startsWith("/") || /^https?:\/\//i.test(value),
        "Featured image must be an upload path or http(s) URL.",
      ),
    category: z.string().trim().min(2).max(80),
    author: z.string().trim().min(2).max(80).optional(),
    status: z.enum(["DRAFT", "PUBLISHED"]).optional(),
  })
  .superRefine((data, ctx) => {
    if (stripHtml(data.content).length < 20) {
      ctx.addIssue({
        code: "custom",
        path: ["content"],
        message: "Content must be at least 20 characters.",
      });
    }
  });

export type BlogInput = z.infer<typeof blogInputSchema>;

function normalizeBlogInput(raw: unknown) {
  const data = blogInputSchema.parse(raw);
  return {
    ...data,
    content: sanitizeBlogHtml(data.content),
    author: data.author?.trim() || "Easy Spanish Academy",
    status: data.status ?? "DRAFT",
  };
}

export type PublicBlog = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  author: string;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export function serializeBlog(blog: Blog): PublicBlog {
  return {
    id: blog.id,
    title: blog.title,
    slug: blog.slug,
    content: blog.content,
    excerpt: blog.excerpt,
    featuredImage: blog.featuredImage,
    category: blog.category,
    author: blog.author,
    publishedAt: blog.publishedAt?.toISOString() ?? null,
    createdAt: blog.createdAt.toISOString(),
    updatedAt: blog.updatedAt.toISOString(),
  };
}

async function assertUniqueSlug(slug: string, excludeId?: string) {
  const existing = await prisma.blog.findUnique({ where: { slug } });
  if (existing && existing.id !== excludeId) {
    throw new Error("A blog with this slug already exists. Please choose another slug.");
  }
}

export async function listPublishedBlogs() {
  try {
    const blogs = await prisma.blog.findMany({
      where: { status: BlogStatus.PUBLISHED },
      orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
    });
    return blogs.map(serializeBlog);
  } catch (error) {
    console.error("[blog] listPublishedBlogs failed:", error);
    return [];
  }
}

export async function getPublishedBlogBySlug(slug: string) {
  try {
    const blog = await prisma.blog.findFirst({
      where: { slug, status: BlogStatus.PUBLISHED },
    });
    return blog ? serializeBlog(blog) : null;
  } catch (error) {
    console.error("[blog] getPublishedBlogBySlug failed:", error);
    return null;
  }
}

export async function listRelatedBlogs(slug: string, category: string, take = 3) {
  try {
    const blogs = await prisma.blog.findMany({
      where: {
        status: BlogStatus.PUBLISHED,
        slug: { not: slug },
        category,
      },
      orderBy: [{ publishedAt: "desc" }],
      take,
    });
    if (blogs.length >= take) return blogs.map(serializeBlog);

    const exclude = [slug, ...blogs.map((b) => b.slug)];
    const extras = await prisma.blog.findMany({
      where: {
        status: BlogStatus.PUBLISHED,
        slug: { notIn: exclude },
      },
      orderBy: [{ publishedAt: "desc" }],
      take: take - blogs.length,
    });
    return [...blogs, ...extras].map(serializeBlog);
  } catch (error) {
    console.error("[blog] listRelatedBlogs failed:", error);
    return [];
  }
}

export async function listAdminBlogs() {
  return prisma.blog.findMany({
    orderBy: [{ updatedAt: "desc" }],
  });
}

export async function getAdminBlogById(id: string) {
  return prisma.blog.findUnique({ where: { id } });
}

export async function createBlog(raw: unknown, actor: string) {
  const data = normalizeBlogInput(raw);
  const slug = ensureSlug(data.title, data.slug);
  await assertUniqueSlug(slug);

  const status = data.status === "PUBLISHED" ? BlogStatus.PUBLISHED : BlogStatus.DRAFT;
  const publishedAt = status === BlogStatus.PUBLISHED ? new Date() : null;

  return prisma.blog.create({
    data: {
      title: data.title,
      slug,
      content: data.content,
      excerpt: data.excerpt,
      featuredImage: data.featuredImage,
      category: data.category,
      author: data.author || actor || "Easy Spanish Academy",
      status,
      publishedAt,
    },
  });
}

export async function updateBlog(id: string, raw: unknown) {
  const existing = await prisma.blog.findUnique({ where: { id } });
  if (!existing) throw new Error("Blog not found.");

  const data = normalizeBlogInput(raw);
  const slug = ensureSlug(data.title, data.slug);
  await assertUniqueSlug(slug, id);

  const status = data.status === "PUBLISHED" ? BlogStatus.PUBLISHED : BlogStatus.DRAFT;
  let publishedAt = existing.publishedAt;
  if (status === BlogStatus.PUBLISHED && !publishedAt) {
    publishedAt = new Date();
  }
  if (status === BlogStatus.DRAFT) {
    publishedAt = null;
  }

  return prisma.blog.update({
    where: { id },
    data: {
      title: data.title,
      slug,
      content: data.content,
      excerpt: data.excerpt,
      featuredImage: data.featuredImage,
      category: data.category,
      author: data.author,
      status,
      publishedAt,
    },
  });
}

export async function setBlogStatus(id: string, status: "DRAFT" | "PUBLISHED") {
  const existing = await prisma.blog.findUnique({ where: { id } });
  if (!existing) throw new Error("Blog not found.");

  return prisma.blog.update({
    where: { id },
    data: {
      status: status === "PUBLISHED" ? BlogStatus.PUBLISHED : BlogStatus.DRAFT,
      publishedAt:
        status === "PUBLISHED"
          ? existing.publishedAt ?? new Date()
          : null,
    },
  });
}

export async function deleteBlog(id: string) {
  const existing = await prisma.blog.findUnique({ where: { id } });
  if (!existing) throw new Error("Blog not found.");
  await prisma.blog.delete({ where: { id } });
  return existing;
}
