import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock3, UserRound } from "lucide-react";
import { BlogCard } from "@/components/sections/BlogCard";
import {
  getPublishedBlogBySlug,
  listPublishedBlogs,
  listRelatedBlogs,
} from "@/lib/blog-service";
import { resolveBlogImage, shouldUnoptimizeImage } from "@/lib/blog-media";
import { SITE } from "@/lib/constants";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  try {
    const blogs = await listPublishedBlogs();
    return blogs.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedBlogBySlug(slug);
  if (!post) return { title: "Blog" };

  const url = `${SITE.url}/blog/${post.slug}`;
  const image = resolveBlogImage(post.featuredImage);

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      images: [{ url: image, alt: post.title }],
      publishedTime: post.publishedAt ?? undefined,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  };
}

function formatDate(value: string | null) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPublishedBlogBySlug(slug);
  if (!post) notFound();

  const related = await listRelatedBlogs(post.slug, post.category, 3);
  const pageUrl = `${SITE.url}/blog/${post.slug}`;
  const featuredImage = resolveBlogImage(post.featuredImage);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [featuredImage],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    articleSection: post.category,
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-esa-navy text-white">
        <div className="container-esa py-10 sm:py-12 lg:py-14">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-esa-gold focus-esa"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to Blog
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-lg bg-white/15 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-esa-gold">
              {post.category}
            </span>
            {post.publishedAt ? (
              <span className="inline-flex items-center gap-1.5 text-sm text-white/75">
                <Clock3 className="h-3.5 w-3.5" aria-hidden />
                {formatDate(post.publishedAt)}
              </span>
            ) : null}
            <span className="inline-flex items-center gap-1.5 text-sm text-white/75">
              <UserRound className="h-3.5 w-3.5" aria-hidden />
              {post.author}
            </span>
          </div>
          <h1 className="text-hero mt-4 max-w-4xl text-white">{post.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
            {post.excerpt}
          </p>
        </div>
      </section>

      <section className="section-pad bg-esa-bg">
        <div className="container-esa mx-auto max-w-4xl">
          <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl border border-esa-border shadow-esa-soft">
            <Image
              src={featuredImage}
              alt={post.title}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 896px"
              unoptimized={shouldUnoptimizeImage(featuredImage)}
            />
          </div>

          <div
            className="prose-esa blog-article rounded-2xl border border-esa-border bg-white p-6 shadow-esa-soft sm:p-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {related.length > 0 ? (
        <section className="section-pad border-t border-esa-border bg-white">
          <div className="container-esa mx-auto max-w-4xl">
            <p className="text-label text-esa-red">Related blogs</p>
            <h2 className="text-section mt-2">Keep reading</h2>
            <div className="mt-8 flex flex-col gap-5">
              {related.map((item) => (
                <BlogCard key={item.id} post={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
