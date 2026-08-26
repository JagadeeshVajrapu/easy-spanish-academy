import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock3 } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { BlogCard } from "@/components/sections/BlogCard";
import { CTABanner } from "@/components/sections/CTABanner";
import { PageHero } from "@/components/sections/PageHero";
import { BodyText, CardTitle, CourseMeta, Label } from "@/components/ui/Typography";
import { BLOG_POSTS } from "@/lib/blog-data";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides on learning Spanish and German online in India—career benefits, German A1 for beginners, and tips for choosing the right language classes.",
  openGraph: {
    title: `Blog | ${SITE.name}`,
    description:
      "Practical guides for Spanish and German learners—career, beginners, and online class tips.",
    url: `${SITE.url}/blog`,
  },
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Guides for Spanish and German learners."
        description="Practical articles on careers, beginners, and choosing online Spanish & German classes. Click any guide to read the full page."
        image="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Books and learning materials for language study"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      <Section>
        <AnimateIn>
          <SectionHeading
            eyebrow="Featured guide"
            title={featured.title}
            description={featured.excerpt}
          />
        </AnimateIn>

        <AnimateIn delay={0.06}>
          <article className="group mt-10 overflow-hidden rounded-2xl border border-esa-border bg-esa-surface shadow-esa-soft transition duration-300 hover:-translate-y-1 hover:border-esa-red/20 hover:shadow-esa-card">
            <div className="grid lg:grid-cols-2">
              <Link
                href={`/blog/${featured.slug}`}
                className="relative min-h-[240px] overflow-hidden focus-esa sm:min-h-[300px]"
              >
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </Link>
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="rounded-lg bg-esa-red-soft px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-esa-red">
                    {featured.category}
                  </span>
                  <CourseMeta className="inline-flex items-center gap-1">
                    <Clock3 className="h-3.5 w-3.5" aria-hidden />
                    {featured.readTime}
                  </CourseMeta>
                </div>
                <CardTitle
                  as="h2"
                  className="text-2xl transition-colors duration-300 group-hover:text-esa-red sm:text-3xl"
                >
                  <Link href={`/blog/${featured.slug}`} className="focus-esa">
                    {featured.title}
                  </Link>
                </CardTitle>
                <BodyText className="mt-4">{featured.excerpt}</BodyText>
                {featured.keywords?.length ? (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {featured.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-md bg-esa-soft px-2.5 py-1 text-xs font-medium text-esa-navy/80"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                ) : null}
                <Label tone="muted" className="mt-6">
                  Key points
                </Label>
                <ul className="mt-3 space-y-2.5">
                  {featured.outline.slice(0, 4).map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-esa-navy/85 sm:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-esa-red" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="mt-6 inline-flex w-fit rounded-lg bg-esa-red px-5 py-3 text-sm font-bold text-white transition hover:bg-esa-red-dark focus-esa"
                >
                  Read full guide →
                </Link>
              </div>
            </div>
          </article>
        </AnimateIn>
      </Section>

      <Section tone="muted">
        <AnimateIn>
          <SectionHeading
            eyebrow="All guides"
            title="More guides to read"
            description="Click any card to open the full guide page."
          />
        </AnimateIn>

        <StaggerGroup className="mt-10 grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((post) => (
            <StaggerItem key={post.slug} className="h-full">
              <BlogCard post={post} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <CTABanner
        title="Inspired to start learning?"
        description="Explore Spanish or German courses, or contact us for current course details."
      />
    </>
  );
}
