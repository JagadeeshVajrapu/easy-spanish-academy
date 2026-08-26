import { BlogForm } from "@/components/admin/BlogForm";

export default function AdminCreateBlogPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Create blog</h2>
        <p className="mt-1 text-sm text-esa-muted">
          Add a title, excerpt, featured image, and content. Publish when ready to show it on the Blog page.
        </p>
      </div>
      <div className="rounded-2xl border border-esa-border bg-white p-5 shadow-esa-soft sm:p-8">
        <BlogForm />
      </div>
    </div>
  );
}
