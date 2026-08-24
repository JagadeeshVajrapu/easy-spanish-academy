import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FlagAccent } from "@/components/ui/FlagAccent";
import { CourseProgramCard } from "@/components/course/CourseDetailView";
import { SPANISH_COURSES } from "@/lib/course-data";
import { SITE } from "@/lib/constants";

type Props = { params: Promise<{ language: string }> };

export async function generateStaticParams() {
  // German has no listing page — it redirects to the A1–B2 certificate course.
  return [{ language: "spanish" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { language } = await params;
  if (language !== "spanish") {
    return { title: "Courses" };
  }
  return {
    title: "Spanish Courses",
    description: `Spanish courses at ${SITE.name}. Structured A1–B2 pathways with speaking practice.`,
    openGraph: {
      title: `Spanish Courses | ${SITE.name}`,
      url: `${SITE.url}/courses/spanish`,
    },
  };
}

export default async function LanguageCoursesPage({ params }: Props) {
  const { language } = await params;
  if (language !== "spanish") notFound();

  const courses = SPANISH_COURSES;
  const label = "Spanish";
  const flag = "ES";

  const languageHighlights = [
    {
      title: "2nd most spoken language",
      text: "Spanish is the world’s second-most spoken native language, used by hundreds of millions of people across Spain and Latin America.",
    },
    {
      title: "Global career & travel value",
      text: "Useful for hospitality, tourism, international business, study abroad, and cultural exchange across many countries.",
    },
    {
      title: "Clear learning pathway",
      text: "Our Certificate, Crash, and School Orientation programs follow a structured A1–B2 route with live speaking practice.",
    },
  ];

  return (
    <>
      <section className="bg-esa-navy text-white">
        <div className="container-esa py-12 sm:py-14">
          <p className="text-label text-esa-gold">Courses</p>
          <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold">
            <FlagAccent country={flag} size="md" /> {label}
          </div>
          <h1 className="text-hero mt-4 max-w-3xl text-white">
            {label} courses that fit your goal
          </h1>
          <p className="mt-4 max-w-2xl text-white/75">
            Certificate & Diploma, Crash, and School Orientation pathways—with clear
            levels and practical speaking practice.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            <Link
              href="/book-demo"
              className="rounded-lg bg-esa-red px-5 py-3 text-sm font-semibold text-white hover:bg-esa-red-dark focus-esa"
            >
              Book a Demo
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 focus-esa"
            >
              Talk to a Consultant
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-esa mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-label text-esa-red">Why Spanish</p>
            <h2 className="text-section mt-2">Language highlights</h2>
            <p className="mt-3 text-esa-muted">
              A few reasons learners choose Spanish—and how Easy Spanish Academy
              helps you build real speaking confidence.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {languageHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-esa-border bg-esa-bg p-5 shadow-esa-soft"
              >
                <h3 className="text-base font-bold text-esa-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-esa-muted">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-esa-bg">
        <div className="container-esa mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-label text-esa-red">Pathways</p>
            <h2 className="text-section mt-2">Pick your {label} pathway</h2>
            <p className="mt-3 text-esa-muted">
              Compare programs, explore full course details, and book a demo when
              you are ready to start.
            </p>
          </div>
          <div className="mt-8 grid auto-rows-fr gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {courses.map((course) => (
              <CourseProgramCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-esa flex flex-col gap-4 rounded-2xl border border-esa-border bg-esa-bg p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="text-xl font-bold text-esa-navy">Need help choosing?</h2>
            <p className="mt-2 text-sm text-esa-muted">
              Talk to a consultant or book a demo—we will guide you to the right
              starting level.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <Link
              href="/book-demo"
              className="rounded-lg bg-esa-red px-5 py-3 text-sm font-semibold text-white hover:bg-esa-red-dark focus-esa"
            >
              Book a Demo
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-esa-border bg-white px-5 py-3 text-sm font-semibold text-esa-navy hover:bg-esa-soft focus-esa"
            >
              Talk to a Consultant
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
