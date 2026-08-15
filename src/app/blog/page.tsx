import type { Metadata } from "next";
import Image from "next/image";
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
    "Language-learning guides from Easy Spanish Academy—Spanish starters, German A1 guidance, and tips on speaking practice.",
  openGraph: {
    title: `Blog | ${SITE.name}`,
    description:
      "Guides and topic outlines to support Spanish and German learners.",
    url: `${SITE.url}/blog`,
  },
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Ideas to inspire your language journey."
        description="Guides and topic outlines for Spanish, German, and speaking practice—helpful starting points while you explore our courses."
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
            eyebrow="Featured topic"
            title={featured.title}
            description={featured.excerpt}
          />
        </AnimateIn>

        <AnimateIn delay={0.06}>
          <article
            id={featured.slug}
            className="mt-10 scroll-mt-28 overflow-hidden rounded-3xl border border-esa-border bg-esa-surface shadow-esa-soft transition duration-300 hover:-translate-y-0.5 hover:border-esa-red/20 hover:shadow-esa-lift"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[240px] sm:min-h-[320px]">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
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
                <CardTitle as="h2" className="text-2xl sm:text-3xl">
                  {featured.title}
                </CardTitle>
                <BodyText className="mt-4">{featured.excerpt}</BodyText>
                <Label tone="muted" className="mt-6">
                  Topic outline
                </Label>
                <ol className="mt-3 space-y-2">
                  {featured.outline.map((item, index) => (
                    <li key={item} className="flex gap-3 text-sm text-esa-muted sm:text-base">
                      <span className="font-semibold text-esa-red">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </article>
        </AnimateIn>
      </Section>

      <Section tone="muted">
        <AnimateIn>
          <SectionHeading
            eyebrow="All topics"
            title="More guides to explore."
            description="Each topic includes a short summary and a clear outline you can use as a learning checklist."
          />
        </AnimateIn>

        <StaggerGroup className="mt-12 grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((post) => (
            <StaggerItem key={post.slug} className="h-full">
              <div id={post.slug} className="h-full scroll-mt-28">
                <BlogCard post={post} className="h-full" />
              </div>
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
