import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { FlagAccent } from "@/components/ui/FlagAccent";
import { FOOTER_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-esa-border bg-esa-navy text-white">
      <div className="container-esa section-pad">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 focus-esa">
              <BrandLogo size="footer" />
              <span>
                <span className="block text-base font-bold text-white">
                  Easy Spanish Academy
                </span>
                <span className="mt-0.5 block text-xs text-white/60">
                  Spanish & German
                </span>
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
              {SITE.tagline}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1 text-xs text-white/85">
                <FlagAccent country="ES" /> Spanish
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1 text-xs text-white/85">
                <FlagAccent country="DE" /> German
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Quick Links</h2>
            <ul className="mt-3 space-y-2">
              {FOOTER_LINKS.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition hover:text-white focus-esa"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Courses</h2>
            <ul className="mt-3 space-y-2">
              {FOOTER_LINKS.courses.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition hover:text-white focus-esa"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Contact</h2>
            <ul className="mt-3 space-y-2.5 text-sm text-white/70">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 transition hover:text-white focus-esa"
                >
                  <Phone className="h-3.5 w-3.5 text-esa-gold" aria-hidden />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  className="inline-flex items-start gap-2 transition hover:text-white focus-esa"
                >
                  <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-esa-gold" aria-hidden />
                  <span className="break-anywhere">{SITE.email}</span>
                </a>
              </li>
              <li>
                <Link href="/privacy" className="transition hover:text-white focus-esa">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/15 pt-4 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>© 2026 Easy Spanish Academy. All rights reserved.</p>
          <p className="sm:text-center">
            Developed by{" "}
            <a
              href="https://webfasttech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-esa-gold transition hover:text-white focus-esa"
            >
              Web Fast Technology
            </a>
          </p>
          <p className="text-white/45 sm:text-right">{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
