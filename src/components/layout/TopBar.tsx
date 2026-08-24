import { Mail, Phone } from "lucide-react";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { SITE } from "@/lib/constants";

export function TopBar() {
  return (
    <div className="border-b border-white/10 bg-esa-navy text-white">
      <div className="container-esa flex h-11 items-center justify-between gap-3 sm:h-12">
        <div className="flex min-w-0 items-center gap-3 overflow-hidden text-xs sm:gap-4 sm:text-[0.8125rem]">
          <a
            href={SITE.phoneHref}
            className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-white/90 transition hover:text-esa-gold focus-esa"
          >
            <Phone className="h-3.5 w-3.5 shrink-0 text-esa-gold sm:h-4 sm:w-4" aria-hidden />
            {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.emailHref}
            title={SITE.email}
            className="hidden min-w-0 items-center gap-1.5 text-white/90 transition hover:text-esa-gold focus-esa md:inline-flex"
          >
            <Mail className="h-3.5 w-3.5 shrink-0 text-esa-gold sm:h-4 sm:w-4" aria-hidden />
            <span className="truncate">{SITE.email}</span>
          </a>
        </div>

        <SocialLinks />
      </div>
    </div>
  );
}
