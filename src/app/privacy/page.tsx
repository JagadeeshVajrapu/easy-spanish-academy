import type { Metadata } from "next";
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
        <SectionHeading
          title="How we use your information"
          description="A practical overview of how Easy Spanish Academy handles information shared through enquiries."
        />
        <div className="mt-8 max-w-3xl space-y-5">
          <BodyText>
            When you contact Easy Spanish Academy by phone, email, WhatsApp, or
            the contact form, we use the details you share only to respond to your
            enquiry and provide course guidance.
          </BodyText>
          <BodyText>
            Course enquiries are handled privately by our team. We do not publish
            personal learner stories without approval.
          </BodyText>
          <BodyText>
            For privacy questions, email{" "}
            <a
              href={SITE.emailHref}
              className="font-semibold text-esa-red underline-offset-2 hover:underline"
            >
              {SITE.email}
            </a>{" "}
            or call{" "}
            <a
              href={SITE.phoneHref}
              className="font-semibold text-esa-red underline-offset-2 hover:underline"
            >
              {SITE.phoneDisplay}
            </a>
            .
          </BodyText>
        </div>
      </Section>
    </>
  );
}
