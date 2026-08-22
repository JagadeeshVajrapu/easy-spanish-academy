import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  ChevronRight,
  MessageSquare,
  Phone,
} from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { FlagAccent } from "@/components/ui/FlagAccent";
import {
  courseHref,
  courseTopicsHref,
  type CourseProgram,
} from "@/lib/course-data";
import { SITE } from "@/lib/constants";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type CourseDetailViewProps = {
  course: CourseProgram;
  breadcrumbs?: BreadcrumbItem[];
};

export function CourseDetailView({ course, breadcrumbs }: CourseDetailViewProps) {
  const demoHref = `/book-demo?interest=${encodeURIComponent(course.enquiryInterest)}`;
  const topicsHref = `${courseHref(course)}#topics`;

  return (
    <>
      {/* COURSE HERO */}
      <section className="bg-esa-navy text-white">
        <div className="container-esa py-10 sm:py-12 lg:py-14">
          {breadcrumbs?.length ? (
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-white/80">
              {breadcrumbs.map((item, index) => (
                <span key={`${item.label}-${index}`} className="inline-flex items-center gap-1.5">
                  {index > 0 ? (
                    <ChevronRight className="h-3.5 w-3.5 shrink-0 text-white/65" aria-hidden />
                  ) : null}
                  {item.href ? (
                    <Link href={item.href} className="text-white/85 transition hover:text-esa-gold focus-esa">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-white">{item.label}</span>
                  )}
                </span>
              ))}
            </nav>
          ) : null}

          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div className="min-w-0">
              <p className="text-label text-esa-gold">Course</p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold text-white">
                <FlagAccent country={course.flag} size="md" />
                {course.language}
              </div>
              <h1 className="text-hero mt-4 max-w-3xl text-white">{course.title}</h1>
              {course.audienceNote ? (
                <p className="mt-3 text-sm font-medium text-esa-gold sm:text-base">
                  {course.audienceNote}
                </p>
              ) : null}
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                {course.overview}
              </p>
              <p className="mt-4 inline-flex rounded-lg bg-white/10 px-3 py-1.5 text-sm font-semibold uppercase tracking-wide text-esa-gold">
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

            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-white/15 shadow-esa-lift lg:mx-0 lg:max-w-none">
              <Image
                src={course.image}
                alt={course.imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* COURSE INTRODUCTION */}
      <section className="section-pad bg-white">
        <div className="container-esa mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <p className="text-label text-esa-red">Course Introduction</p>
            <h2 className="text-section mt-2">What you will learn</h2>
            <p className="mt-4 text-base leading-relaxed text-esa-muted sm:text-lg">
              {course.introduction}
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-10">
            {course.whoFor ? (
              <p className="rounded-xl border border-esa-border bg-esa-bg px-5 py-4 text-sm leading-relaxed text-esa-navy sm:text-base">
                <span className="font-semibold text-esa-red">Who it is for: </span>
                {course.whoFor}
              </p>
            ) : (
              <div aria-hidden />
            )}
            <ul className="space-y-3">
              {course.outcomes.slice(0, 4).map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl border border-esa-border bg-esa-bg px-4 py-3 text-sm text-esa-navy/90 sm:text-base"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-esa-red" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* COURSE LEVEL */}
      <section className="section-pad bg-esa-bg">
        <div className="container-esa mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-label text-esa-red">Course Level</p>
            <h2 className="text-section mt-2">Choose your starting level</h2>
            <p className="mt-3 text-esa-muted">
              Levels follow a clear A1–B2 pathway. When you book a demo, share your
              experience and we will help you begin at the right stage.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {course.levelDetails.map((level) => (
              <article
                key={level.code}
                className="flex h-full flex-col rounded-xl border border-esa-border bg-white p-5 shadow-esa-soft"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-esa-navy text-base font-bold text-white">
                  {level.code}
                </span>
                <h3 className="mt-3 text-base font-bold text-esa-navy">{level.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-esa-muted">
                  {level.description}
                </p>
                <ul className="mt-4 space-y-2 border-t border-esa-border pt-4">
                  {level.focus.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-esa-navy/85">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-esa-red" />
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
      <section id="topics" className="section-pad scroll-mt-36 bg-white">
        <div className="container-esa mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-label text-esa-red">Course Topics</p>
            <h2 className="text-section mt-2">What the course covers</h2>
            <p className="mt-3 text-esa-muted">
              Core topics and practice areas that shape your learning journey.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {course.topicDetails.map((topic, index) => (
              <article
                key={topic.title}
                className="flex h-full flex-col rounded-xl border border-esa-border bg-esa-bg p-5 transition hover:border-esa-red/20 hover:shadow-esa-soft"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-esa-red">
                  Topic {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-lg font-bold text-esa-navy">{topic.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-esa-muted">
                  {topic.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING AREAS */}
      <section className="section-pad bg-esa-bg">
        <div className="container-esa mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-label text-esa-red">Learning Areas</p>
            <h2 className="text-section mt-2">Skills you will develop</h2>
            <p className="mt-3 text-esa-muted">
              Grammar, vocabulary, speaking, listening, reading, and writing—practiced
              together for real communication.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {course.skills.map((skill) => (
              <div
                key={skill.title}
                className="flex h-full items-start gap-3 rounded-xl border border-esa-border bg-white p-5"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-esa-red-soft text-esa-red">
                  <BookOpenCheck className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-bold text-esa-navy">{skill.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-esa-muted">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 rounded-xl border border-esa-border bg-white px-5 py-4 text-sm leading-relaxed text-esa-muted">
            {course.certification}
          </p>
        </div>
      </section>

      {/* COURSE BENEFITS */}
      <section className="section-pad bg-white">
        <div className="container-esa mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-label text-esa-red">Course Benefits</p>
            <h2 className="text-section mt-2">Why this pathway works</h2>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {course.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-esa-border bg-esa-bg px-4 py-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-esa-red" />
                <p className="text-sm font-medium leading-relaxed text-esa-navy sm:text-base">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-esa-bg">
        <div className="container-esa mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
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
        <div className="container-esa mx-auto max-w-6xl">
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
        <div className="container-esa mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.2fr_auto] lg:items-center">
          <div>
            <p className="text-label text-esa-gold">Consultant</p>
            <h2 className="text-section mt-2 text-white">
              Need help choosing the right course?
            </h2>
            <p className="mt-3 max-w-2xl text-white/80">
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

/** Listing card used on /courses and language pages. */
export function CourseProgramCard({ course }: { course: CourseProgram }) {
  const href = courseHref(course);
  const topicsHref = courseTopicsHref(course);
  const demoHref = `/book-demo?interest=${encodeURIComponent(course.enquiryInterest)}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-esa-border bg-white shadow-esa-soft transition duration-200 hover:border-esa-red/20 hover:shadow-esa-lift">
      <Link href={href} className="relative block h-36 overflow-hidden focus-esa sm:h-40">
        <Image
          src={course.image}
          alt={course.imageAlt}
          fill
          className="object-cover object-center transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-esa-navy/50 to-transparent" />
        <div className="absolute left-3 top-3 flex items-center gap-1.5">
          <FlagAccent country={course.flag} size="sm" />
          <span className="rounded bg-white/95 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-esa-navy">
            {course.levels}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex flex-wrap items-center gap-1.5">
          <span className="rounded-md bg-esa-red-soft px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-esa-red">
            {course.language}
          </span>
          {course.audienceNote ? (
            <span className="text-xs font-medium text-esa-muted">{course.audienceNote}</span>
          ) : null}
        </div>

        <h3 className="text-base font-bold leading-snug text-esa-navy">
          <Link href={href} className="transition hover:text-esa-red focus-esa">
            {course.title}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-esa-muted" title={course.overview}>
          {course.overview}
        </p>

        <ul className="mt-3 space-y-1.5 border-t border-esa-border pt-3">
          {course.topics.slice(0, 3).map((topic) => (
            <li key={topic} className="flex gap-2 text-xs text-esa-navy/85 sm:text-sm">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-esa-red" aria-hidden />
              <span>{topic}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-2 pt-4">
          <Link
            href={topicsHref}
            className="esa-btn inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-esa-red px-3 py-2.5 text-sm font-semibold text-white shadow-esa-soft transition hover:bg-esa-red-dark focus-esa"
          >
            View Topics
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
          <div className="grid grid-cols-2 gap-2">
            <Link
              href={demoHref}
              className="esa-btn inline-flex items-center justify-center gap-1 rounded-lg border border-esa-red/30 bg-esa-red-soft px-2 py-2 text-xs font-semibold text-esa-red transition hover:bg-esa-red hover:text-white focus-esa sm:text-sm"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden />
              Book a Demo
            </Link>
            <Link
              href="/contact"
              aria-label="Talk to a Consultant"
              className="esa-btn inline-flex items-center justify-center gap-1 rounded-lg border border-esa-border bg-white px-2 py-2 text-xs font-semibold text-esa-navy transition hover:bg-esa-soft focus-esa sm:text-sm"
            >
              <MessageSquare className="h-3.5 w-3.5 shrink-0" aria-hidden />
              Consultant
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
