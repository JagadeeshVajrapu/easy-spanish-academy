"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { ArrowUpRight, Clock3 } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";
import { ImageHover } from "@/components/ui/ImageHover";
import { cn } from "@/lib/utils";

type BlogCardProps = {
  post: BlogPost;
  className?: string;
  showOutline?: boolean;
};

export function BlogCard({ post, className, showOutline = true }: BlogCardProps) {
  const pathname = usePathname();
  const href = `/blog#${post.slug}`;

  function goToTopic(event: MouseEvent<HTMLAnchorElement>) {
    if (pathname !== "/blog") return;
    event.preventDefault();
    const el = document.getElementById(post.slug);
    if (!el) return;
    window.history.pushState(null, "", href);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-esa-border bg-white shadow-esa-soft transition duration-300 ease-out",
        "hover:-translate-y-1.5 hover:border-esa-red/25 hover:shadow-esa-lift",
        className,
      )}
    >
      <Link
        href={href}
        onClick={goToTopic}
        className="relative block aspect-[16/10] overflow-hidden focus-esa"
      >
        <ImageHover>
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            loading="eager"
            className="object-cover object-center transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </ImageHover>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-esa-navy/45 via-transparent to-transparent opacity-70 transition duration-300 group-hover:opacity-95" />
        <span className="absolute left-4 top-4 rounded-lg bg-white/95 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-esa-red shadow-esa-soft transition group-hover:scale-[1.03]">
          {post.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 inline-flex items-center gap-1.5 text-sm font-medium text-esa-muted">
          <Clock3 className="h-3.5 w-3.5" aria-hidden />
          {post.readTime}
        </div>

        <h3 className="min-h-[3.25rem] font-display text-xl font-semibold leading-snug text-esa-navy transition-colors group-hover:text-esa-red sm:min-h-[3.5rem]">
          <Link href={href} onClick={goToTopic} className="focus-esa">
            {post.title}
          </Link>
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-esa-muted sm:text-[0.95rem]">
          {post.excerpt}
        </p>

        {showOutline ? (
          <ul className="mt-4 space-y-1.5 border-t border-esa-border/80 pt-4">
            {post.outline.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-esa-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-esa-red" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <Link
          href={href}
          onClick={goToTopic}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-esa-red transition-colors hover:text-esa-red-dark focus-esa"
        >
          View topic
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
