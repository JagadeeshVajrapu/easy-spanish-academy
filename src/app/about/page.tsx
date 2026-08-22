import type { Metadata } from "next";
import Image from "next/image";
import {
  BookOpenCheck,
  Flag,
  MessageSquare,
  Sparkles,
  Users,
} from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { FlagAccent } from "@/components/ui/FlagAccent";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { BodyText, Label } from "@/components/ui/Typography";
import { CTABanner } from "@/components/sections/CTABanner";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Easy Spanish Academy—an online Spanish and German language institute focused on structured A1 to B2 learning, speaking practice, and student-focused guidance.",
  openGraph: {
    title: `About Us | ${SITE.name}`,
    description:
      "Learn about our online language-learning focus, Spanish and German programs, and student-centered approach.",
    url: `${SITE.url}/about`,
  },
};

const focusAreas = [
  {
    icon: Flag,
    title: "Language-learning focus",
    text: "Everything we do is built around helping you learn a new language with clarity and purpose.",
  },
  {
    icon: BookOpenCheck,
    title: "Structured learning",
    text: "Lessons follow a clear pathway so beginners and developing speakers always know what comes next.",
  },
  {
    icon: MessageSquare,
    title: "Speaking practice",
    text: "Conversation is treated as a core skill—not an afterthought—so confidence can grow through use.",
  },
  {
    icon: Sparkles,
    title: "Practical communication",
    text: "We emphasize language you can use to understand, respond, and connect in real situations.",
  },
  {
    icon: Users,
    title: "Student-focused learning",
    text: "Guidance stays supportive and approachable, centered on your goals and learning comfort.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Solid navy hero — readable text, no overlay on photo */}
      <section className="border-b border-esa-border bg-esa-navy text-white">
        <div className="container-esa py-10 sm:py-12 lg:py-14">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "About Us" }]}
            light
            className="mb-4"
          />
          <p className="text-label text-esa-gold">About Us</p>
          <h1 className="text-hero mt-2 max-w-3xl text-white">
            A warm, modern home for online language learners
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Easy Spanish Academy helps learners build confidence in Spanish and
            German through structured A1 to B2 programs, speaking practice, and
            student-focused guidance—online across India.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimateIn>
            <Label tone="primary">Our introduction</Label>
            <h2 className="text-section mt-3 text-esa-navy">
              Learn with structure. Speak with confidence. Connect with purpose.
            </h2>
            <BodyText className="mt-5">
              Easy Spanish Academy is an online language institute created for
              learners who want more than memorization. We focus on clear teaching,
              practical communication, and a supportive experience that makes
              progress feel achievable.
            </BodyText>
            <BodyText className="mt-4">
              Whether you are beginning Spanish, exploring German, or returning
              after a break, our approach keeps learning organized and speaking
              central—so you can grow toward confident communication.
            </BodyText>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/courses/spanish">Explore Spanish</Button>
              <Button href="/courses/german" variant="outline">
                Explore German
              </Button>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.08}>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl shadow-esa-card transition duration-500 hover:shadow-esa-lift sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80"
                alt="Learners collaborating in a bright educational space"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateIn>
        </div>
      </Section>

      <Section tone="mesh">
        <AnimateIn>
          <SectionHeading
            eyebrow="Programs"
            title="Spanish and German under one online academy."
            description="Certificate & Diploma courses from A1 to B2, plus school-oriented programs for young learners."
          />
        </AnimateIn>
        <div className="mt-10 grid auto-rows-fr gap-5 lg:grid-cols-2">
          <AnimateIn>
            <div className="group flex h-full flex-col rounded-3xl border border-esa-border bg-white p-6 shadow-esa-soft transition duration-300 hover:-translate-y-1.5 hover:border-esa-red/25 hover:shadow-esa-card sm:p-8">
              <div className="inline-flex w-fit items-center gap-2 rounded-xl bg-esa-red-soft px-3 py-2 text-sm font-semibold text-esa-red transition duration-300 group-hover:scale-[1.03]">
                <FlagAccent country="ES" /> Spanish
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-esa-navy transition-colors duration-300 group-hover:text-esa-red sm:text-2xl">
                Spanish A1 to B2 — Certificate & School Programs
              </h3>
              <BodyText className="mt-3 flex-1">
                Certificate & Diploma pathway from A1 to B2 covering grammar,
                vocabulary, speaking, listening, reading, and writing. We also
                offer a school-oriented course for students aged 5–16 (up to
                Class 10).
              </BodyText>
              <ul className="mt-4 space-y-2 text-sm text-esa-muted">
                <li>• A1 → A2 → B1 → B2 level progression</li>
                <li>• Certificate / Diploma course</li>
                <li>• Crash course for focused learning</li>
                <li>• School-oriented program for young learners</li>
              </ul>
              <Button href="/courses/spanish" className="mt-6 w-full sm:w-auto" variant="secondary">
                View Spanish Courses
              </Button>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <div className="group flex h-full flex-col rounded-3xl border border-esa-border bg-white p-6 shadow-esa-soft transition duration-300 hover:-translate-y-1.5 hover:border-esa-gold/40 hover:shadow-esa-card sm:p-8">
              <div className="inline-flex w-fit items-center gap-2 rounded-xl bg-esa-gold-soft px-3 py-2 text-sm font-semibold text-esa-navy transition duration-300 group-hover:scale-[1.03]">
                <FlagAccent country="DE" /> German
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-esa-navy transition-colors duration-300 group-hover:text-esa-gold-deep sm:text-2xl">
                German A1 to B2 — Certificate & Diploma
              </h3>
              <BodyText className="mt-3 flex-1">
                A structured online German journey from A1 to B2 with clear
                foundations, pronunciation support, and practical communication
                at every level.
              </BodyText>
              <ul className="mt-4 space-y-2 text-sm text-esa-muted">
                <li>• A1 → A2 → B1 → B2 level progression</li>
                <li>• Certificate & Diploma pathway</li>
                <li>• Speaking and listening focus</li>
                <li>• Guided online learning support</li>
              </ul>
              <Button href="/courses/german" className="mt-6 w-full sm:w-auto" variant="secondary">
                View German Courses
              </Button>
            </div>
          </AnimateIn>
        </div>
      </Section>

      <Section tone="navy">
        <AnimateIn>
          <SectionHeading
            light
            eyebrow="What we care about"
            title="A student-focused academy experience."
            description="A clear learning philosophy built around structured progress, speaking practice, and student-focused guidance."
          />
        </AnimateIn>
        <StaggerGroup className="mt-12 grid auto-rows-fr gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {focusAreas.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-esa-gold/35 hover:bg-white/10 hover:shadow-esa-soft">
                <div className="mb-4 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-esa-gold/20 text-esa-gold transition duration-300 group-hover:scale-110 group-hover:bg-esa-gold/30">
                  <item.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-display text-lg font-semibold text-white transition-colors duration-300 group-hover:text-esa-gold">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/80">
                  {item.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimateIn>
            <SectionHeading
              eyebrow="How we teach"
              title="Structured learning that still feels human."
              description="We combine clear level-based progression with speaking practice and communication goals—so learning stays organized without becoming rigid."
            />
            <ul className="mt-6 space-y-3 text-esa-muted">
              {[
                "Beginner-friendly foundations",
                "Level-based pathways from A1 to B2",
                "Speaking woven into the learning journey",
                "Supportive guidance when you enquire and start",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-esa-red" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <div className="group rounded-3xl border border-esa-border bg-esa-soft p-7 transition duration-300 hover:border-esa-red/20 hover:shadow-esa-card sm:p-8">
              <p className="font-display text-2xl font-semibold text-esa-navy transition-colors duration-300 group-hover:text-esa-red sm:text-3xl">
                “Learn Today, Speak Tomorrow, Connect Forever.”
              </p>
              <BodyText className="mt-4">
                That promise guides our Spanish and German programs—helping
                learners move from first lessons to meaningful communication.
              </BodyText>
              <Button href="/book-demo" className="mt-6">
                Book a Demo
              </Button>
            </div>
          </AnimateIn>
        </div>
      </Section>

      <CTABanner
        title="Want to know if Easy Spanish Academy is right for you?"
        description="Tell us your goals. We will help you understand current Spanish and German course options."
      />
    </>
  );
}
