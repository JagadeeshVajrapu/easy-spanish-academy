import { Mail, Phone } from "lucide-react";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { SITE } from "@/lib/constants";

export function TopBar() {
  return (
    <div className="border-b border-esa-border/70 bg-white text-esa-navy">
      <div className="container-esa flex h-12 items-center justify-between gap-4 sm:h-14 sm:gap-6">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <a
            href={SITE.phoneHref}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-esa-red-soft px-2.5 py-1.5 text-[0.8125rem] font-bold text-esa-red transition hover:bg-esa-red hover:text-white focus-esa sm:px-3 sm:text-sm"
          >
            <Phone className="h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem]" aria-hidden />
            {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.emailHref}
            title={SITE.email}
            className="hidden shrink-0 items-center gap-1.5 rounded-full bg-[#3B82F6]/12 px-3 py-1.5 text-sm font-bold text-[#2563EB] transition hover:bg-[#3B82F6] hover:text-white focus-esa md:inline-flex"
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden />
            <span className="whitespace-nowrap">{SITE.email}</span>
          </a>
        </div>

        <SocialLinks tone="light" size="lg" className="shrink-0" />
      </div>
    </div>
  );
}
