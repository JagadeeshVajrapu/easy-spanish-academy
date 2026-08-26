import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  MessageCircle,
  MessageSquare,
  MonitorPlay,
  Phone,
  Mail,
  Route,
  Target,
} from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { FlagAccent } from "@/components/ui/FlagAccent";
import { ReviewsMarquee } from "@/components/sections/ReviewsMarquee";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { SITE } from "@/lib/constants";

const highlights = [
  {
    title: "Spanish & German Languages",
    detail: "Two languages under one structured online academy.",
    icon: "flags" as const,
  },
  {
    title: "A1 to B2 Pathways",
    detail: "Clear levels so you always know where you stand.",
    icon: Route,
  },
  {
    title: "Live Online Classes",
    detail: "Interactive Zoom and Google Meet Classes with expert trainers.",
    icon: MonitorPlay,
  },
  {
    title: "Weekdays & Weekend Batches",
    detail: "Flexible timings for students and working professionals.",
    icon: CalendarDays,
  },
  {
    title: "Speaking Focus",
    detail: "Practice that turns lessons into real conversation.",
    icon: MessageCircle,
  },
  {
    title: "Study Support",
    detail: "Online PDFs, Study Materials, and books delivered to your doorstep.",
    icon: BookOpen,
  },
];

const struggles = [
  {
    title: "I understand basics, but struggle to speak.",
    text: "We build speaking practice into every level—not just grammar drills.",
    icon: MessageSquare,
  },
  {
    title: "I don't know which level to start at.",
    text: "Book a demo and we help you begin at A1—or the right stage for you.",
    icon: Target,
  },
  {
    title: "I need structure, not random apps.",
    text: "Follow a level-based path from fundamentals to confident communication.",
    icon: Route,
  },
];

const journey = [
  { step: "01", title: "Start", text: "Learn the fundamentals." },
  { step: "02", title: "Build", text: "Grow grammar and vocabulary." },
  { step: "03", title: "Practice", text: "Improve listening and speaking." },
  { step: "04", title: "Progress", text: "Move through A1 to B2." },
  { step: "05", title: "Connect", text: "Use your language with confidence." },
];

