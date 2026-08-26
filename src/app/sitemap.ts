import type { MetadataRoute } from "next";
import { listPublishedBlogs } from "@/lib/blog-service";
import { SITE } from "@/lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/courses",
    "/why-choose-us",
    "/blog",
    "/contact",
    "/book-demo",
    "/faq",
    "/privacy",
  ].map((path) => ({
    url: `${SITE.url}${path || "/"}`,
    lastModified: new Date(),
  }));

  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const blogs = await listPublishedBlogs();
    blogRoutes = blogs.map((blog) => ({
      url: `${SITE.url}/blog/${blog.slug}`,
      lastModified: new Date(blog.updatedAt),
    }));
  } catch {
    blogRoutes = [];
  }

  return [...staticRoutes, ...blogRoutes];
}
