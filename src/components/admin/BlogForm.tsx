"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { ImageUploadField } from "@/components/admin/ImageUploadField";
import { RichTextEditor } from "@/components/admin/RichTextEditor";
import { stripHtml } from "@/lib/blog-media";
import { blogCategories } from "@/lib/blog-service";
import { slugify } from "@/lib/slug";

export type BlogFormValues = {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  author: string;
  status: "DRAFT" | "PUBLISHED";
};

type BlogFormProps = {
  initial?: Partial<BlogFormValues>;
  blogId?: string;
};

const empty: BlogFormValues = {
  title: "",
  slug: "",
  content: "",
  excerpt: "",
  featuredImage: "",
  category: blogCategories[0],
  author: "Easy Spanish Academy",
  status: "DRAFT",
};

export function BlogForm({ initial, blogId }: BlogFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<BlogFormValues>({ ...empty, ...initial });
  const [slugTouched, setSlugTouched] = useState(Boolean(initial?.slug));
  const [saving, setSaving] = useState<"draft" | "publish" | null>(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [publishedSlug, setPublishedSlug] = useState(
    initial?.status === "PUBLISHED" ? initial.slug ?? "" : "",
  );

  const resolvedSlug = slugTouched ? form.slug : slugify(form.title);

  const endpoint = useMemo(
    () => (blogId ? `/api/admin/blogs/${blogId}` : "/api/admin/blogs"),
    [blogId],
  );

  function validateClient(status: "DRAFT" | "PUBLISHED") {
    if (form.title.trim().length < 3) return "Title must be at least 3 characters.";
    if (form.excerpt.trim().length < 10) return "Excerpt must be at least 10 characters.";
    if (!form.featuredImage.trim()) return "Please upload or paste a featured image.";
    const plain = stripHtml(form.content);
    if (plain.length < 20) return "Content must be at least 20 characters.";
    if (status === "PUBLISHED" && !resolvedSlug) return "Slug is required to publish.";
    return "";
  }

  async function submit(status: "DRAFT" | "PUBLISHED") {
    setError("");
    setMessage("");
    const clientError = validateClient(status);
    if (clientError) {
      setError(clientError);
      return;
    }

    setSaving(status === "PUBLISHED" ? "publish" : "draft");
    try {
      const res = await fetch(endpoint, {
        method: blogId ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, slug: resolvedSlug, status }),
      });
      const data = (await res.json()) as {
        error?: string;
        blog?: { id: string; slug: string; status: string };
      };
      if (!res.ok) throw new Error(data.error || "Could not save blog.");

      if (status === "PUBLISHED" && data.blog?.slug) {
        setPublishedSlug(data.blog.slug);
        setMessage("Published. It is now live on the Blog page.");
        router.replace(`/admin/blogs?published=${encodeURIComponent(data.blog.slug)}`);
        router.refresh();
        return;
      }

      setMessage("Draft saved.");
      if (!blogId && data.blog?.id) {
        router.replace(`/admin/blogs/edit/${data.blog.id}`);
      }
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save blog.");
    } finally {
      setSaving(null);
    }
  }

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <label className="block space-y-1.5 lg:col-span-2">
          <span className="text-sm font-semibold text-esa-navy">Title</span>
          <input
            required
            value={form.title}
            onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
            placeholder="e.g. Why learn Spanish in 2026"
            className="w-full rounded-lg border border-esa-border bg-white px-3 py-2.5 text-sm focus-esa"
          />
        </label>

        <label className="block space-y-1.5">
          <span className="text-sm font-semibold text-esa-navy">URL slug</span>
          <input
            value={resolvedSlug}
            onChange={(e) => {
              setSlugTouched(true);
              setForm((p) => ({ ...p, slug: e.target.value }));
            }}
            className="w-full rounded-lg border border-esa-border bg-white px-3 py-2.5 text-sm focus-esa"
          />
          <span className="text-xs text-esa-muted">Public URL: /blog/{resolvedSlug || "…"}</span>
        </label>

        <label className="block space-y-1.5">
          <span className="text-sm font-semibold text-esa-navy">Category</span>
          <select
            value={form.category}
            onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))}
            className="w-full rounded-lg border border-esa-border bg-white px-3 py-2.5 text-sm focus-esa"
          >
            {blogCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <label className="block space-y-1.5 lg:col-span-2">
          <span className="text-sm font-semibold text-esa-navy">Author</span>
          <input
            value={form.author}
            onChange={(e) => setForm((p) => ({ ...p, author: e.target.value }))}
            className="w-full rounded-lg border border-esa-border bg-white px-3 py-2.5 text-sm focus-esa"
          />
        </label>
      </div>

      <ImageUploadField
        value={form.featuredImage}
        onChange={(featuredImage) => setForm((p) => ({ ...p, featuredImage }))}
      />

      <label className="block space-y-1.5">
        <span className="text-sm font-semibold text-esa-navy">Short excerpt</span>
        <textarea
          required
          rows={3}
          value={form.excerpt}
          onChange={(e) => setForm((p) => ({ ...p, excerpt: e.target.value }))}
          placeholder="1–2 sentences shown on the blog listing card"
          className="w-full rounded-lg border border-esa-border bg-white px-3 py-2.5 text-sm focus-esa"
        />
      </label>

      <div className="space-y-1.5">
        <span className="text-sm font-semibold text-esa-navy">Content</span>
        <RichTextEditor
          value={form.content}
          onChange={(content) => setForm((p) => ({ ...p, content }))}
        />
        <p className="text-xs text-esa-muted">Use headings and lists for a clear, readable article.</p>
      </div>

      {error ? <p className="rounded-lg bg-esa-red-soft px-3 py-2 text-sm text-esa-red">{error}</p> : null}
      {message ? (
        <p className="rounded-lg bg-esa-gold-soft px-3 py-2 text-sm text-esa-navy">
          {message}
          {publishedSlug ? (
            <>
              {" "}
              <a href={`/blog/${publishedSlug}`} className="font-semibold text-esa-red underline" target="_blank" rel="noreferrer">
                Open post
              </a>
            </>
          ) : null}
        </p>
      ) : null}

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          disabled={!!saving}
          onClick={() => submit("DRAFT")}
          className="rounded-lg border border-esa-border bg-white px-5 py-2.5 text-sm font-semibold text-esa-navy transition hover:bg-esa-soft focus-esa disabled:opacity-60"
        >
          {saving === "draft" ? "Saving…" : "Save draft"}
        </button>
        <button
          type="button"
          disabled={!!saving}
          onClick={() => submit("PUBLISHED")}
          className="rounded-lg bg-esa-red px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-esa-red-dark focus-esa disabled:opacity-60"
        >
          {saving === "publish" ? "Publishing…" : "Publish to blog"}
        </button>
      </div>
    </form>
  );
}
