import type { Metadata } from "next";
import {
  BookOpen,
  CalendarDays,
  FileText,
  GraduationCap,
  MessageCircle,
  MonitorPlay,
  Package,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { PageHero } from "@/components/sections/PageHero";
import { SITE } from "@/lib/constants";
import { whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Why choose Easy Spanish Academy for online Spanish and German language classes—live Zoom/Google Meet sessions, weekdays & weekend batches, study PDFs, doorstep books, and expert trainers.",
  openGraph: {
    title: `Why Choose Us | ${SITE.name}`,
    description:
      "100% online live classes, flexible timings, weekdays & weekend batches, study materials, and guided Spanish & German language learning.",
    url: `${SITE.url}/why-choose-us`,
  },
};

const whyChoosePoints = [
  {
    icon: MonitorPlay,
    title: "100% Online Live Classes",
    text: "Learn Spanish and German languages live via Zoom or Google Meet—interactive sessions from anywhere in India.",
  },
  {
    icon: CalendarDays,
    title: "Weekdays & Weekend Batches",
    text: "Flexible class timings with weekdays and weekend batches for students and working professionals.",
  },
  {
    icon: FileText,
    title: "Study Material — Online PDFs",
    text: "Get structured study PDFs online to support every level of your Spanish or German course.",
  },
  {
    icon: Package,
    title: "Books Delivered to Your Doorstep",
    text: "We provide course books and deliver them to your doorstep so learning materials reach you conveniently.",
  },
  {
    icon: Sparkles,
    title: "Affordable Course Fees",
    text: "Quality Spanish and German language learning designed to stay accessible, with clear guidance on current options.",
  },
  {
    icon: GraduationCap,
    title: "Proficiency Test Preparation",
    text: "Focused support for Spanish and German language proficiency exam preparation alongside your level pathway.",
  },
  {
    icon: BookOpen,
    title: "Easy Spanish Academy Certificate",
    text: "Earn an Easy Spanish Academy language certificate as you progress through structured A1 to B2 learning.",
  },
  {
    icon: MessageCircle,
    title: "Doubt-Clearing & Interactive Sessions",
    text: "Live doubt-clearing and interactive practice so you speak with confidence—not just complete worksheets.",
  },
  {
    icon: Users,
    title: "Expert Spanish & German Trainers",
    text: "Learn with experienced Spanish and German language trainers focused on clear teaching and speaking practice.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="Why learners choose Easy Spanish Academy"
        description="Online Spanish and German language classes built around live teaching, flexible batches, real study support, and speaking confidence."
        image="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Indian students learning together in a bright classroom"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Why Choose Us" },
        ]}
      />

      <Section>
        <AnimateIn>
          <SectionHeading
            eyebrow="Our promise"
            title="Why Choose Us"
            description="Everything we offer is designed to make online Spanish and German language learning clear, flexible, and practical—for beginners and growing speakers."
            className="[&_h2]:text-[clamp(2rem,4vw,2.85rem)]"
          />
        </AnimateIn>

        <StaggerGroup className="mt-10 grid auto-rows-fr gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {whyChoosePoints.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-esa-border bg-white p-5 shadow-esa-soft transition duration-300 hover:-translate-y-1 hover:border-esa-red/25 hover:shadow-esa-card sm:p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-esa-red-soft text-esa-red transition duration-300 group-hover:scale-105 group-hover:bg-esa-red group-hover:text-white">
                  <item.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-display text-lg font-semibold text-esa-navy transition-colors duration-300 group-hover:text-esa-red">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm font-medium leading-relaxed text-esa-navy/80 sm:text-[0.95rem]">
                  {item.text}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section tone="muted">
        <div className="grid gap-8 rounded-3xl border border-esa-border bg-white p-6 shadow-esa-soft sm:p-8 lg:grid-cols-[1.2fr_auto] lg:items-center lg:p-10">
          <AnimateIn>
            <p className="text-label text-esa-red">Book a free demo</p>
            <h2 className="text-section mt-2 text-esa-navy">
              Ready to experience a live class?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-esa-navy/80 sm:text-base">
              Prefer weekdays or weekend batches? Want to see how live online
              Spanish or German language classes work? Book a demo—or message us on
              WhatsApp.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href="/book-demo" size="lg">
                Book a Free Demo
              </Button>
              <Button
                href={whatsappUrl(
                  "Hello! I would like to book a free demo session at Easy Spanish Academy.",
                )}
                variant="whatsapp"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                WhatsApp
              </Button>
              <Button href={SITE.phoneHref} variant="call" size="lg">
                <Phone className="h-4 w-4" aria-hidden />
                Call Now
              </Button>
            </div>
          </AnimateIn>
        </div>
      </Section>
    </>
  );
}
