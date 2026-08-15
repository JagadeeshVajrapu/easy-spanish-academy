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
    <Section tone="navy" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-esa-red/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 left-8 h-72 w-72 rounded-full bg-esa-gold/20 blur-3xl"
      />
      <AnimateIn>
        <div className="relative grid gap-8 lg:grid-cols-[1.3fr_auto] lg:items-center">
          <div>
            <Label tone="light">Next step</Label>
            <h2 className="text-section mt-3 text-white">{title}</h2>
            <p className="mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
              {description}
            </p>
            <p className="mt-3 text-sm text-white/55">
              Contact us for details on schedules, formats, and enrollment.
            </p>
          </div>
          <div className="flex w-full flex-col gap-2.5 sm:flex-row lg:w-auto lg:flex-col xl:flex-row">
            <Button href={primaryHref} size="lg" className="w-full sm:w-auto">
              {primaryLabel}
            </Button>
            <Button
              href={whatsappUrl(message)}
              variant="gold"
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
              variant="outline"
              size="lg"
              className="w-full border-white/20 bg-white/5 text-white hover:bg-white/10 sm:w-auto"
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
