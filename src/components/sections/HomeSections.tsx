import Image from "next/image";
import {
  ArrowRight,
  BookOpenCheck,
  GraduationCap,
  Languages,
  Mail,
  MessageSquare,
  MonitorPlay,
  Phone,
  Users,
} from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FlagAccent } from "@/components/ui/FlagAccent";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import {
  BodyText,
  CardTitle,
  Label,
} from "@/components/ui/Typography";
import { FEATURED_COURSES, HOME_FAQ_PREVIEW } from "@/lib/home-data";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const trustItems = [
  {
    icon: Languages,
    title: "Spanish & German",
    text: "Two language pathways under one academy",
  },
  {
    icon: GraduationCap,
    title: "A1 – B2 Levels",
    text: "Clear level-based course progression",
  },
  {
    icon: MonitorPlay,
    title: "Online Learning",
    text: "Learn in formats that fit your routine",
  },
  {
    icon: MessageSquare,
    title: "Speaking Practice",
    text: "Communication at the center of learning",
  },
];

const benefits = [
  {
    icon: BookOpenCheck,
    title: "Structured Learning",
    text: "A clear path from foundations to confident communication.",
  },
  {
    icon: MessageSquare,
    title: "Speaking Practice",
    text: "Guided conversation that helps you use the language actively.",
  },
  {
    icon: Users,
    title: "Beginner Friendly",
    text: "Supportive teaching for learners starting from the basics.",
  },
  {
    icon: MonitorPlay,
    title: "Flexible Learning",
    text: "Online-friendly options designed around real schedules.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Choose Your Language",
    text: "Decide whether Spanish, German, or both fits your goals.",
  },
  {
    step: "02",
    title: "Choose Your Course",
    text: "Explore certificate, crash, or school-oriented pathways.",
  },
  {
    step: "03",
    title: "Start Learning",
    text: "Begin with clear lessons and supportive guidance.",
  },
  {
    step: "04",
    title: "Practice & Improve",
    text: "Strengthen listening, speaking, and everyday communication.",
  },
];

