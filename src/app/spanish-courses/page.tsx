import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import {
  CourseCard,
  CourseCTA,
  CourseFAQ,
  CourseHero,
} from "@/components/course";
import {
  CEFR_LEVELS,
  SPANISH_COURSE_FAQS,
  SPANISH_COURSES,
} from "@/lib/course-data";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Spanish Courses",
  description:
    "Learn Spanish with confidence at Easy Spanish Academy. Certificate, Crash, and School-Oriented courses from A1 to B2. Contact us for details.",
  openGraph: {
    title: `Spanish Courses | ${SITE.name}`,
    description:
      "Build your Spanish skills from the fundamentals to confident communication. A1 to B2 pathways available.",
    url: `${SITE.url}/spanish-courses`,
  },
};

const tones = ["red", "gold", "navy"] as const;

export default function SpanishCoursesPage() {
  return (
    <>
      <CourseHero
        flag="ES"
        title="Learn Spanish With Confidence"
        description="Build your Spanish skills from the fundamentals to confident communication."
        image="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=2200&q=80"
        imageAlt="Warm European streetscape reflecting Spanish language and culture"
        levels={CEFR_LEVELS}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Spanish Courses" },
        ]}
        primaryCta={{ label: "Enquire About Spanish", href: "/contact?interest=Spanish%20Courses" }}
        secondaryCta={{ label: "Talk on WhatsApp", href: "https://wa.me/919971627900?text=Hello%21%20I%20would%20like%20to%20enquire%20about%20Spanish%20courses." }}
      />

      <Section tone="default" className="!py-10 sm:!py-12">
        <AnimateIn>
          <div className="flex flex-col gap-4 rounded-2xl border border-esa-border bg-mesh px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div>
              <p className="text-label text-esa-red">Jump to a program</p>
              <p className="mt-1 font-display text-lg font-semibold text-esa-navy">
                Three Spanish pathways from A1 to B2
              </p>
            </div>
            <nav aria-label="Spanish course programs" className="flex flex-wrap gap-2">
              {SPANISH_COURSES.map((course) => (
                <Link
                  key={course.id}
                  href={`#${course.id}`}
                  className="rounded-xl border border-esa-border bg-white px-3 py-2 text-sm font-semibold text-esa-navy transition hover:border-esa-red/30 hover:text-esa-red focus-esa"
                >
                  {course.id === "school"
                    ? "School-Oriented"
                    : course.id === "certificate"
                      ? "Certificate / Diploma"
                      : course.title}
                </Link>
              ))}
            </nav>
          </div>
        </AnimateIn>
      </Section>

      <Section tone="muted">
        <AnimateIn>
          <SectionHeading
            eyebrow="Spanish programs"
            title="Choose the pathway that matches your goals."
            description="Every course includes speaking, grammar, vocabulary, listening, reading, and writing support. Contact us for details on schedules and enrollment."
          />
        </AnimateIn>

        <div className="mt-12 space-y-8">
          {SPANISH_COURSES.map((course, index) => (
            <AnimateIn key={course.id} delay={index * 0.04}>
              <CourseCard course={course} tone={tones[index] ?? "red"} />
            </AnimateIn>
          ))}
        </div>
      </Section>

      <Section>
        <AnimateIn>
          <SectionHeading
            align="center"
            eyebrow="Also exploring German?"
            title="You can learn both languages with Easy Spanish Academy."
            description="If German is also on your mind, explore our Certificate / Diploma pathway from A1 to B2."
          />
        </AnimateIn>
        <StaggerGroup className="mx-auto mt-8 flex max-w-xl justify-center">
          <StaggerItem>
            <Link
              href="/german-courses"
              className="inline-flex rounded-xl bg-esa-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-esa-navy-soft focus-esa"
            >
              View German Courses
            </Link>
          </StaggerItem>
        </StaggerGroup>
      </Section>

      <CourseFAQ
        items={[...SPANISH_COURSE_FAQS]}
        title="Spanish course questions"
        description="Answers about levels, program types, and how to enquire. Contact us for current course details."
      />

      <CourseCTA
        language="Spanish"
        title="Ready to start speaking Spanish?"
        description="Enquire about Certificate, Crash, or School-Oriented Spanish courses and take the next step with confidence."
        primaryLabel="Enquire About Spanish"
        primaryHref="/contact?interest=Spanish%20Courses"
      />
    </>
  );
}
