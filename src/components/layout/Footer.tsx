import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { FlagAccent } from "@/components/ui/FlagAccent";
import { FOOTER_LINKS, SITE } from "@/lib/constants";
import { whatsappUrl } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-esa-navy-soft bg-esa-navy text-white">
      <div className="container-esa px-4 py-9 sm:px-6 sm:py-10 lg:px-8 lg:py-11">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="lg:col-span-1">
            <Link href="/" className="group inline-flex items-center gap-2.5 focus-esa">
              <BrandLogo size="footer" />
              <span className="min-w-0">
                <span className="block font-display text-base font-semibold leading-tight text-white transition-colors group-hover:text-esa-gold">
                  Easy Spanish Academy
                </span>
                <span className="mt-0.5 block text-xs text-white/55">
                  Spanish & German
                </span>
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
              Helping learners build confidence in Spanish and German through
              guided, practical learning.
            </p>
            <div className="mt-3.5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-2.5 py-1.5 text-xs text-white/80 transition hover:bg-white/10">
                <FlagAccent country="ES" /> Spanish
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-2.5 py-1.5 text-xs text-white/80 transition hover:bg-white/10">
                <FlagAccent country="DE" /> German
              </span>
            </div>
          </div>

          <FooterColumn title="Quick Links" links={FOOTER_LINKS.explore} />
          <FooterColumn title="Courses" links={FOOTER_LINKS.courses} />

          <div>
            <h2 className="font-display text-sm font-semibold text-white">Contact</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white focus-esa"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 transition-colors hover:text-white focus-esa"
                >
                  <Phone className="h-3.5 w-3.5 text-esa-gold" aria-hidden />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  className="inline-flex items-start gap-2 break-anywhere transition-colors hover:text-white focus-esa"
                >
                  <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-esa-gold" aria-hidden />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl(SITE.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white focus-esa"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-esa-gold" aria-hidden />
                  WhatsApp us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-2 border-t border-white/10 pt-4 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>© 2026 Easy Spanish Academy. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/privacy" className="transition hover:text-white focus-esa">
              Privacy Policy
            </Link>
            <span className="break-anywhere text-white/40">
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
    <div>
      <h2 className="font-display text-sm font-semibold text-white">{title}</h2>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={`${link.label}-${link.href}`}>
            <Link
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white focus-esa"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
