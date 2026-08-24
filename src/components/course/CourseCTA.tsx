import { MessageCircle, Phone } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Label } from "@/components/ui/Typography";
import { SITE } from "@/lib/constants";
import { whatsappUrl } from "@/lib/utils";

type CourseCTAProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  language?: "Spanish" | "German";
};

export function CourseCTA({
  title,
  description,
  primaryLabel = "Enquire Now",
  primaryHref = "/contact",
  language,
}: CourseCTAProps) {
  const message = language
    ? `Hello! I would like to enquire about ${language} courses at Easy Spanish Academy.`
    : SITE.whatsappMessage;

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
        className="pointer-events-none absolute -bottom-20 left-8 h-64 w-64 rounded-full bg-esa-gold/20 blur-3xl"
      />
      <AnimateIn>
        <div className="relative grid gap-8 rounded-3xl border border-esa-border bg-white/90 p-6 shadow-esa-soft sm:p-8 lg:grid-cols-[1.3fr_auto] lg:items-center lg:p-10">
          <div>
            <Label tone="primary">Next step</Label>
            <h2 className="text-section mt-3 text-esa-navy">{title}</h2>
            <p className="mt-4 max-w-2xl text-base text-esa-muted sm:text-lg">
              {description}
            </p>
            <p className="mt-3 text-sm text-esa-muted/80">
              Contact us for details on schedules, formats, and enrollment.
            </p>
          </div>
          <div className="flex w-full flex-col gap-2.5 sm:flex-row lg:w-auto lg:flex-col xl:flex-row">
            <Button href={primaryHref} size="lg" className="w-full sm:w-auto">
              {primaryLabel}
            </Button>
            <Button
              href={whatsappUrl(message)}
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp
            </Button>
            <Button
              href={SITE.phoneHref}
              variant="call"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call Now
            </Button>
          </div>
        </div>
      </AnimateIn>
    </Section>
  );
}
