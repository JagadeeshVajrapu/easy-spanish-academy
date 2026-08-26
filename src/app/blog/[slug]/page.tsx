import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock3 } from "lucide-react";
import { CTABanner } from "@/components/sections/CTABanner";
import { BLOG_POSTS } from "@/lib/blog-data";
import { SITE } from "@/lib/constants";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);
  if (!post) return { title: "Blog" };

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: `${post.title} | ${SITE.name}`,
      description: post.excerpt,
      url: `${SITE.url}/blog/${post.slug}`,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <>
      <article>
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
              <span className="inline-flex items-center gap-1.5 text-sm text-white/75">
                <Clock3 className="h-3.5 w-3.5" aria-hidden />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-hero mt-4 max-w-4xl text-white">{post.title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
              {post.excerpt}
            </p>
          </div>
        </section>

        <section className="section-pad bg-esa-bg">
          <div className="container-esa mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
            <div>
              <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl border border-esa-border shadow-esa-soft">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>

              <div className="rounded-2xl border border-esa-border bg-white p-6 shadow-esa-soft sm:p-8">
                <p className="text-label text-esa-red">Guide overview</p>
                <h2 className="mt-2 text-2xl font-bold text-esa-navy">What you will learn</h2>
                <ul className="mt-5 space-y-3">
                  {post.outline.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-xl border border-esa-border bg-esa-bg px-4 py-3 text-base leading-relaxed text-esa-navy"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-esa-red" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-base leading-relaxed text-esa-muted">
                  Ready to begin? Explore our Spanish and German courses, or book a free
                  demo with Easy Spanish Academy.
                </p>

                <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                  <Link
                    href="/book-demo"
                    className="inline-flex items-center justify-center rounded-lg bg-esa-red px-5 py-3 text-sm font-bold text-white transition hover:bg-esa-red-dark focus-esa"
                  >
                    Book a Free Demo
                  </Link>
                  <Link
                    href="/courses"
                    className="inline-flex items-center justify-center rounded-lg border border-esa-border bg-white px-5 py-3 text-sm font-semibold text-esa-navy transition hover:bg-esa-soft focus-esa"
                  >
                    Explore Courses
                  </Link>
                </div>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="rounded-2xl border border-esa-border bg-white p-5 shadow-esa-soft">
                <p className="text-label text-esa-red">Topics</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-md bg-esa-soft px-2.5 py-1 text-xs font-semibold text-esa-navy"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-esa-border bg-white p-5 shadow-esa-soft">
                <p className="text-label text-esa-red">More guides</p>
                <ul className="mt-3 space-y-3">
                  {BLOG_POSTS.filter((item) => item.slug !== post.slug)
                    .slice(0, 3)
                    .map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/blog/${item.slug}`}
                          className="block text-sm font-semibold leading-snug text-esa-navy transition hover:text-esa-red focus-esa"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </article>

      <CTABanner
        title="Inspired to start learning?"
        description="Explore Spanish or German courses, or contact us for current course details."
      />
    </>
  );
}
