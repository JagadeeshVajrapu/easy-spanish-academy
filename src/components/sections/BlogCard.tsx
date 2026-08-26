import Image from "next/image";
import Link from "next/link";
import { Clock3 } from "lucide-react";
import { resolveBlogImage, shouldUnoptimizeImage } from "@/lib/blog-media";
import type { PublicBlog } from "@/lib/blog-service";
import { cn } from "@/lib/utils";

type BlogCardProps = {
  post: PublicBlog;
  className?: string;
};

function formatDate(value: string | null) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/** Hablo-style horizontal row: image left, title / excerpt / read more right */
export function BlogCard({ post, className }: BlogCardProps) {
  const imageSrc = resolveBlogImage(post.featuredImage);

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-xl border border-esa-border bg-white shadow-esa-soft transition duration-300 hover:border-esa-red/25 hover:shadow-esa-card",
        className,
      )}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="grid focus-esa sm:grid-cols-[minmax(11rem,15rem)_1fr] md:grid-cols-[minmax(13rem,17rem)_1fr]"
      >
        <span className="relative block aspect-[16/11] overflow-hidden sm:aspect-auto sm:min-h-[9.5rem] md:min-h-[10.5rem]">
          <Image
            src={imageSrc}
            alt={post.title}
            fill
            loading="lazy"
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 280px"
            unoptimized={shouldUnoptimizeImage(imageSrc)}
          />
        </span>

        <span className="flex flex-col justify-center p-4 sm:p-5 md:p-6">
          <span className="mb-2 inline-flex flex-wrap items-center gap-2 text-xs font-medium text-esa-muted">
            <span className="rounded-md bg-esa-red-soft px-2 py-0.5 font-semibold uppercase tracking-wider text-esa-red">
              {post.category}
            </span>
            {post.publishedAt ? (
              <span className="inline-flex items-center gap-1">
                <Clock3 className="h-3.5 w-3.5" aria-hidden />
                {formatDate(post.publishedAt)}
              </span>
            ) : null}
          </span>

          <h3 className="font-display text-lg font-semibold leading-snug text-esa-navy transition-colors duration-300 group-hover:text-esa-red sm:text-xl">
            {post.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-esa-muted sm:line-clamp-3">
            {post.excerpt}
          </p>

          <span className="mt-3 text-sm font-bold text-esa-red transition group-hover:text-esa-red-dark">
            Read more →
          </span>
        </span>
      </Link>
    </article>
  );
}
