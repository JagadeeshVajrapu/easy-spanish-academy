import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
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
                <span className="mt-0.5 block text-xs leading-snug text-white/75">
                  {SITE.instituteTagline}
                </span>
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/80">
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
                    className="text-sm text-white/80 transition hover:text-white focus-esa"
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
                    className="text-sm text-white/80 transition hover:text-white focus-esa"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 sm:col-span-2 lg:col-span-1 lg:min-w-[15.5rem]">
            <h2 className="text-sm font-semibold text-white">Contact</h2>
            <ul className="mt-3 space-y-2.5 text-sm text-white/80">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 whitespace-nowrap transition hover:text-white focus-esa"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-esa-gold" aria-hidden />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  className="inline-flex items-center gap-2 transition hover:text-white focus-esa"
                  title={SITE.email}
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-esa-gold" aria-hidden />
                  <span className="break-anywhere text-sm tracking-tight">
                    {SITE.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.addressMapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2 transition hover:text-white focus-esa"
                >
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-esa-gold" aria-hidden />
                  <span className="text-sm leading-relaxed">
                    {SITE.addressLine1}
                    <br />
                    {SITE.addressLine2}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/15 pt-4 text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
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
          <p className="text-white/65 sm:text-right">{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
