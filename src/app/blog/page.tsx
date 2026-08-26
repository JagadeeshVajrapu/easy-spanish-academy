import type { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { BlogCard } from "@/components/sections/BlogCard";
import { PageHero } from "@/components/sections/PageHero";
import { listPublishedBlogs } from "@/lib/blog-service";
import { SITE } from "@/lib/constants";

export const dynamic = "force-dynamic";

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

export default async function BlogPage() {
  const blogs = await listPublishedBlogs();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Guides for Spanish and German learners."
        description="Practical articles for school students, working professionals, and adult learners—careers, beginners, and online class tips."
        image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Adult learner studying a language with books and notes"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      <Section>
        <AnimateIn>
          <SectionHeading
            eyebrow="All guides"
            title="Latest from our blog"
            description="Published guides for school students, professionals, and adult learners."
          />
        </AnimateIn>

        <StaggerGroup className="mt-10 mx-auto flex max-w-4xl flex-col gap-5">
          {blogs.map((post) => (
            <StaggerItem key={post.id}>
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        {blogs.length === 0 ? (
          <p className="mt-10 text-center text-sm text-esa-muted">
            No published blogs yet. Check back soon.
          </p>
        ) : null}
      </Section>
    </>
  );
}