const homeFaq = [
  {
    question: "Which languages and levels do you offer?",
    answer:
      "Spanish and German programs from A1 to B2—including certificate, intensive, and school pathways for different goals.",
  },
  {
    question: "Where should a beginner start?",
    answer:
      "Most beginners start at A1. Book a demo, share what you already know, and we will recommend the right starting level.",
  },
  {
    question: "How do I book a demo or get in touch?",
    answer:
      "Use Book a Demo on this site, call +91 9971-627-900, email easyspanishacademy01@gmail.com, or message us on WhatsApp. Visit us at C1, Madhuban Chowk, Pitampura, New Delhi - 110034.",
  },
  {
    question: "Is there a program for school students?",
    answer:
      "Yes. Our school course is designed for students aged 5–16 (up to Class 10) who want to build language skills alongside school.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="esa-surface-warm border-b border-esa-border/60">
        <div className="container-esa grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
          <div className="min-w-0">
            <p className="inline-flex max-w-full items-center rounded-full border border-esa-red/25 bg-esa-red-soft px-3.5 py-2 text-sm font-bold text-esa-red shadow-esa-soft sm:text-[0.95rem]">
              <span className="leading-snug">{SITE.instituteTagline}</span>
            </p>
            <h1 className="text-hero mt-5 max-w-2xl font-bold text-esa-navy">
              Learn Today. Speak Tomorrow.{" "}
              <span className="text-esa-red">Connect Forever.</span>
            </h1>
            <p className="mt-4 max-w-xl text-[1.05rem] font-medium leading-relaxed text-esa-navy/80 sm:text-lg">
              Online Spanish and German language programs from A1 to B2, featuring
              live classes, flexible weekdays and weekend batches, and a strong
              emphasis on speaking practice.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5" aria-label="Languages offered">
              <span className="inline-flex cursor-default select-none items-center gap-2.5 rounded-lg border border-esa-border bg-white px-4 py-2.5 text-base font-bold text-esa-navy shadow-esa-soft">
                <FlagAccent country="ES" size="lg" /> Spanish Language
              </span>
              <span className="inline-flex cursor-default select-none items-center gap-2.5 rounded-lg border border-esa-border bg-white px-4 py-2.5 text-base font-bold text-esa-navy shadow-esa-soft">
                <FlagAccent country="DE" size="lg" /> German Language
              </span>
            </div>
            <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
              <Link
                href="/book-demo"
                className="esa-btn inline-flex items-center justify-center rounded-lg bg-esa-red px-5 py-3.5 text-base font-bold text-white shadow-esa-soft hover:bg-esa-red-dark focus-esa"
              >
                Book a Free Demo
              </Link>
              <Link
                href="/courses"
                className="group esa-btn inline-flex items-center justify-center gap-1.5 rounded-lg border border-esa-border bg-white px-5 py-3.5 text-base font-semibold text-esa-navy hover:border-esa-red/25 hover:bg-esa-soft focus-esa"
              >
                Explore Courses
                <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="group relative mx-auto w-full max-w-lg lg:max-w-none">
            <div
              className="absolute -inset-3 rounded-[1.35rem] bg-gradient-to-br from-esa-gold/20 via-transparent to-esa-red/10 blur-sm"
              aria-hidden
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-esa-border shadow-esa-card">
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=80"
                alt="Learners building language confidence in a guided classroom setting"
                fill
                priority
                className="esa-media object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why ESA */}
      <section className="section-pad bg-white">
        <div className="container-esa">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-esa-red sm:text-base">
              Why Easy Spanish Academy
            </p>
            <h2 className="text-section mt-2">
              Language Learning Built for Real Progress
            </h2>
            <p className="mt-3 text-base leading-relaxed text-esa-navy/80 sm:text-lg">
              One academy, two languages, and a clear path from your first words to
              confident conversations.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="esa-lift esa-panel flex h-full flex-col rounded-xl border border-esa-border p-5 sm:p-6"
              >
                <div className="mb-4">
                  {item.icon === "flags" ? (
                    <span className="inline-flex items-center gap-2.5">
                      <FlagAccent country="ES" size="lg" />
                      <FlagAccent country="DE" size="lg" />
                    </span>
                  ) : (
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-esa-red-soft text-esa-red">
                      <item.icon className="h-5 w-5" aria-hidden />
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-esa-navy">{item.title}</h3>
                <p className="mt-2 flex-1 text-base font-medium leading-relaxed text-esa-navy/80">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center">
            <Link
              href="/why-choose-us"
              className="inline-flex items-center gap-2 text-sm font-semibold text-esa-red transition hover:text-esa-red-dark focus-esa"
            >
              See all reasons to choose us
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </p>
        </div>
      </section>

      <StatsStrip />

      {/* Challenges */}
      <section className="section-pad bg-esa-bg">
        <div className="container-esa grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-label text-esa-red">Sound familiar?</p>
            <h2 className="text-section mt-2">
              What&apos;s Holding You Back From Speaking?
            </h2>
            <p className="mt-3 text-esa-muted">
              Most learners face the same hurdles. A structured program and guided
              practice make the difference.
            </p>
            <Link
              href="/book-demo"
              className="group esa-btn mt-6 inline-flex items-center gap-2 rounded-lg bg-esa-red px-5 py-3 text-sm font-semibold text-white shadow-esa-soft hover:bg-esa-red-dark focus-esa"
            >
              Get Personal Guidance
              <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <ul className="space-y-3">
            {struggles.map((item) => (
              <li
                key={item.title}
                className="esa-lift-soft flex items-start gap-3 rounded-xl border border-esa-border bg-white px-4 py-4 sm:px-5"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-esa-red-soft text-esa-red">
                  <item.icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-bold text-esa-navy">{item.title}</h3>
                  <p className="mt-1 text-base leading-relaxed text-esa-muted">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Journey */}
      <section className="section-pad bg-white">
        <div className="container-esa">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-label text-esa-red">Your learning path</p>
            <h2 className="text-section mt-2">
              From First Words to Confident Conversations
            </h2>
          </div>

          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {journey.map((item) => (
              <li
                key={item.step}
                className="esa-lift flex h-full flex-col items-center rounded-xl border border-esa-border bg-esa-bg px-4 py-5 text-center"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-esa-navy text-sm font-bold text-white shadow-esa-soft">
                  {item.step}
                </span>
                <h3 className="mt-3 text-base font-bold text-esa-navy">{item.title}</h3>
                <p className="mt-1.5 text-base leading-relaxed text-esa-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Courses */}
      <section id="paths" className="section-pad scroll-mt-24 bg-esa-bg">
        <div className="container-esa">
          <div className="max-w-2xl">
            <p className="text-label text-esa-red">Courses</p>
            <h2 className="text-section mt-2">Choose Your Learning Path</h2>
            <p className="mt-3 text-esa-muted">
              Certificate & Diploma pathways from A1 to B2, plus school-oriented
              courses for young learners—delivered online across India.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <PathCard
              flag="ES"
              label="Spanish Language"
              title="Spanish Programs"
              text="Certificate & Diploma from A1 to B2, plus crash and school-oriented programs."
              href="/courses"
              cta="Explore Spanish"
            />
            <PathCard
              flag="DE"
              label="German Language"
              title="German Programs"
              text="Structured Certificate & Diploma pathway from A1 to B2."
              href="/courses/german/certificate-diploma"
              cta="Explore German"
            />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <GoalLink
              title="Beginner Programs"
              href="/courses/spanish/certificate-diploma"
            />
            <GoalLink title="Intensive Learning" href="/courses/spanish/crash-course" />
            <GoalLink title="School Programs" href="/courses/spanish/school-course" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad overflow-hidden bg-white pb-8 sm:pb-10">
        <div className="container-esa">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-label text-esa-red">Learner stories</p>
            <h2 className="text-section mt-2">What Our Students Say</h2>
            <p className="mt-3 text-esa-muted">
              Real progress from learners who followed a clear, guided path.
            </p>
          </div>
        </div>

        <ReviewsMarquee showHeading={false} fadeFrom="from-white" className="mt-8" />
      </section>

      {/* Book demo */}
      <section className="section-pad bg-esa-bg">
        <div className="container-esa">
          <div className="overflow-hidden rounded-2xl border border-esa-border bg-white shadow-esa-soft lg:grid lg:grid-cols-2">
            <div className="relative min-h-[240px] lg:min-h-[320px]">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
                alt="Learners in a guided language session"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-esa-navy/90 via-esa-navy/50 to-esa-navy/20 lg:bg-gradient-to-r lg:from-esa-navy/85 lg:via-esa-navy/45 lg:to-transparent" />
              <div className="relative flex h-full min-h-[240px] flex-col justify-end p-6 sm:p-8 lg:min-h-[320px]">
                <p className="text-label text-esa-gold">Free guidance</p>
                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Not Sure Where to Start?
                </h2>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
                  Book a demo—we help you pick the right language and level.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <ul className="space-y-3 text-sm text-esa-navy sm:text-base">
                {[
                  "Share your language goal and experience",
                  "Get a recommended starting level",
                  "Take the next step with clarity",
                ].map((line) => (
                  <li key={line} className="flex gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-esa-red" />
                    {line}
                  </li>
                ))}
              </ul>
              <Link
                href="/book-demo"
                className="group esa-btn mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-esa-red px-5 py-3.5 text-sm font-semibold text-white shadow-esa-soft hover:bg-esa-red-dark focus-esa"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="mt-3 text-center text-sm font-semibold text-esa-red transition hover:text-esa-red-dark focus-esa"
              >
                Or send an enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-pad scroll-mt-24 bg-white">
        <div className="container-esa grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
          <div>
            <p className="text-label text-esa-red">FAQ</p>
            <h2 className="text-section mt-2">Common Questions</h2>
            <p className="mt-3 text-esa-muted">
              Quick answers before you book a demo or explore courses.
            </p>
          </div>
          <Accordion items={homeFaq} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="esa-surface-warm section-pad border-t border-esa-border/60">
        <div className="container-esa text-center">
          <h2 className="text-section mx-auto max-w-2xl">
            Start Your Language Journey Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base font-medium leading-relaxed text-esa-navy/80 sm:text-lg">
            {SITE.tagline} — explore courses or book a demo to get started.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
            <Link
              href="/courses"
              className="group esa-btn inline-flex w-full items-center justify-center gap-2 rounded-lg bg-esa-red px-5 py-3.5 text-base font-semibold text-white shadow-esa-soft hover:bg-esa-red-dark focus-esa sm:w-auto"
            >
              Explore Courses
              <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/book-demo"
              className="group esa-btn inline-flex w-full items-center justify-center gap-2 rounded-lg border border-esa-border bg-white px-5 py-3.5 text-base font-semibold text-esa-navy hover:border-esa-red/25 focus-esa sm:w-auto"
            >
              Book a Demo
            </Link>
          </div>
          <div className="mt-8 flex flex-col items-center gap-3 text-base font-medium text-esa-navy/80 sm:flex-row sm:justify-center sm:gap-6">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 transition hover:text-esa-red focus-esa"
            >
              <Phone className="h-5 w-5 text-[#3B82F6]" aria-hidden />
              {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.emailHref}
              className="inline-flex items-center gap-2 whitespace-nowrap transition hover:text-esa-red focus-esa"
            >
              <Mail className="h-5 w-5 text-esa-red" aria-hidden />
              {SITE.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function PathCard({
  flag,
  label,
  title,
  text,
  href,
  cta,
}: {
  flag: "ES" | "DE";
  label: string;
  title: string;
  text: string;
  href: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group esa-lift esa-panel flex h-full flex-col rounded-2xl border border-esa-border p-6 shadow-esa-soft focus-esa sm:p-8"
    >
      <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-esa-red">
        <FlagAccent country={flag} size="lg" /> {label}
      </span>
      <h3 className="mt-4 text-2xl font-bold text-esa-navy transition group-hover:text-esa-red">
        {title}
      </h3>
      <p className="mt-3 flex-1 leading-relaxed text-esa-muted">{text}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-esa-red">
        {cta}
        <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

function GoalLink({ title, href }: { title: string; href: string }) {
  return (
    <Link
      href={href}
      className="group esa-lift-soft flex items-center justify-between rounded-xl border border-esa-border bg-white px-4 py-3.5 text-sm font-semibold text-esa-navy focus-esa"
    >
      {title}
      <ArrowRight className="h-4 w-4 shrink-0 text-esa-red transition duration-200 group-hover:translate-x-1" />
    </Link>
  );
}
