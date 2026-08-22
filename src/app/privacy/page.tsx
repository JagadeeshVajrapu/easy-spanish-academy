import type { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BodyText } from "@/components/ui/Typography";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.name}. Learn how we handle enquiries and contact information.`,
  openGraph: {
    title: `Privacy Policy | ${SITE.name}`,
    description: `Privacy Policy for ${SITE.name}. Learn how we handle enquiries and contact information.`,
    url: `${SITE.url}/privacy`,
  },
};

const policySections = [
  {
    title: "Information we collect",
    body: "When you contact Easy Spanish Academy by phone, email, WhatsApp, or the contact form, we may receive your name, phone number, email address, and any message you choose to share about your language-learning goals.",
  },
  {
    title: "How we use your information",
    body: "We use the details you share only to respond to your enquiry, provide course guidance, and follow up on demo or admission requests. We do not sell or rent personal information to third parties.",
  },
  {
    title: "Learner stories and testimonials",
    body: "Course enquiries are handled privately by our team. We do not publish personal learner stories, photos, or testimonials without your explicit approval.",
  },
  {
    title: "Data retention",
    body: "Enquiry details are kept only as long as needed to respond to you and maintain relevant communication about our courses, unless you ask us to remove them sooner.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="A clear overview of how Easy Spanish Academy handles information shared through enquiries."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Desk with documents representing privacy and policy information"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <Section>
        <AnimateIn>
          <SectionHeading
            title="Your privacy matters to us"
            description="This policy explains how we handle information when you get in touch with Easy Spanish Academy."
          />
        </AnimateIn>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {policySections.map((section, index) => (
            <AnimateIn key={section.title} delay={index * 0.04}>
              <article className="group h-full rounded-2xl border border-esa-border bg-white p-6 shadow-esa-soft transition duration-300 hover:-translate-y-1 hover:border-esa-red/20 hover:shadow-esa-card sm:p-7">
                <h2 className="font-display text-lg font-semibold text-esa-navy transition-colors duration-300 group-hover:text-esa-red sm:text-xl">
                  {section.title}
                </h2>
                <BodyText className="mt-3">{section.body}</BodyText>
              </article>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.12}>
          <div className="mt-8 max-w-3xl rounded-2xl border border-esa-border bg-esa-soft p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-esa-navy sm:text-xl">
              Questions about privacy?
            </h2>
            <BodyText className="mt-3">
              For privacy questions, email{" "}
              <a
                href={SITE.emailHref}
                className="font-semibold text-esa-red underline-offset-2 transition hover:underline"
              >
                {SITE.email}
              </a>{" "}
              or call{" "}
              <a
                href={SITE.phoneHref}
                className="font-semibold text-esa-red underline-offset-2 transition hover:underline"
              >
                {SITE.phoneDisplay}
              </a>
              . You can also visit us at {SITE.addressDisplay}.
            </BodyText>
          </div>
        </AnimateIn>
      </Section>
    </>
  );
}
