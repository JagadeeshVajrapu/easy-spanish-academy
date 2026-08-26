import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Globe2,
  GraduationCap,
  MessageSquare,
  Mic,
  MonitorPlay,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { FlagAccent } from "@/components/ui/FlagAccent";
import {
  LANGUAGE_ADDONS,
  LANGUAGE_HIGHLIGHTS,
  SCHOOL_BOARDS,
  SCHOOL_HERO_CHIPS,
  SCHOOL_STUDENT_GETS,
  courseHref,
  type CourseProgram,
} from "@/lib/course-data";
import { SITE } from "@/lib/constants";
import { whatsappUrl } from "@/lib/utils";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type CourseDetailViewProps = {
  course: CourseProgram;
  breadcrumbs?: BreadcrumbItem[];
};

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.85 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function CourseDetailView({ course, breadcrumbs }: CourseDetailViewProps) {
  const demoHref = `/book-demo?interest=${encodeURIComponent(course.enquiryInterest)}`;
  const isSchool = course.id === "school";
  const isBannerImage = course.image.startsWith("/images/");
  const highlights = LANGUAGE_HIGHLIGHTS[course.language];

  const schoolGetIcons = [
    MonitorPlay,
    Users,
    Mic,
    BookOpen,
    Globe2,
    GraduationCap,
  ] as const;

  const schoolChipIcons = [GraduationCap, MonitorPlay, BookOpen, Mic] as const;

  return (
    <>
      {/* COURSE HERO */}
      <section
        className={
          isSchool
            ? "relative overflow-hidden text-esa-navy"
            : "relative overflow-hidden bg-esa-navy text-white"
        }
      >
        {isSchool ? (
          <Image
            src={course.image}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            aria-hidden
          />
        ) : null}
        <div className="container-esa relative py-12 sm:py-14 lg:py-16">
          {!isSchool && breadcrumbs?.length ? (
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex flex-wrap items-center gap-1.5 text-sm font-medium text-white/90 sm:text-base"
            >
              {breadcrumbs.map((item, index) => (
                <span key={`${item.label}-${index}`} className="inline-flex items-center gap-1.5">
                  {index > 0 ? (
                    <ChevronRight className="h-3.5 w-3.5 shrink-0 text-white/65" aria-hidden />
                  ) : null}
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-white/85 transition hover:text-esa-gold focus-esa"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-white">{item.label}</span>
                  )}
                </span>
              ))}
            </nav>
          ) : null}

          <div
            className={
              isSchool
                ? "max-w-3xl rounded-3xl border border-white/80 bg-white/96 p-6 shadow-esa-lift backdrop-blur-md sm:p-8 lg:p-9"
                : "grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-12"
            }
          >
            {isSchool && breadcrumbs?.length ? (
              <nav
                aria-label="Breadcrumb"
                className="mb-5 flex flex-wrap items-center gap-1.5 text-sm font-medium text-esa-navy/70 sm:text-base"
              >
                {breadcrumbs.map((item, index) => (
                  <span key={`${item.label}-${index}`} className="inline-flex items-center gap-1.5">
                    {index > 0 ? (
                      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-esa-navy/40" aria-hidden />
                    ) : null}
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-esa-navy/75 transition hover:text-esa-red focus-esa"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="font-semibold text-esa-navy">{item.label}</span>
                    )}
                  </span>
                ))}
              </nav>
            ) : null}

            <div className="min-w-0">
              <p
                className={
                  isSchool
                    ? "text-sm font-bold uppercase tracking-[0.12em] text-esa-red sm:text-base"
                    : "text-sm font-bold uppercase tracking-[0.12em] text-esa-gold sm:text-base"
                }
              >
                {isSchool ? "Spanish classes for school students" : "Course"}
              </p>
              <div
                className={
                  isSchool
                    ? "mt-3 inline-flex items-center gap-3 rounded-xl border border-esa-border bg-esa-bg px-3.5 py-2.5 shadow-esa-soft"
                    : "mt-3 inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 shadow-esa-soft backdrop-blur-sm"
                }
              >
                <FlagAccent country={course.flag} size="xl" />
                <span className="min-w-0">
                  <span
                    className={
                      isSchool
                        ? "block text-xs font-semibold uppercase tracking-[0.14em] text-esa-red"
                        : "block text-xs font-semibold uppercase tracking-[0.14em] text-esa-gold"
                    }
                  >
                    {course.language === "Spanish" ? "Spain" : "Germany"}
                  </span>
                  <span
                    className={
                      isSchool
                        ? "block text-base font-bold text-esa-navy sm:text-lg"
                        : "block text-base font-bold text-white sm:text-lg"
                    }
                  >
                    {course.language} Language
                  </span>
                </span>
              </div>
              <h1
                className={
                  isSchool
                    ? "text-hero mt-4 max-w-3xl text-esa-navy"
                    : "text-hero mt-4 max-w-3xl text-white"
                }
              >
                {course.title}
              </h1>
              {course.audienceNote ? (
                <p
                  className={
                    isSchool
                      ? "mt-3 text-base font-semibold text-esa-red sm:text-lg md:text-xl"
                      : "mt-3 text-base font-semibold text-esa-gold sm:text-lg md:text-xl"
                  }
                >
                  {course.audienceNote}
                </p>
              ) : null}
              <p
                className={
                  isSchool
                    ? "mt-4 max-w-2xl text-base font-medium leading-relaxed text-esa-muted sm:text-lg"
                    : "mt-4 max-w-2xl text-base font-medium leading-relaxed text-white/95 sm:text-lg md:text-xl"
                }
              >
                {course.overview}
              </p>

              {isSchool ? (
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {SCHOOL_HERO_CHIPS.map((chip, index) => {
                    const Icon = schoolChipIcons[index] ?? Sparkles;
                    return (
                      <li
                        key={chip.label}
                        className="group flex items-start gap-3 rounded-2xl border border-esa-red/15 bg-gradient-to-br from-esa-red-soft/80 to-white px-3.5 py-3.5 shadow-esa-soft transition duration-200 hover:-translate-y-0.5 hover:border-esa-red/30 hover:shadow-esa-card"
                      >
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-esa-red text-white shadow-esa-soft transition duration-200 group-hover:scale-105">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <span className="min-w-0 pt-0.5">
                          <span className="block text-sm font-bold leading-snug text-esa-navy sm:text-[0.95rem]">
                            {chip.label}
                          </span>
                          <span className="mt-0.5 block text-xs font-medium text-esa-muted">
                            {chip.hint}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {LANGUAGE_ADDONS[course.language].map((line) => (
                    <li
                      key={line}
                      className="whitespace-nowrap rounded-full border border-white/20 bg-white/15 px-3.5 py-2 text-sm font-semibold text-white"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                <Link
                  href={demoHref}
                  className="inline-flex items-center justify-center rounded-lg bg-esa-red px-5 py-3.5 text-base font-semibold text-white transition hover:bg-esa-red-dark focus-esa"
                >
                  {isSchool ? "Book a Free Demo" : "Book a Demo"}
                </Link>
                <a
                  href={whatsappUrl(
                    isSchool
                      ? "Hello! I would like Spanish classes for my school student at Easy Spanish Academy."
                      : `Hello! I would like to enquire about the ${course.title} at Easy Spanish Academy.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3.5 text-base font-semibold text-white transition hover:bg-[#1da851] focus-esa"
                >
                  <WhatsAppGlyph className="h-4 w-4" />
                  WhatsApp
                </a>
                <Link
                  href="/contact"
                  className={
                    isSchool
                      ? "inline-flex items-center justify-center rounded-lg border border-esa-border bg-white px-5 py-3.5 text-base font-semibold text-esa-navy transition hover:bg-esa-soft focus-esa"
                      : "inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/10 px-5 py-3.5 text-base font-semibold text-white transition hover:bg-white/15 focus-esa"
                  }
                >
                  Talk to a Consultant
                </Link>
              </div>
            </div>

            {!isSchool ? (
              <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
                <div
                  aria-hidden
                  className={
                    course.language === "German"
                      ? "absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-[#000000]/25 via-[#DD0000]/20 to-[#FFCC00]/30 blur-[2px]"
                      : "absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-esa-red/30 via-esa-gold/25 to-white/10 blur-[2px]"
                  }
                />
                <div
                  className={
                    isBannerImage
                      ? "relative overflow-hidden rounded-2xl border border-white/25 bg-white p-2.5 shadow-esa-lift sm:p-3"
                      : "relative overflow-hidden rounded-2xl border border-white/15 shadow-esa-lift"
                  }
                >
                  <div
                    className={
                      isBannerImage
                        ? "relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-[#f7f5f2]"
                        : "relative aspect-[4/3] w-full"
                    }
                  >
                    <Image
                      src={course.image}
                      alt={course.imageAlt}
                      fill
                      className={
                        isBannerImage
                          ? "object-contain object-center"
                          : "object-cover object-center"
                      }
                      sizes="(max-width: 1024px) 90vw, 42vw"
                      priority
                    />
                  </div>
                  {isBannerImage ? (
                    <p className="mt-2.5 px-1 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-esa-navy/55 sm:text-xs">
                      {course.language === "German"
                        ? "German Certificate Pathway"
                        : "Spanish Certificate Pathway"}
                    </p>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* SCHOOL: boards + what students get + CTA */}
      {isSchool ? (
        <>
          <section className="section-pad bg-white">
            <div className="container-esa mx-auto max-w-6xl">
              <div className="overflow-hidden rounded-3xl border border-esa-border bg-gradient-to-br from-esa-bg via-white to-esa-red-soft/30 p-6 shadow-esa-soft sm:p-8 lg:p-10">
                <div className="max-w-3xl">
                  <p className="text-base font-bold uppercase tracking-[0.12em] text-esa-red sm:text-lg md:text-xl">
                    For all major school boards
                  </p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-esa-navy sm:text-3xl lg:text-4xl">
                    Spanish classes for every school board
                  </h2>
                  <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-esa-navy/80 sm:text-lg">
                    Live Spanish classes for school students—designed for different ages
                    across CBSE, ICSE, and State Boards.
                  </p>
                  <p className="mt-3 inline-flex max-w-2xl rounded-xl border border-esa-red/20 bg-white px-4 py-3 text-base font-semibold leading-relaxed text-esa-red shadow-esa-soft sm:text-lg">
                    Spanish Language Online & Offline Home Tuition is also Available
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {SCHOOL_BOARDS.map((board) => (
                    <span
                      key={board}
                      className="rounded-xl border border-esa-border bg-white px-5 py-3 text-sm font-bold text-esa-navy shadow-esa-soft transition hover:border-esa-red/25 hover:text-esa-red sm:text-base"
                    >
                      {board}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section-pad bg-esa-bg">
            <div className="container-esa mx-auto max-w-6xl">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-esa-red sm:text-base">
                  What students get
                </p>
                <h2 className="text-section mt-2">
                  Built for school learners who want to speak with confidence
                </h2>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {SCHOOL_STUDENT_GETS.map((item, index) => {
                  const Icon = schoolGetIcons[index] ?? Sparkles;
                  return (
                    <article
                      key={item.title}
                      className="flex h-full flex-col rounded-xl border border-esa-border bg-white p-5 shadow-esa-soft transition duration-200 hover:-translate-y-0.5 hover:border-esa-red/20 hover:shadow-esa-card"
                    >
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-esa-red-soft text-esa-red">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-esa-navy">
                        {item.title}
                      </h3>
                      <p className="mt-2 flex-1 text-base font-medium leading-relaxed text-esa-navy/80">
                        {item.text}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="section-pad bg-white">
            <div className="container-esa mx-auto max-w-6xl">
              <div className="overflow-hidden rounded-3xl border border-esa-border bg-esa-navy text-white shadow-esa-soft">
                <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="p-6 sm:p-8 lg:p-10">
                    <p className="text-sm font-bold uppercase tracking-[0.12em] text-esa-gold sm:text-base">
                      Free demo for school students
                    </p>
                    <h2 className="text-section mt-2 text-white">
                      Start Spanish classes with confidence
                    </h2>
                    <p className="mt-3 max-w-xl text-base font-medium text-white/95 sm:text-lg">
                      {course.introduction}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {course.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-2.5 text-base font-medium text-white/95"
                        >
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-esa-gold" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                      <Link
                        href={demoHref}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-esa-red px-5 py-3 text-sm font-semibold text-white transition hover:bg-esa-red-dark focus-esa"
                      >
                        Book a Free Demo
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                      <a
                        href={whatsappUrl(
                          "Hello! I would like Spanish tuition for my school student at Easy Spanish Academy.",
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1da851] focus-esa"
                      >
                        <WhatsAppGlyph className="h-4 w-4" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                  <div className="relative min-h-[220px] lg:min-h-full">
                    <Image
                      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
                      alt="School students smiling during a learning session"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="section-pad bg-white">
          <div className="container-esa mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-label text-esa-red">Why {course.language}</p>
              <h2 className="text-section mt-2">{course.language} language highlights</h2>
              <p className="mt-3 text-base font-medium leading-relaxed text-esa-navy/80 sm:text-lg">
                Useful facts about {course.language}—and why learners choose this
                pathway at Easy Spanish Academy.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-esa-border bg-esa-bg p-5 shadow-esa-soft"
                >
                  <h3 className="text-base font-bold text-esa-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-esa-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* COURSE BENEFITS — skipped for school (covered in What students get) */}
      {!isSchool ? (
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
            <p className="mt-8 rounded-xl border border-esa-border bg-esa-bg px-5 py-4 text-sm leading-relaxed text-esa-muted">
              {course.certification}
            </p>
          </div>
        </section>
      ) : null}

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

      {/* BOOK A DEMO — skipped for school (covered in Free demo section above) */}
      {!isSchool ? (
      <section className="section-pad bg-white">
        <div className="container-esa mx-auto max-w-6xl">
          <div className="rounded-2xl border border-esa-border bg-esa-bg p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <div className="max-w-xl">
              <p className="text-label text-esa-red">Book a Demo</p>
              <h2 className="text-section mt-2">Ready to experience a class?</h2>
              <p className="mt-3 text-esa-muted">
                Book a demo for {course.shortTitle} and tell us your goals. We will help
                you take the next step.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row lg:mt-0">
              <Link
                href={demoHref}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-esa-red px-5 py-3 text-sm font-semibold text-white transition hover:bg-esa-red-dark focus-esa"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={whatsappUrl(
                  `Hello! I would like to book a demo for ${course.title}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1da851] focus-esa"
              >
                <WhatsAppGlyph className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      ) : null}

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
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#3B82F6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB] focus-esa"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call Now
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
  const demoHref = `/book-demo?interest=${encodeURIComponent(course.enquiryInterest)}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-esa-border bg-white shadow-esa-soft transition duration-200 hover:border-esa-red/20 hover:shadow-esa-lift">
      <Link href={href} className="relative block h-36 overflow-hidden bg-esa-bg focus-esa sm:h-40">
        <Image
          src={course.image}
          alt={course.imageAlt}
          fill
          className={
            course.image.startsWith("/images/")
              ? "object-contain object-center transition duration-500 group-hover:scale-[1.02]"
              : "object-cover object-center transition duration-500 group-hover:scale-105"
          }
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {!course.image.startsWith("/images/") ? (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-esa-navy/50 to-transparent" />
        ) : null}
        <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-lg border border-white/40 bg-white/95 px-2.5 py-1.5 shadow-esa-soft backdrop-blur-sm">
          <FlagAccent country={course.flag} size="md" />
          <span className="text-[11px] font-bold uppercase tracking-wide text-esa-navy">
            {course.language} Language
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex flex-wrap items-center gap-1.5">
          <span className="rounded-md bg-esa-red-soft px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-esa-red">
            {course.language} Language
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
            href={href}
            className="esa-btn inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-esa-red px-3 py-2.5 text-sm font-semibold text-white shadow-esa-soft transition hover:bg-esa-red-dark focus-esa"
          >
            View Course
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
