import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  CourseCard,
  CourseCTA,
  CourseFAQ,
  CourseHero,
  CourseLevelProgress,
} from "@/components/course";
import {
  CEFR_LEVELS,
  GERMAN_COURSE_FAQS,
  GERMAN_COURSES,
} from "@/lib/course-data";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "German Courses",
  description:
    "Learn German with confidence at Easy Spanish Academy. Certificate / Diploma pathway from A1 to B2. Contact us for details.",
  openGraph: {
    title: `German Courses | ${SITE.name}`,
    description:
      "Build German skills from A1 to B2 with structured speaking, grammar, vocabulary, and communication practice.",
    url: `${SITE.url}/german-courses`,
  },
};

export default function GermanCoursesPage() {
  const course = GERMAN_COURSES[0];

  return (
    <>
      <CourseHero
        flag="DE"
        title="Learn German With Confidence"
        description="Build your German skills from the fundamentals to confident communication through a structured Certificate / Diploma pathway."
        image="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=2200&q=80"
        imageAlt="European city architecture reflecting German language and culture"
        levels={CEFR_LEVELS}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "German Courses" },
        ]}
        primaryCta={{
          label: "Enquire About German",
          href: "/contact?interest=German%20Courses",
        }}
        secondaryCta={{
          label: "Talk on WhatsApp",
          href: "https://wa.me/919971627900?text=Hello%21%20I%20would%20like%20to%20enquire%20about%20German%20courses.",
        }}
      />

      <Section tone="mesh">
        <AnimateIn>
          <div className="grid items-center gap-8 rounded-3xl border border-esa-border bg-white/80 p-6 shadow-esa-soft sm:p-8 lg:grid-cols-[1fr_auto] lg:p-10">
            <div>
              <SectionHeading
                eyebrow="Certificate Diploma"
                title="A complete German pathway from A1 to B2."
                description="Progress through each level with speaking, grammar, vocabulary, listening, reading, and writing support."
              />
            </div>
            <div className="rounded-2xl border border-esa-border bg-esa-bg px-5 py-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-esa-muted">
                Level progress
              </p>
              <CourseLevelProgress levels={CEFR_LEVELS} />
            </div>
          </div>
        </AnimateIn>
      </Section>

      <Section>
        <AnimateIn>
          <CourseCard course={course} tone="navy" />
        </AnimateIn>
      </Section>

      <Section tone="muted">
        <AnimateIn>
          <SectionHeading
            align="center"
            eyebrow="Also exploring Spanish?"
            title="Spanish pathways are available too."
            description="Discover Certificate, Crash, and School-Oriented Spanish courses from A1 to B2."
          />
        </AnimateIn>
        <div className="mt-8 flex justify-center">
          <Link
            href="/spanish-courses"
            className="inline-flex rounded-xl bg-esa-red px-5 py-3 text-sm font-semibold text-white transition hover:bg-esa-red-dark focus-esa"
          >
            View Spanish Courses
          </Link>
        </div>
      </Section>

      <CourseFAQ
        items={[...GERMAN_COURSE_FAQS]}
        title="German course questions"
        description="Answers about levels, certification orientation, and how to enquire. Contact us for current course details."
      />

      <CourseCTA
        language="German"
        title="Ready to start speaking German?"
        description="Enquire about the German Certificate / Diploma pathway and take the next step toward confident communication."
        primaryLabel="Enquire About German"
        primaryHref="/contact?interest=German%20Courses"
      />
    </>
  );
}
