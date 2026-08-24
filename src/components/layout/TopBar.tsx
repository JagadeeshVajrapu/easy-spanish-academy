import { Mail, Phone } from "lucide-react";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { SITE } from "@/lib/constants";

export function TopBar() {
  return (
    <div className="border-b border-esa-border/70 bg-white text-esa-navy">
      <div className="container-esa flex h-11 items-center justify-between gap-3 sm:h-12">
        <div className="flex min-w-0 items-center gap-3 overflow-hidden text-xs sm:gap-4 sm:text-[0.8125rem]">
          <a
            href={SITE.phoneHref}
            className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-esa-navy/85 transition hover:text-esa-red focus-esa"
          >
            <Phone className="h-3.5 w-3.5 shrink-0 text-esa-red sm:h-4 sm:w-4" aria-hidden />
            {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.emailHref}
            title={SITE.email}
            className="hidden min-w-0 items-center gap-1.5 text-esa-navy/85 transition hover:text-esa-red focus-esa md:inline-flex"
          >
            <Mail className="h-3.5 w-3.5 shrink-0 text-esa-red sm:h-4 sm:w-4" aria-hidden />
            <span className="truncate">{SITE.email}</span>
          </a>
        </div>

        <SocialLinks tone="light" />
      </div>
    </div>
  );
}
