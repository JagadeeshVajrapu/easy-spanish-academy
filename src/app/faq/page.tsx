import type { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CourseCTA } from "@/components/course/CourseCTA";
import { PageHero } from "@/components/sections/PageHero";
import { FAQ_ITEMS } from "@/lib/faq-data";
import { SITE } from "@/lib/constants";
import { whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Easy Spanish Academy languages, levels, online classes, certificates, fees, registration, and contact options.",
  openGraph: {
    title: `FAQ | ${SITE.name}`,
    description:
      "Answers about Spanish and German courses. Please contact us for current course details where information is not listed.",
    url: `${SITE.url}/faq`,
  },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Clear answers. Honest next steps."
        description="Explore common questions about languages, levels, online learning, certificates, and how to get in touch. Where details vary, we invite you to contact us."
        image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Student reviewing notes while preparing questions"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
          <AnimateIn>
            <SectionHeading
              eyebrow="Questions"
              title="Everything learners ask before they enquire."
              description="Fees, duration, and current schedules depend on the course and availability—please contact us for current course details."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/contact">Send an Enquiry</Button>
              <Button href={SITE.phoneHref} variant="outline">
                Call {SITE.phoneDisplay}
              </Button>
              <Button
                href={whatsappUrl(SITE.whatsappMessage)}
                variant="gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </Button>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <Accordion items={FAQ_ITEMS} />
          </AnimateIn>
        </div>
      </Section>

      <CourseCTA
        title="Still deciding?"
        description="Tell us your preferred language and we will help you with current course details."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
