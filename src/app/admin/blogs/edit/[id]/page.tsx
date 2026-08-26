import { notFound } from "next/navigation";
import { BlogForm } from "@/components/admin/BlogForm";
import { getAdminBlogById } from "@/lib/blog-service";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function AdminEditBlogPage({ params }: PageProps) {
  const { id } = await params;
  const blog = await getAdminBlogById(id);
  if (!blog) notFound();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Edit blog</h2>
        <p className="mt-1 text-sm text-esa-muted">{blog.title}</p>
      </div>
      <div className="rounded-2xl border border-esa-border bg-white p-5 shadow-esa-soft sm:p-8">
        <BlogForm
          blogId={blog.id}
          initial={{
            title: blog.title,
            slug: blog.slug,
            content: blog.content,
            excerpt: blog.excerpt,
            featuredImage: blog.featuredImage,
            category: blog.category,
            author: blog.author,
            status: blog.status,
          }}
        />
      </div>
    </div>
  );
}
