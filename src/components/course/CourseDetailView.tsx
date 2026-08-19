import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { FlagAccent } from "@/components/ui/FlagAccent";
import {
  courseHref,
  courseTopicsHref,
  type CourseProgram,
} from "@/lib/course-data";
import { SITE } from "@/lib/constants";

type CourseDetailViewProps = {
  course: CourseProgram;
};

export function CourseDetailView({ course }: CourseDetailViewProps) {
  const demoHref = `/book-demo?interest=${encodeURIComponent(course.enquiryInterest)}`;
  const topicsHref = `${courseHref(course)}#topics`;

  return (
    <>
      {/* COURSE HERO — navy band like reference */}
      <section className="bg-esa-navy text-white">
        <div className="container-esa py-12 sm:py-14 lg:py-16">
          <p className="text-label text-esa-gold">Course</p>
          <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold text-white">
            <FlagAccent country={course.flag} size="md" />
            {course.language}
          </div>
          <h1 className="text-hero mt-4 max-w-3xl text-white">{course.title}</h1>
          {course.audienceNote ? (
            <p className="mt-2 text-sm font-medium text-esa-gold">{course.audienceNote}</p>
          ) : null}
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {course.overview}
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-esa-gold">
            Levels: {course.levels}
          </p>
          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
            <a
              href={topicsHref}
              className="inline-flex items-center justify-center rounded-lg bg-esa-red px-5 py-3 text-sm font-semibold text-white transition hover:bg-esa-red-dark focus-esa"
            >
              View Topics
            </a>
            <Link
              href={demoHref}
              className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15 focus-esa"
            >
              Book a Demo
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-esa"
            >
              Talk to a Consultant
            </Link>
          </div>
        </div>
      </section>

      {/* COURSE INTRODUCTION */}
      <section className="section-pad bg-white">
        <div className="container-esa grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-label text-esa-red">Course Introduction</p>
            <h2 className="text-section mt-2">What you will learn</h2>
            <p className="mt-4 text-base leading-relaxed text-esa-muted">
              {course.introduction}
            </p>
            {course.whoFor ? (
              <p className="mt-4 rounded-xl border border-esa-border bg-esa-bg px-4 py-3 text-sm text-esa-navy">
                <span className="font-semibold">Who it is for: </span>
                {course.whoFor}
              </p>
            ) : null}
            <ul className="mt-6 space-y-2.5">
              {course.outcomes.slice(0, 4).map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-esa-muted">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-esa-red" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-esa-border shadow-esa-soft">
            <Image
              src={course.image}
              alt={course.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* COURSE LEVEL */}
      <section className="section-pad bg-esa-bg">
        <div className="container-esa">
          <p className="text-label text-esa-red">Course Level</p>
          <h2 className="text-section mt-2">Choose your starting level</h2>
          <p className="mt-3 max-w-2xl text-esa-muted">
            Levels follow a clear A1–B2 pathway. When you book a demo, share your
            experience and we will help you begin at the right stage.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {course.levelDetails.map((level) => (
              <article
                key={level.code}
                className="flex h-full flex-col rounded-xl border border-esa-border bg-white p-5 shadow-esa-soft"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-lg bg-esa-navy px-2 text-base font-bold text-white">
                    {level.code}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-esa-muted">
                    {level.title}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-esa-muted">
                  {level.description}
                </p>
                <ul className="mt-4 flex-1 space-y-2 border-t border-esa-border pt-4">
                  {level.focus.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-esa-navy/80">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-esa-red" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COURSE TOPICS */}
      <section id="topics" className="section-pad scroll-mt-24 bg-white">
        <div className="container-esa">
          <p className="text-label text-esa-red">Course Topics</p>
          <h2 className="text-section mt-2">What the course covers</h2>
          <p className="mt-3 max-w-2xl text-esa-muted">
            Core topics and practice areas that shape your learning journey.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {course.topicDetails.map((topic, index) => (
              <article
                key={topic.title}
                className="rounded-xl border border-esa-border bg-esa-bg p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-esa-red">
                  Topic {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-lg font-bold text-esa-navy">{topic.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-esa-muted">
                  {topic.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING AREAS */}
      <section className="section-pad bg-esa-bg">
        <div className="container-esa">
          <p className="text-label text-esa-red">Learning Areas</p>
          <h2 className="text-section mt-2">Skills you will develop</h2>
          <p className="mt-3 max-w-2xl text-esa-muted">
            Grammar, vocabulary, speaking, listening, reading, and writing—practiced
            together for real communication.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {course.skills.map((skill) => (
              <div
                key={skill.title}
                className="flex items-start gap-3 rounded-xl border border-esa-border bg-white p-4"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-esa-red-soft text-esa-red">
                  <BookOpenCheck className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <h3 className="font-bold text-esa-navy">{skill.title}</h3>
                  <p className="mt-1 text-sm text-esa-muted">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-esa-muted">{course.certification}</p>
        </div>
      </section>

      {/* COURSE BENEFITS */}
      <section className="section-pad bg-white">
        <div className="container-esa">
          <p className="text-label text-esa-red">Course Benefits</p>
          <h2 className="text-section mt-2">Why this pathway works</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {course.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-esa-border bg-esa-bg px-4 py-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-esa-red" />
                <p className="text-sm font-medium text-esa-navy">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-esa-bg">
        <div className="container-esa grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div>
            <p className="text-label text-esa-red">FAQ</p>
            <h2 className="text-section mt-2">Course questions</h2>
            <p className="mt-3 text-esa-muted">
              Quick answers before you book a demo or talk to a consultant.
            </p>
          </div>
          <Accordion items={course.faq} />
        </div>
      </section>

      {/* BOOK A DEMO */}
      <section className="section-pad bg-white">
        <div className="container-esa">
          <div className="rounded-2xl border border-esa-border bg-esa-bg p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <div className="max-w-xl">
              <p className="text-label text-esa-red">Book a Demo</p>
              <h2 className="text-section mt-2">Ready to experience a class?</h2>
              <p className="mt-3 text-esa-muted">
                Book a demo for {course.shortTitle} and tell us your goals. We will
                help you take the next step.
              </p>
            </div>
            <Link
              href={demoHref}
              className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-lg bg-esa-red px-5 py-3 text-sm font-semibold text-white transition hover:bg-esa-red-dark focus-esa lg:mt-0"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* TALK TO CONSULTANT */}
      <section className="section-pad bg-esa-navy text-white">
        <div className="container-esa grid gap-6 lg:grid-cols-[1.2fr_auto] lg:items-center">
          <div>
            <p className="text-label text-esa-gold">Consultant</p>
            <h2 className="text-section mt-2 text-white">
              Need help choosing the right course?
            </h2>
            <p className="mt-3 max-w-2xl text-white/75">
              Talk to our consultant about {course.title}. We will help you compare
              pathways based on your experience and goals. Call{" "}
              <a href={SITE.phoneHref} className="font-semibold text-esa-gold focus-esa">
                {SITE.phoneDisplay}
              </a>
              .
            </p>
          </div>
          <div className="flex flex-col gap-2.5 sm:flex-row lg:flex-col">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-esa-red px-5 py-3 text-sm font-semibold text-white transition hover:bg-esa-red-dark focus-esa"
            >
              <MessageSquare className="h-4 w-4" aria-hidden />
              Talk to a Consultant
            </Link>
            <a
              href={topicsHref}
              className="inline-flex items-center justify-center rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-esa"
            >
              View Topics
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/** Listing card used on /courses and language pages — reference style, not marketplace. */
export function CourseProgramCard({ course }: { course: CourseProgram }) {
  const href = courseHref(course);
  const topicsHref = courseTopicsHref(course);
  const demoHref = `/book-demo?interest=${encodeURIComponent(course.enquiryInterest)}`;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-esa-border bg-white shadow-esa-soft">
      <div className="border-b border-esa-border bg-esa-bg px-5 py-4">
        <div className="flex items-center justify-between gap-2">
          <FlagAccent country={course.flag} />
          <span className="rounded-md bg-esa-navy px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
            {course.levels}
          </span>
        </div>
        <h3 className="mt-3 text-xl font-bold text-esa-navy">{course.title}</h3>
        {course.audienceNote ? (
          <p className="mt-1 text-xs font-semibold text-esa-red">{course.audienceNote}</p>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-esa-muted">{course.overview}</p>
        <ul className="mt-4 space-y-2 border-t border-esa-border pt-4">
          {course.topics.slice(0, 4).map((topic) => (
            <li key={topic} className="flex gap-2 text-sm text-esa-navy/85">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-esa-red" />
              {topic}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-col gap-2">
          <Link
            href={topicsHref}
            className="inline-flex items-center justify-center rounded-lg bg-esa-red px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-esa-red-dark focus-esa"
          >
            View Topics
          </Link>
          <div className="grid grid-cols-2 gap-2">
            <Link
              href={demoHref}
              className="inline-flex items-center justify-center rounded-lg border border-esa-border bg-white px-3 py-2.5 text-sm font-semibold text-esa-navy transition hover:bg-esa-soft focus-esa"
            >
              Book a Demo
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-esa-border bg-white px-3 py-2.5 text-sm font-semibold text-esa-navy transition hover:bg-esa-soft focus-esa"
            >
              Talk to a Consultant
            </Link>
          </div>
        </div>
        <Link
          href={href}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-esa-red focus-esa"
        >
          Open full course page
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
