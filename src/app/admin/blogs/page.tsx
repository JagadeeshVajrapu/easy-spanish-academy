import Link from "next/link";
import { AdminBlogsTable } from "@/components/admin/AdminBlogsTable";
import { listAdminBlogs, serializeBlog } from "@/lib/blog-service";

export const dynamic = "force-dynamic";

type PageProps = {
  searchParams: Promise<{ published?: string }>;
};

export default async function AdminBlogsPage({ searchParams }: PageProps) {
  const blogs = await listAdminBlogs();
  const { published } = await searchParams;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold">All blogs</h2>
          <p className="mt-1 text-sm text-esa-muted">
            Drafts stay private. Published posts appear on the public Blog page.
          </p>
        </div>
        <Link
          href="/admin/blogs/create"
          className="rounded-lg bg-esa-red px-4 py-2.5 text-sm font-semibold text-white hover:bg-esa-red-dark focus-esa"
        >
          Create blog
        </Link>
      </div>

      {published ? (
        <p className="rounded-xl border border-esa-gold/40 bg-esa-gold-soft px-4 py-3 text-sm text-esa-navy">
          Published successfully.{" "}
          <Link href={`/blog/${published}`} className="font-semibold text-esa-red underline" target="_blank">
            View on site
          </Link>
        </p>
      ) : null}

      <AdminBlogsTable
        blogs={blogs.map((blog) => ({
          ...serializeBlog(blog),
          status: blog.status,
        }))}
      />
    </div>
  );
}
