import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/lib/constants";
import { whatsappUrl } from "@/lib/utils";

type CTABannerProps = {
  title?: string;
  description?: string;
};

export function CTABanner({
  title = "Ready to begin your language journey?",
  description = "Speak with our team to learn about current Spanish and German course options that fit your goals.",
}: CTABannerProps) {
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
      <div className="relative grid gap-8 rounded-3xl border border-esa-border bg-white/90 p-6 shadow-esa-soft sm:p-8 lg:grid-cols-[1.4fr_auto] lg:items-center lg:p-10">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-esa-red">
            Start today
          </p>
          <h2 className="text-section text-esa-navy">{title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-esa-muted sm:text-base md:text-lg">
            {description}
          </p>
        </div>
        <div className="flex w-full flex-col gap-2.5 sm:flex-row lg:w-auto lg:flex-col xl:flex-row">
          <Button href="/contact" size="lg" className="w-full sm:w-auto">
            Contact Us
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
            WhatsApp
          </Button>
          <Button
            href={SITE.phoneHref}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call Now
          </Button>
        </div>
      </div>
    </Section>
  );
}