export function HomeTrustStrip() {
  return (
    <Section tone="default" className="!py-10 sm:!py-12">
      <StaggerGroup className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {trustItems.map((item) => (
          <StaggerItem key={item.title}>
            <div className="group flex h-full items-start gap-3 rounded-2xl border border-esa-border bg-esa-bg/80 px-4 py-4 shadow-esa-soft transition duration-300 hover:-translate-y-1 hover:border-esa-red/25 hover:bg-white hover:shadow-esa-card sm:px-5">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-esa-navy text-white transition duration-300 group-hover:scale-105 group-hover:bg-esa-red">
                <item.icon className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="font-display text-base font-semibold text-esa-navy transition-colors group-hover:text-esa-red">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-esa-muted">{item.text}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}

export function HomeChooseLanguage() {
  return (
    <Section tone="mesh">
      <AnimateIn>
        <SectionHeading
          eyebrow="Choose your language"
          title="Two languages. One confident start."
          description="Pick the language that matches your goals—then explore courses shaped for real communication."
        />
      </AnimateIn>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <AnimateIn>
          <LanguageChoiceCard
            flag="ES"
            title="Spanish"
            headline="Start Spanish with confidence"
            description="A clear A1–B2 pathway built around understanding, practice, and real conversation."
            href="/spanish-courses"
            cta="Explore Spanish"
            image="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1400&q=80"
            imageAlt="Warm European street atmosphere reflecting Spanish culture"
            accent="red"
          />
        </AnimateIn>
        <AnimateIn delay={0.08}>
          <LanguageChoiceCard
            flag="DE"
            title="German"
            headline="Build German step by step"
            description="A structured A1–B2 journey with pronunciation support and practical communication."
            href="/courses/german/certificate-diploma"
            cta="Explore German"
            image="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1400&q=80"
            imageAlt="European architecture reflecting German language and culture"
            accent="navy"
          />
        </AnimateIn>
      </div>
    </Section>
  );
}

function LanguageChoiceCard({
  flag,
  title,
  headline,
  description,
  href,
  cta,
  image,
  imageAlt,
  accent,
}: {
  flag: "ES" | "DE";
  title: string;
  headline: string;
  description: string;
  href: string;
  cta: string;
  image: string;
  imageAlt: string;
  accent: "red" | "navy";
}) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-esa-border shadow-esa-card transition duration-500 hover:-translate-y-2 hover:border-esa-red/30 hover:shadow-esa-lift">
      <div className="relative min-h-[300px] sm:min-h-[380px] lg:min-h-[420px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-esa-navy via-esa-navy/55 to-esa-navy/10 transition duration-500 group-hover:from-esa-navy/95" />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
          <div className="inline-flex items-center gap-2 rounded-xl bg-white/95 px-3 py-2 text-sm font-semibold text-esa-navy shadow-esa-soft transition duration-300 group-hover:scale-[1.03]">
            <FlagAccent country={flag} size="md" />
            {title}
          </div>
          <h3 className="mt-3 font-display text-2xl font-semibold text-white transition-colors sm:mt-4 sm:text-4xl">
            {headline}
          </h3>
          <p className="mt-2 max-w-md text-sm text-white/80 sm:text-base">{description}</p>
          <Button
            href={href}
            className="mt-5 w-full sm:mt-6 sm:w-auto"
            variant={accent === "red" ? "primary" : "gold"}
          >
            {cta}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </div>
    </article>
  );
}

export function HomeFeaturedCourses() {
  const spanish = FEATURED_COURSES.filter((c) => c.language === "Spanish");
  const german = FEATURED_COURSES.filter((c) => c.language === "German");

  return (
    <Section id="featured-courses">
      <AnimateIn>
        <SectionHeading
          eyebrow="Featured courses"
          title="Main programs to begin your journey."
          description="Explore Spanish and German pathways from A1 to B2. Contact for details on schedules and enrollment."
        />
      </AnimateIn>

      <div className="mt-12 space-y-10">
        <div>
          <AnimateIn>
            <div className="mb-5 inline-flex items-center gap-2 rounded-xl bg-esa-red-soft px-3 py-2 text-sm font-semibold text-esa-red">
              <FlagAccent country="ES" /> Spanish programs
            </div>
          </AnimateIn>
          <StaggerGroup className="grid gap-5 lg:grid-cols-3">
            {spanish.map((course) => (
              <StaggerItem key={course.id}>
                <FeaturedCourseCard course={course} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <div>
          <AnimateIn>
            <div className="mb-5 inline-flex items-center gap-2 rounded-xl bg-esa-gold-soft px-3 py-2 text-sm font-semibold text-esa-navy">
              <FlagAccent country="DE" /> German programs
            </div>
          </AnimateIn>
          <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {german.map((course) => (
              <StaggerItem key={course.id}>
                <FeaturedCourseCard course={course} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </Section>
  );
}

function FeaturedCourseCard({
  course,
}: {
  course: (typeof FEATURED_COURSES)[number];
}) {
  const enquireHref = `/contact?interest=${encodeURIComponent(course.interest)}`;
  const isSpanish = course.language === "Spanish";

  return (
    <Card className="group relative flex h-full flex-col overflow-hidden p-0">
      <div
        className={cn(
          "h-1.5 w-full bg-gradient-to-r transition-opacity duration-300",
          isSpanish
            ? "from-esa-red via-esa-red-dark to-esa-gold"
            : "from-esa-navy via-esa-navy-soft to-esa-gold",
        )}
        aria-hidden
      />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-xl bg-esa-bg px-2.5 py-1.5 text-xs font-semibold text-esa-navy transition duration-300 group-hover:bg-white group-hover:shadow-esa-soft">
            <FlagAccent country={course.flag} size="md" />
            {course.language}
          </span>
          <span
            className={cn(
              "rounded-lg px-2.5 py-1 text-xs font-semibold uppercase tracking-wider transition duration-300",
              isSpanish
                ? "bg-esa-red-soft text-esa-red group-hover:bg-esa-red group-hover:text-white"
                : "bg-esa-gold-soft text-esa-navy group-hover:bg-esa-navy group-hover:text-white",
            )}
          >
            {course.level}
          </span>
        </div>

        <CardTitle className="mt-4 text-xl transition-colors duration-300 group-hover:text-esa-red sm:text-[1.35rem]">
          {course.title}
        </CardTitle>
        <BodyText className="mt-3 flex-1 text-base">{course.description}</BodyText>

        <div className="mt-5 rounded-xl border border-esa-border/80 bg-gradient-to-br from-esa-bg to-white px-4 py-3.5 transition duration-300 group-hover:border-esa-red/20 group-hover:from-esa-red-soft/30 group-hover:to-white">
          <p className="text-label text-esa-muted">Learning focus</p>
          <p className="mt-1 text-sm font-medium leading-snug text-esa-navy">
            {course.focus}
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Button href={enquireHref} className="w-full sm:w-auto">
            Enquire
          </Button>
          <Button href={course.href} variant="outline" className="w-full sm:w-auto">
            View program
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </div>
    </Card>
  );
}

export function HomeWhyUs() {
  return (
    <Section tone="navy">
      <AnimateIn>
        <SectionHeading
          light
          eyebrow="Why Easy Spanish Academy"
          title="Designed for learners who want more than memorization."
          description="A modern academy experience focused on clarity, practice, and confident communication."
        />
      </AnimateIn>
      <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((item) => (
          <StaggerItem key={item.title}>
            <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-esa-gold/40 hover:bg-white/12">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-esa-gold/20 text-esa-gold transition duration-300 group-hover:scale-110 group-hover:bg-esa-gold group-hover:text-esa-navy">
                <item.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-esa-gold">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {item.text}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}

export function HomeSpeakingSection() {
  return (
    <Section className="!px-0 !py-0">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[340px] lg:min-h-[560px]">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
            alt="Learners speaking and collaborating during a language session"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex items-center bg-esa-navy px-6 py-14 sm:px-10 lg:px-14 lg:py-20">
          <AnimateIn direction="left">
            <Label tone="light">Speaking first</Label>
            <h2 className="text-section mt-3 text-white">
              Don&apos;t Just Learn the Language. Start Speaking It.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Vocabulary and grammar matter—but confidence grows when you speak.
              Our courses emphasize practical communication so you can understand,
              respond, and connect in Spanish or German with greater ease.
            </p>
            <Button href="/contact" size="lg" className="mt-8">
              Start Your Learning Journey
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </AnimateIn>
        </div>
      </div>
    </Section>
  );
}

export function HomeHowItWorks() {
  return (
    <Section tone="mesh">
      <AnimateIn>
        <SectionHeading
          eyebrow="How it works"
          title="A simple path from interest to confidence."
          description="Four clear steps to begin learning Spanish or German with Easy Spanish Academy."
        />
      </AnimateIn>

      <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {howItWorks.map((item) => (
          <StaggerItem key={item.step}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-esa-border bg-white p-5 shadow-esa-soft transition duration-300 hover:-translate-y-1 hover:border-esa-red/25 hover:shadow-esa-lift">
              <p className="font-display text-4xl font-semibold leading-none text-esa-soft transition-colors group-hover:text-esa-red-soft">
                {item.step}
              </p>
              <h3 className="mt-4 font-display text-lg font-semibold text-esa-navy transition-colors group-hover:text-esa-red">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-esa-muted">{item.text}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}

export function HomeFaqPreview() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
        <AnimateIn>
          <SectionHeading
            eyebrow="FAQ"
            title="Quick answers before you enquire."
            description="Explore common questions about languages, levels, online learning, and how to get started."
          />
          <Button href="/faq" variant="outline" className="mt-8">
            View All FAQs
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </AnimateIn>
        <AnimateIn delay={0.08}>
          <Accordion items={[...HOME_FAQ_PREVIEW]} />
        </AnimateIn>
      </div>
    </Section>
  );
}

export function HomeFinalCta() {
  return (
    <Section
      tone="mesh"
      className="relative overflow-hidden border-t border-esa-border"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-esa-red/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-esa-gold/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl rounded-3xl border border-esa-border bg-white/90 px-6 py-10 text-center shadow-esa-soft sm:px-10 sm:py-12">
        <AnimateIn>
          <Label tone="primary">Ready when you are</Label>
          <h2 className="text-section mt-3 text-esa-navy">Ready to Start Speaking?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-esa-muted sm:text-lg">
            Choose your language and take the first step toward confident
            communication.
          </p>
          <div className="mt-8 flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-3">
            <Button href="/spanish-courses" size="lg" className="w-full sm:w-auto">
              <FlagAccent country="ES" />
              Learn Spanish
            </Button>
            <Button href="/courses/german/certificate-diploma" variant="secondary" size="lg" className="w-full sm:w-auto">
              <FlagAccent country="DE" />
              Learn German
            </Button>
          </div>
        </AnimateIn>
      </div>
    </Section>
  );
}

export function HomeContactStrip() {
  return (
    <section className="border-y border-esa-border bg-esa-surface">
      <div className="container-esa flex flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-6 lg:px-8">
        <p className="font-display text-base font-semibold text-esa-navy sm:text-lg">
          Prefer to talk now?
        </p>
        <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-esa-navy transition hover:text-esa-red focus-esa sm:text-base"
          >
            <Phone className="h-4 w-4 text-esa-red" aria-hidden />
            {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.emailHref}
            className="inline-flex min-w-0 items-center gap-2 break-anywhere text-sm font-semibold text-esa-navy transition hover:text-esa-red focus-esa sm:text-base"
          >
            <Mail className="h-4 w-4 shrink-0 text-esa-red" aria-hidden />
            {SITE.email}
          </a>
        </div>
      </div>
    </section>
  );
}
