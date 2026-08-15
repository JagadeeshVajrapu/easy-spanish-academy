import type { Metadata } from "next";
import Image from "next/image";
import {
  BookMarked,
  GraduationCap,
  MessageSquare,
  MonitorPlay,
  Sparkles,
  Users,
} from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { CourseLevelProgress } from "@/components/course/CourseLevelProgress";
import { Section } from "@/components/ui/Section";
import { BodyText, Label } from "@/components/ui/Typography";
import { CTABanner } from "@/components/sections/CTABanner";
import { PageHero } from "@/components/sections/PageHero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Why learners choose Easy Spanish Academy: structured curriculum, A1–B2 progression, speaking practice, flexible learning, beginner-friendly support, and practical communication.",
  openGraph: {
    title: `Why Choose Us | ${SITE.name}`,
    description:
      "A visually engaging look at what makes Easy Spanish Academy a strong place to learn Spanish or German.",
    url: `${SITE.url}/why-choose-us`,
  },
};

const storyBlocks = [
  {
    icon: BookMarked,
    title: "Structured Curriculum",
    text: "Lessons follow a clear path so you always know what you are learning and why it matters.",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Organized study materials representing structured curriculum",
  },
  {
    icon: GraduationCap,
    title: "A1–B2 Progression",
    text: "Move through levels with purpose—from foundations to more confident intermediate communication.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Learner progressing through language study stages",
  },
  {
    icon: MessageSquare,
    title: "Speaking Practice",
    text: "Conversation is built into the journey so you practise expressing yourself, not only memorizing rules.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Students practising spoken communication together",
  },
  {
    icon: MonitorPlay,
    title: "Flexible Learning",
    text: "Learning formats that can fit real schedules. Contact us for current online and course options.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern learning environment supporting flexible study",
  },
  {
    icon: Users,
    title: "Beginner Friendly",
    text: "Clear explanations and supportive guidance help new learners start without feeling overwhelmed.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Supportive classroom atmosphere for beginners",
  },
  {
    icon: Sparkles,
    title: "Practical Communication",
    text: "Focus on language you can use for study, travel, work, friendships, and everyday connection.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Travel and communication context for practical language use",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="Reasons that feel clear, human, and practical."
        description="Easy Spanish Academy is built for learners who want structured progress and the confidence to speak."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Learners collaborating during an engaging language session"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Why Choose Us" },
        ]}
      />

      <Section tone="mesh">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimateIn>
            <Label tone="primary">The ESA difference</Label>
            <h2 className="text-section mt-3 text-esa-navy">
              Not just another course list— a learning experience designed around speaking.
            </h2>
            <BodyText className="mt-4">
              From your first enquiry to your first conversations, we keep the
              journey organized, encouraging, and focused on communication that
              matters.
            </BodyText>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <div className="rounded-3xl border border-esa-border bg-white p-6 shadow-esa-card sm:p-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-esa-muted">
                Clear progression
              </p>
              <CourseLevelProgress />
              <p className="mt-5 text-sm text-esa-muted">
                Spanish and German pathways designed around A1 → A2 → B1 → B2.
              </p>
            </div>
          </AnimateIn>
        </div>
      </Section>

      <Section className="!px-0 !py-0">
        <div className="space-y-0">
          {storyBlocks.map((block, index) => {
            const reverse = index % 2 === 1;
            return (
              <div
                key={block.title}
                className={`grid lg:grid-cols-2 ${
                  index % 2 === 0 ? "bg-esa-surface" : "bg-esa-bg"
                }`}
              >
                <div
                  className={`relative min-h-[280px] sm:min-h-[360px] ${
                    reverse ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={block.image}
                    alt={block.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div
                  className={`flex items-center px-6 py-12 sm:px-10 lg:px-14 lg:py-16 ${
                    reverse ? "lg:order-1" : ""
                  }`}
                >
                  <AnimateIn direction={reverse ? "right" : "left"}>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-esa-red-soft text-esa-red">
                      <block.icon className="h-6 w-6" aria-hidden />
                    </div>
                    <p className="text-label text-esa-red">
                      0{index + 1}
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-semibold text-esa-navy sm:text-4xl">
                      {block.title}
                    </h2>
                    <BodyText className="mt-4 max-w-xl">{block.text}</BodyText>
                  </AnimateIn>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section tone="mesh" className="border-t border-esa-border">
        <AnimateIn>
          <div className="mx-auto max-w-3xl rounded-3xl border border-esa-border bg-white/90 px-6 py-10 text-center shadow-esa-soft sm:px-10 sm:py-12">
            <Label tone="primary">The result</Label>
            <h2 className="text-section mt-3 text-esa-navy">
              Confidence that grows through guided practice.
            </h2>
            <p className="mt-4 text-base text-esa-muted sm:text-lg">
              Choose Spanish, German, or explore both—and take the next step with
              a team ready to guide your enquiry.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/spanish-courses" size="lg">
                Explore Spanish
              </Button>
              <Button href="/german-courses" variant="gold" size="lg">
                Explore German
              </Button>
            </div>
          </div>
        </AnimateIn>
      </Section>

      <CTABanner
        title="Ready to choose your language?"
        description="Contact Easy Spanish Academy and we will help you with current course details."
      />
    </>
  );
}
