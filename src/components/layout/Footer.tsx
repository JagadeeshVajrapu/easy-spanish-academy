import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { FlagAccent } from "@/components/ui/FlagAccent";
import { FOOTER_LINKS, SITE } from "@/lib/constants";
import { whatsappUrl } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-esa-navy-soft bg-esa-navy text-white">
      <div
        aria-hidden
        className="h-1 w-full bg-gradient-to-r from-esa-red via-esa-gold to-esa-red"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-8 h-48 w-48 rounded-full bg-esa-red/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-52 w-52 rounded-full bg-esa-gold/15 blur-3xl"
      />

      <div className="relative container-esa px-4 py-8 pb-[calc(7rem+env(safe-area-inset-bottom,0px))] sm:px-6 sm:py-10 sm:pb-10 lg:px-8 lg:py-11">
        <div className="grid grid-cols-1 gap-7 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="min-w-0 min-[480px]:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="group inline-flex max-w-full items-center gap-2.5 focus-esa"
            >
              <BrandLogo size="footer" />
              <span className="min-w-0">
                <span className="block font-display text-[0.95rem] font-semibold leading-snug text-white transition-colors group-hover:text-esa-gold sm:text-base">
                  Easy Spanish Academy
                </span>
                <span className="mt-0.5 block text-xs font-medium text-esa-gold/80">
                  Spanish & German
                </span>
              </span>
            </Link>
            <p className="mt-3.5 max-w-sm text-sm leading-relaxed text-white/75">
              Helping learners build confidence in Spanish and German through
              guided, practical learning.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-lg border border-esa-red/35 bg-esa-red/15 px-2.5 py-1.5 text-xs font-medium text-white transition hover:border-esa-red/55 hover:bg-esa-red/25">
                <FlagAccent country="ES" /> Spanish
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-esa-gold/40 bg-esa-gold/15 px-2.5 py-1.5 text-xs font-medium text-white transition hover:border-esa-gold/60 hover:bg-esa-gold/25">
                <FlagAccent country="DE" /> German
              </span>
            </div>
          </div>

          <FooterColumn title="Quick Links" links={FOOTER_LINKS.explore} />
          <FooterColumn title="Courses" links={FOOTER_LINKS.courses} />

          <div className="min-w-0 min-[480px]:col-span-2 lg:col-span-1">
            <h2 className="font-display text-sm font-semibold text-esa-gold">
              Contact
            </h2>
            <ul className="mt-3.5 space-y-2.5 text-sm text-white/75">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-esa-gold focus-esa"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex min-w-0 items-center gap-2 transition-colors hover:text-esa-gold focus-esa"
                >
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-esa-gold/15 text-esa-gold">
                    <Phone className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span className="min-w-0">{SITE.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  className="inline-flex min-w-0 items-start gap-2 transition-colors hover:text-esa-gold focus-esa"
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-esa-gold/15 text-esa-gold">
                    <Mail className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span className="min-w-0 break-anywhere">{SITE.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl(SITE.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-0 items-center gap-2 transition-colors hover:text-esa-gold focus-esa"
                >
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/20 text-[#25D366]">
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  WhatsApp us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-2 border-t border-white/15 pt-4 text-xs text-white/55 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p className="leading-relaxed">
            © 2026 Easy Spanish Academy. All rights reserved.
          </p>
          <div className="flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-1">
            <Link
              href="/privacy"
              className="w-fit transition hover:text-esa-gold focus-esa"
            >
              Privacy Policy
            </Link>
            <span className="break-anywhere leading-relaxed text-esa-gold/70">
              Learn Today, Speak Tomorrow, Connect Forever
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div className="min-w-0">
      <h2 className="font-display text-sm font-semibold text-esa-gold">{title}</h2>
      <ul className="mt-3.5 space-y-2.5">
        {links.map((link) => (
          <li key={`${link.label}-${link.href}`}>
            <Link
              href={link.href}
              className="text-sm text-white/75 transition-colors hover:text-esa-gold focus-esa"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
