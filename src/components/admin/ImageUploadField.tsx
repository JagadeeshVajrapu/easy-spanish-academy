"use client";

import Image from "next/image";
import { useState } from "react";
import { shouldUnoptimizeImage } from "@/lib/blog-media";

type ImageUploadFieldProps = {
  value: string;
  onChange: (url: string) => void;
};

export function ImageUploadField({ value, onChange }: ImageUploadFieldProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function onFileChange(file: File | null) {
    if (!file) return;
    setError("");
    setUploading(true);
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: form });
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Upload failed.");
      }
      onChange(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-3">
      <label className="block text-sm font-semibold text-esa-navy">Featured image</label>
      <input
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        disabled={uploading}
        onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
        className="block w-full text-sm text-esa-muted file:mr-3 file:rounded-lg file:border-0 file:bg-esa-red file:px-3 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-esa-red-dark"
      />
      <p className="text-xs text-esa-muted">
        JPG, PNG, WEBP or GIF · max 5MB · uploaded to Cloudinary
      </p>
      {uploading ? <p className="text-sm text-esa-navy">Uploading…</p> : null}
      {error ? <p className="text-sm text-esa-red">{error}</p> : null}
      {value ? (
        <div className="relative aspect-[16/9] max-w-xl overflow-hidden rounded-xl border border-esa-border bg-esa-soft">
          <Image
            src={value}
            alt="Featured preview"
            fill
            className="object-cover"
            sizes="640px"
            unoptimized={shouldUnoptimizeImage(value)}
          />
        </div>
      ) : null}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="https://res.cloudinary.com/…"
        className="w-full rounded-lg border border-esa-border bg-white px-3 py-2 text-sm focus-esa"
      />
    </div>
  );
}
