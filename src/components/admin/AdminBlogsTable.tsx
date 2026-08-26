"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export type AdminBlogRow = {
  id: string;
  title: string;
  slug: string;
  status: "DRAFT" | "PUBLISHED";
  category: string;
  author: string;
  publishedAt: string | null;
};

export function AdminBlogsTable({ blogs }: { blogs: AdminBlogRow[] }) {
  const router = useRouter();
  const [busyId, setBusyId] = useState<string | null>(null);
  const [error, setError] = useState("");

  async function run(id: string, action: "publish" | "unpublish" | "delete") {
    setError("");
    if (action === "delete") {
      const ok = window.confirm("Delete this blog permanently? This cannot be undone.");
      if (!ok) return;
    }
    setBusyId(id);
    try {
      if (action === "delete") {
        const res = await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
        const data = (await res.json()) as { error?: string };
        if (!res.ok) throw new Error(data.error || "Delete failed.");
      } else {
        const res = await fetch(`/api/admin/blogs/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action }),
        });
        const data = (await res.json()) as { error?: string };
        if (!res.ok) throw new Error(data.error || "Update failed.");
      }
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Action failed.");
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div className="space-y-3">
      {error ? <p className="rounded-lg bg-esa-red-soft px-3 py-2 text-sm text-esa-red">{error}</p> : null}
      <div className="overflow-x-auto rounded-2xl border border-esa-border bg-white shadow-esa-soft">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-esa-soft/70 text-xs uppercase tracking-wider text-esa-muted">
            <tr>
              <th className="px-4 py-3 font-semibold">Title</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Category</th>
              <th className="px-4 py-3 font-semibold">Published</th>
              <th className="px-4 py-3 font-semibold">Author</th>
              <th className="px-4 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className="border-t border-esa-border align-top">
                <td className="px-4 py-3 font-semibold text-esa-navy">{blog.title}</td>
                <td className="px-4 py-3">
                  <span
                    className={
                      blog.status === "PUBLISHED"
                        ? "rounded-md bg-esa-gold-soft px-2 py-1 text-xs font-semibold text-esa-navy"
                        : "rounded-md bg-esa-soft px-2 py-1 text-xs font-semibold text-esa-muted"
                    }
                  >
                    {blog.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-esa-muted">{blog.category}</td>
                <td className="px-4 py-3 text-esa-muted">
                  {blog.publishedAt
                    ? new Date(blog.publishedAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })
                    : "—"}
                </td>
                <td className="px-4 py-3 text-esa-muted">{blog.author}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    {blog.status === "PUBLISHED" ? (
                      <Link href={`/blog/${blog.slug}`} className="font-semibold text-esa-navy hover:text-esa-red">
                        View
                      </Link>
                    ) : null}
                    <Link
                      href={`/admin/blogs/edit/${blog.id}`}
                      className="font-semibold text-esa-navy hover:text-esa-red"
                    >
                      Edit
                    </Link>
                    {blog.status === "DRAFT" ? (
                      <button
                        type="button"
                        disabled={busyId === blog.id}
                        onClick={() => run(blog.id, "publish")}
                        className="font-semibold text-esa-red disabled:opacity-50"
                      >
                        Publish
                      </button>
                    ) : (
                      <button
                        type="button"
                        disabled={busyId === blog.id}
                        onClick={() => run(blog.id, "unpublish")}
                        className="font-semibold text-esa-muted disabled:opacity-50"
                      >
                        Unpublish
                      </button>
                    )}
                    <button
                      type="button"
                      disabled={busyId === blog.id}
                      onClick={() => run(blog.id, "delete")}
                      className="font-semibold text-esa-red disabled:opacity-50"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {blogs.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-esa-muted">
                  No blogs yet.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
