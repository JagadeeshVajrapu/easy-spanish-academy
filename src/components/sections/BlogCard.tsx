import Image from "next/image";
import { Clock3 } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";
import { cn } from "@/lib/utils";

type BlogCardProps = {
  post: BlogPost;
  className?: string;
};

/** Read-only blog card — full summary and key points shown on the blog page (no separate article URLs). */
export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-esa-border bg-white shadow-esa-soft transition duration-300 hover:-translate-y-1.5 hover:border-esa-red/25 hover:shadow-esa-card",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          loading="lazy"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-esa-navy/40 via-transparent to-transparent transition duration-300 group-hover:from-esa-navy/55" />
        <span className="absolute left-4 top-4 rounded-lg bg-white/95 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-esa-red shadow-esa-soft transition duration-300 group-hover:scale-[1.03]">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-2 inline-flex items-center gap-1.5 text-sm font-medium text-esa-muted">
          <Clock3 className="h-3.5 w-3.5" aria-hidden />
          {post.readTime}
        </div>

        <h3 className="font-display text-xl font-semibold leading-snug text-esa-navy transition-colors duration-300 group-hover:text-esa-red sm:text-[1.35rem]">
          {post.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-esa-muted sm:text-[0.95rem]">
          {post.excerpt}
        </p>

        <div className="mt-4 flex-1 border-t border-esa-border/80 pt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-esa-red">
            Key points
          </p>
          <ul className="mt-2.5 space-y-2">
            {post.outline.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-esa-navy/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-esa-red" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
