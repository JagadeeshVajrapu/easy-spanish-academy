import type { Metadata } from "next";
import Image from "next/image";
import {
  BookOpenCheck,
  Flag,
  MessageCircle,
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
import { SITE } from "@/lib/constants";
import { whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Easy Spanish Academy is an online institute for Spanish and German. We teach A1 to B2 levels with live classes, speaking practice, and clear guidance for students across India.",
  openGraph: {
    title: `About Us | ${SITE.name}`,
    description:
      "Learn who we are, how we teach Spanish and German online, and how our A1–B2 courses help you speak with confidence.",
    url: `${SITE.url}/about`,
  },
};

const focusAreas = [
  {
    icon: Flag,
    title: "Spanish & German only",
    text: "We focus on two languages—Spanish and German—so teaching stays clear, practical, and easy to follow.",
  },
  {
    icon: BookOpenCheck,
    title: "Clear level path (A1–B2)",
    text: "You start at the right level and move step by step. Every lesson has a purpose, so you always know what you are learning next.",
  },
  {
    icon: MessageSquare,
    title: "Speaking in every class",
    text: "We do not only teach grammar. You practice speaking in class so you can talk, ask questions, and reply with more confidence.",
  },
  {
    icon: Sparkles,
    title: "Language you can use",
    text: "Lessons cover real life—greetings, travel, study, and work—so Spanish or German feels useful from the beginning.",
  },
  {
    icon: Users,
    title: "Support for every learner",
    text: "School students, college learners, and working professionals all get friendly guidance—from first enquiry to batch start.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-esa-border bg-esa-navy text-white">
        <div className="container-esa py-10 sm:py-12 lg:py-14">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "About Us" }]}
            light
            className="mb-4"
          />
          <p className="text-label text-esa-gold">About Us</p>
          <div className="mt-3 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-2">
              <FlagAccent country="ES" size="lg" />
              <span className="text-sm font-bold text-white">Spanish Language</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-2">
              <FlagAccent country="DE" size="lg" />
              <span className="text-sm font-bold text-white">German Language</span>
            </span>
          </div>
          <h1 className="text-hero mt-4 max-w-3xl text-white">
            We help you learn Spanish and German online—step by step
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Easy Spanish Academy is an online language institute for students
            across India. We teach Spanish and German from beginner (A1) to
            intermediate (B2), with live classes, speaking practice, and simple
            guidance so you can learn with confidence.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimateIn>
            <Label tone="primary">Who we are</Label>
            <h2 className="text-section mt-3 text-esa-navy">
              An online academy built to make Spanish easy to learn
            </h2>
            <BodyText className="mt-5">
              Many people want to learn Spanish for travel, career, study abroad,
              or school—but they feel stuck with confusing books or random
              videos. We started Easy Spanish Academy to make learning clear,
              friendly, and useful in real life.
            </BodyText>
            <BodyText className="mt-4">
              Along with Spanish, we also teach German for learners who need it
              for jobs, higher studies, or life in Europe. In both languages, our
              goal is simple: help you understand, speak, and grow level by
              level.
            </BodyText>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/courses/spanish">Spanish Courses</Button>
              <Button href="/courses/german/certificate-diploma" variant="outline">
                German Courses
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

      <Section tone="navy">
        <AnimateIn>
          <SectionHeading
            light
            eyebrow="What we believe"
            title="Simple teaching. Real speaking. Steady progress."
            description="These are the ideas that shape every Spanish and German class at Easy Spanish Academy."
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
              title="A clear plan from your first class to confident speaking"
              description="We keep learning organised and friendly—so beginners and returning learners both feel comfortable."
            />
            <ul className="mt-6 space-y-3 text-esa-muted">
              {[
                "Easy start for absolute beginners",
                "Level-based Spanish & German courses from A1 to B2",
                "Speaking practice in every learning stage",
                "Weekday and weekend batch options",
                "Study PDFs online and books delivered to your doorstep",
                "Helpful guidance when you enquire and join a batch",
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
                This is our promise: start learning today, speak a little more
                every day, and use Spanish or German to connect with people and
                opportunities for life.
              </BodyText>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/book-demo">Book a Demo Today</Button>
                <Button
                  href={whatsappUrl(SITE.whatsappMessage)}
                  variant="whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  WhatsApp
                </Button>
              </div>
            </div>
          </AnimateIn>
        </div>
      </Section>
    </>
  );
}
