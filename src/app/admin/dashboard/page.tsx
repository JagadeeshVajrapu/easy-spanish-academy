import Link from "next/link";
import { BlogStatus } from "@prisma/client";
import { FilePenLine, FilePlus2, Newspaper } from "lucide-react";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const [total, published, drafts] = await Promise.all([
    prisma.blog.count(),
    prisma.blog.count({ where: { status: BlogStatus.PUBLISHED } }),
    prisma.blog.count({ where: { status: BlogStatus.DRAFT } }),
  ]);

  const recent = await prisma.blog.findMany({
    orderBy: { updatedAt: "desc" },
    take: 8,
  });

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="mt-1 text-sm text-esa-muted">
          Create and publish blogs. Published posts appear on the public Blog page.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          {
            href: "/admin/blogs/create",
            icon: FilePlus2,
            title: "Write a new blog",
            body: "Add title, content, and image — then publish.",
          },
          {
            href: "/admin/blogs",
            icon: FilePenLine,
            title: "Manage blogs",
            body: "Edit, publish, unpublish, or delete posts.",
          },
          {
            href: "/blog",
            icon: Newspaper,
            title: "View public blog",
            body: "See how published posts look on the site.",
            external: true,
          },
        ].map((card) => (
          <Link
            key={card.href}
            href={card.href}
            target={card.external ? "_blank" : undefined}
            className="rounded-2xl border border-esa-border bg-white p-5 shadow-esa-soft transition hover:border-esa-red/30 hover:shadow-esa-card focus-esa"
          >
            <card.icon className="h-5 w-5 text-esa-red" aria-hidden />
            <p className="mt-3 text-base font-bold text-esa-navy">{card.title}</p>
            <p className="mt-1 text-sm text-esa-muted">{card.body}</p>
          </Link>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Total blogs", value: total },
          { label: "Published", value: published },
          { label: "Drafts", value: drafts },
        ].map((item) => (
          <div key={item.label} className="rounded-2xl border border-esa-border bg-white p-5 shadow-esa-soft">
            <p className="text-xs font-semibold uppercase tracking-wider text-esa-muted">{item.label}</p>
            <p className="mt-2 text-3xl font-bold text-esa-navy">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-esa-border bg-white p-5 shadow-esa-soft">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h3 className="text-lg font-bold">Recent blogs</h3>
          <Link href="/admin/blogs" className="text-sm font-semibold text-esa-red hover:text-esa-red-dark">
            View all
          </Link>
        </div>
        <ul className="divide-y divide-esa-border">
          {recent.map((blog) => (
            <li key={blog.id} className="flex flex-wrap items-center justify-between gap-2 py-3 text-sm">
              <div>
                <p className="font-semibold text-esa-navy">{blog.title}</p>
                <p className="text-esa-muted">
                  {blog.status} · {blog.category}
                </p>
              </div>
              <div className="flex gap-3">
                {blog.status === BlogStatus.PUBLISHED ? (
                  <Link href={`/blog/${blog.slug}`} className="font-semibold text-esa-navy hover:text-esa-red" target="_blank">
                    View
                  </Link>
                ) : null}
                <Link href={`/admin/blogs/edit/${blog.id}`} className="font-semibold text-esa-red">
                  Edit
                </Link>
              </div>
            </li>
          ))}
          {recent.length === 0 ? (
            <li className="py-6 text-sm text-esa-muted">
              No blogs yet.{" "}
              <Link href="/admin/blogs/create" className="font-semibold text-esa-red">
                Create your first post
              </Link>
              .
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
}
