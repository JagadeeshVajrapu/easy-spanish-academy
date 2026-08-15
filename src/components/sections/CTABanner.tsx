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
    <Section tone="navy" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-esa-red/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-esa-gold/20 blur-3xl"
      />
      <div className="relative grid gap-8 lg:grid-cols-[1.4fr_auto] lg:items-center">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-esa-gold">
            Start today
          </p>
          <h2 className="text-section text-white">{title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base md:text-lg">
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
            className="w-full border-white/20 bg-white/5 text-white hover:bg-white/10 sm:w-auto"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call Now
          </Button>
        </div>
      </div>
    </Section>
  );
}
