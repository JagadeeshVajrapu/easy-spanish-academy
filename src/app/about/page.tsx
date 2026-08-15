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
import { Button } from "@/components/ui/Button";
import { FlagAccent } from "@/components/ui/FlagAccent";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { BodyText, Label } from "@/components/ui/Typography";
import { CTABanner } from "@/components/sections/CTABanner";
import { PageHero } from "@/components/sections/PageHero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Easy Spanish Academy—a warm, professional language academy focused on Spanish and German, structured learning, speaking practice, and student-focused communication.",
  openGraph: {
    title: `About Us | ${SITE.name}`,
    description:
      "Learn about our language-learning focus, Spanish and German programs, and student-centered approach.",
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
      <PageHero
        eyebrow="About Us"
        title="A warm, modern home for language learners."
        description="Easy Spanish Academy helps learners build confidence in Spanish and German through structured learning, speaking practice, and student-focused guidance."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Learners collaborating in a bright educational space"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimateIn>
            <Label tone="primary">Our introduction</Label>
            <h2 className="text-section mt-3 text-esa-navy">
              Learn with structure. Speak with confidence. Connect with purpose.
            </h2>
            <BodyText className="mt-5">
              Easy Spanish Academy is a modern language academy created for
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
              <Button href="/spanish-courses">Explore Spanish</Button>
              <Button href="/german-courses" variant="outline">
                Explore German
              </Button>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.08}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-esa-card sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80"
                alt="Friendly language learning atmosphere in a modern classroom"
                fill
                className="object-cover object-center"
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
            title="Spanish and German under one academy."
            description="Two language pathways. One consistent promise: learn today, speak tomorrow, connect forever."
          />
        </AnimateIn>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <AnimateIn>
            <div className="rounded-3xl border border-esa-border bg-white p-6 shadow-esa-soft sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-xl bg-esa-red-soft px-3 py-2 text-sm font-semibold text-esa-red">
                <FlagAccent country="ES" /> Spanish
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-esa-navy">
                Spanish programs from A1 to B2
              </h3>
              <BodyText className="mt-3">
                Certificate / Diploma, Crash, and School-Oriented pathways designed
                to build speaking, grammar, vocabulary, listening, reading, and
                writing skills.
              </BodyText>
              <Button href="/spanish-courses" className="mt-6" variant="secondary">
                View Spanish Courses
              </Button>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <div className="rounded-3xl border border-esa-border bg-white p-6 shadow-esa-soft sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-xl bg-esa-gold-soft px-3 py-2 text-sm font-semibold text-esa-navy">
                <FlagAccent country="DE" /> German
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-esa-navy">
                German Certificate / Diploma pathway
              </h3>
              <BodyText className="mt-3">
                A structured A1–B2 German journey focused on clear foundations,
                pronunciation support, and practical communication.
              </BodyText>
              <Button href="/german-courses" className="mt-6" variant="secondary">
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
        <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {focusAreas.map((item) => (
            <StaggerItem key={item.title}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-esa-gold/20 text-esa-gold">
                  <item.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
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
            <div className="rounded-3xl border border-esa-border bg-mesh p-7 sm:p-8">
              <p className="font-display text-2xl font-semibold text-esa-navy sm:text-3xl">
                “Learn Today, Speak Tomorrow, Connect Forever.”
              </p>
              <BodyText className="mt-4">
                That promise guides our Spanish and German programs—helping
                learners move from first lessons to meaningful communication.
              </BodyText>
              <Button href="/why-choose-us" variant="outline" className="mt-6">
                Why Choose Us
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
