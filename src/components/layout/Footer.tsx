import type { ReactNode } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { FlagAccent } from "@/components/ui/FlagAccent";
import { FOOTER_LINKS, SITE } from "@/lib/constants";
import { whatsappUrl } from "@/lib/utils";

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-esa-gold">
      {children}
    </h2>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const className =
    "text-sm leading-snug text-white/80 transition hover:text-white focus-esa";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.85 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-esa-navy text-white">
      <div className="container-esa py-9 md:py-10 lg:py-11">
        {/* Brand sizes to lockup; link columns share remaining space with tighter gaps */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[auto_minmax(0,0.7fr)_minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-x-5 lg:gap-y-10 xl:gap-x-6">
          {/* Brand */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-1 lg:max-w-none">
            <Link href="/" className="inline-flex focus-esa">
              <BrandLogo size="footer" />
            </Link>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/90">
                <FlagAccent country="ES" /> Spanish Language
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/90">
                <FlagAccent country="DE" /> German Language
              </span>
            </div>
            <SocialLinks className="mt-4" />
          </div>

          {/* Quick Links */}
          <div className="min-w-0">
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="mt-3 space-y-2.5">
              {FOOTER_LINKS.explore.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="min-w-0">
            <FooterHeading>Courses</FooterHeading>
            <ul className="mt-3 space-y-2.5">
              {FOOTER_LINKS.courses.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-0">
            <FooterHeading>Contact</FooterHeading>
            <ul className="mt-3 space-y-3">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex w-full items-center gap-2.5 text-sm text-white/85 transition hover:text-white focus-esa"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-esa-gold">
                    <Phone className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span className="min-w-0 font-medium">{SITE.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  className="flex w-full items-center gap-2.5 text-sm text-white/85 transition hover:text-white focus-esa"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-esa-gold">
                    <Mail className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span className="min-w-0 text-[12px] font-medium leading-snug tracking-tight sm:text-[13px]">
                    {SITE.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl(SITE.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center gap-2.5 text-sm text-white/85 transition hover:text-white focus-esa"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/20 text-[#25D366]">
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="min-w-0 font-medium">WhatsApp us</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.addressMapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-start gap-2.5 text-sm text-white/85 transition hover:text-white focus-esa"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-esa-gold">
                    <MapPin className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1 leading-relaxed">
                    {SITE.addressLine1}, {SITE.addressLine2}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/55 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-4 sm:gap-y-2 sm:text-sm">
          <p className="shrink-0">© 2026 Easy Spanish Academy. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://webfasttech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-esa-gold/90 transition hover:text-esa-gold focus-esa"
            >
              Web Fast Technology
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
