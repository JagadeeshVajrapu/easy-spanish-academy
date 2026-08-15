import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { CourseCTA } from "@/components/course/CourseCTA";
import { SITE } from "@/lib/constants";
import { whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Easy Spanish Academy by phone, email, or WhatsApp. Send an enquiry about Spanish and German courses.",
  openGraph: {
    title: `Contact Us | ${SITE.name}`,
    description:
      "Enquire about Spanish and German courses. Call, WhatsApp, or email Easy Spanish Academy.",
    url: `${SITE.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let’s plan your next language step."
        description="Call, WhatsApp, email, or send an enquiry. We will help you with current Spanish and German course details."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Person preparing to send a message to contact the academy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      <Section tone="mesh" className="!py-10 sm:!py-12">
        <AnimateIn>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
            <Button href={SITE.phoneHref} size="lg" className="w-full sm:w-auto">
              <Phone className="h-4 w-4" aria-hidden />
              Call Now
            </Button>
            <Button
              href={whatsappUrl(SITE.whatsappMessage)}
              variant="gold"
              size="lg"
              className="w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp Us
            </Button>
            <Button href={SITE.emailHref} variant="outline" size="lg" className="w-full sm:w-auto">
              <Mail className="h-4 w-4" aria-hidden />
              Email Us
            </Button>
          </div>
        </AnimateIn>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <AnimateIn>
              <SectionHeading
                eyebrow="Reach us"
                title="We are ready to guide your enquiry."
                description="Share your preferred language and course. For fees, duration, and schedules, please contact us for current course details."
              />
            </AnimateIn>

            <div className="mt-8 space-y-4">
              <AnimateIn delay={0.05}>
                <a
                  href={SITE.phoneHref}
                  className="group flex items-start gap-4 rounded-2xl border border-esa-border bg-white p-5 shadow-esa-soft transition duration-300 hover:-translate-y-1 hover:border-esa-red/30 hover:shadow-esa-lift focus-esa"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-esa-red-soft text-esa-red transition duration-300 group-hover:scale-105 group-hover:bg-esa-red group-hover:text-white">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-semibold text-esa-navy transition-colors group-hover:text-esa-red">
                      Phone
                    </span>
                    <span className="mt-1 block text-esa-muted">
                      {SITE.phoneDisplay}
                    </span>
                  </span>
                </a>
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <a
                  href={SITE.emailHref}
                  className="group flex items-start gap-4 rounded-2xl border border-esa-border bg-white p-5 shadow-esa-soft transition duration-300 hover:-translate-y-1 hover:border-esa-gold/50 hover:shadow-esa-lift focus-esa"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-esa-gold-soft text-esa-navy transition duration-300 group-hover:scale-105 group-hover:bg-esa-gold">
                    <Mail className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-semibold text-esa-navy transition-colors group-hover:text-esa-red">
                      Email
                    </span>
                    <span className="mt-1 block break-anywhere text-esa-muted">
                      {SITE.email}
                    </span>
                  </span>
                </a>
              </AnimateIn>

              <AnimateIn delay={0.15}>
                <a
                  href={whatsappUrl(SITE.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-esa-border bg-white p-5 shadow-esa-soft transition duration-300 hover:-translate-y-1 hover:border-[#25D366]/40 hover:shadow-esa-lift focus-esa"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F8EF] text-[#128C7E] transition duration-300 group-hover:scale-105 group-hover:bg-[#25D366] group-hover:text-white">
                    <MessageCircle className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-semibold text-esa-navy transition-colors group-hover:text-esa-red">
                      WhatsApp
                    </span>
                    <span className="mt-1 block text-esa-muted">
                      Message {SITE.phoneDisplay}
                    </span>
                  </span>
                </a>
              </AnimateIn>
            </div>
          </div>

          <AnimateIn delay={0.08}>
            <ContactForm />
          </AnimateIn>
        </div>
      </Section>

      <CourseCTA
        title="Prefer a quick conversation?"
        description="Call or WhatsApp us and we will help you choose the right Spanish or German starting point."
        primaryLabel="Call Now"
        primaryHref={SITE.phoneHref}
      />
    </>
  );
}
