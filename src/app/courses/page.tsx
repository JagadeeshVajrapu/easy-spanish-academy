import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FlagAccent } from "@/components/ui/FlagAccent";
import { CourseProgramCard } from "@/components/course/CourseDetailView";
import {
  ALL_COURSES,
  GERMAN_COURSES,
  SPANISH_COURSES,
} from "@/lib/course-data";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore Spanish and German courses at Easy Spanish Academy—Certificate & Diploma, Crash, and School-Oriented pathways from A1 to B2.",
  openGraph: {
    title: `Courses | ${SITE.name}`,
    url: `${SITE.url}/courses`,
  },
};

export default function CoursesIndexPage() {
  return (
    <>
      <section className="bg-esa-navy text-white">
        <div className="container-esa py-12 sm:py-14 lg:py-16">
          <p className="text-label text-esa-gold">Courses</p>
          <h1 className="text-hero mt-3 max-w-3xl text-white">
            Choose the language course that fits your goal
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
            Structured Spanish and German pathways from A1 to B2—with speaking
            practice, clear levels, and guidance when you enquire.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            <Link
              href="/courses/spanish"
              className="inline-flex items-center gap-2 rounded-lg bg-esa-red px-5 py-3 text-sm font-semibold text-white transition hover:bg-esa-red-dark focus-esa"
            >
              <FlagAccent country="ES" /> Spanish Courses
            </Link>
            <Link
              href="/courses/german/certificate-diploma"
              className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15 focus-esa"
            >
              <FlagAccent country="DE" /> German Courses
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-esa-bg">
        <div className="container-esa">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="inline-flex items-center gap-2 text-label text-esa-red">
                <FlagAccent country="ES" /> Spanish
              </p>
              <h2 className="text-section mt-2">Spanish programs</h2>
            </div>
            <Link
              href="/courses/spanish"
              className="text-sm font-semibold text-esa-red focus-esa"
            >
              View all Spanish →
            </Link>
          </div>
          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {SPANISH_COURSES.map((course) => (
              <CourseProgramCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-esa">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="inline-flex items-center gap-2 text-label text-esa-red">
                <FlagAccent country="DE" /> German
              </p>
              <h2 className="text-section mt-2">German program</h2>
            </div>
            <Link
              href="/courses/german/certificate-diploma"
              className="text-sm font-semibold text-esa-red focus-esa"
            >
              View German →
            </Link>
          </div>
          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:max-w-2xl">
            {GERMAN_COURSES.map((course) => (
              <CourseProgramCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-esa-border bg-esa-bg">
        <div className="container-esa grid gap-8 py-12 lg:grid-cols-2 lg:items-center lg:py-14">
          <div>
            <p className="text-label text-esa-red">Not sure where to start?</p>
            <h2 className="text-section mt-2">Which course is right for me?</h2>
            <ul className="mt-5 space-y-3 text-sm text-esa-muted">
              <li>
                <span className="font-semibold text-esa-navy">Certificate & Diploma — </span>
                Full A1–B2 pathway with balanced skills.
              </li>
              <li>
                <span className="font-semibold text-esa-navy">Crash Course — </span>
                Intensive learning with a speaking focus.
              </li>
              <li>
                <span className="font-semibold text-esa-navy">School Orientation — </span>
                Interactive Spanish for school students across major boards.
              </li>
              <li>
                <span className="font-semibold text-esa-navy">German Certificate — </span>
                Same clear A1–B2 structure for German.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-esa-border bg-white p-6 shadow-esa-soft">
            <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
                alt="Learners choosing a language pathway"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <p className="text-sm text-esa-muted">
              Book a demo or talk to a consultant—we will help you pick the right
              language and pathway.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <Link
                href="/book-demo"
                className="rounded-lg bg-esa-red px-5 py-3 text-sm font-semibold text-white hover:bg-esa-red-dark focus-esa"
              >
                Book a Demo
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-esa-border px-5 py-3 text-sm font-semibold text-esa-navy hover:bg-esa-soft focus-esa"
              >
                Talk to a Consultant
              </Link>
            </div>
            <p className="mt-4 text-xs text-esa-muted">
              {ALL_COURSES.length} course pathways available · Spanish & German
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
