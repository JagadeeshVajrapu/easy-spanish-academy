import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { cn, whatsappUrl } from "@/lib/utils";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.85 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.022 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.888h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.918 8.437-9.94z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 1.75a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V23h-4v-6.7c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.54V23h-4V8.5z" />
    </svg>
  );
}

/** Social links for the top bar. */
const SOCIAL_LINKS = [
  {
    label: "WhatsApp",
    href: whatsappUrl(SITE.whatsappMessage),
    external: true,
    Icon: WhatsAppIcon,
    hoverClass: "hover:text-[#25D366]",
  },
  {
    label: "Facebook",
    href: "/contact",
    external: false,
    Icon: FacebookIcon,
    hoverClass: "hover:text-esa-gold",
  },
  {
    label: "Instagram",
    href: "/contact",
    external: false,
    Icon: InstagramIcon,
    hoverClass: "hover:text-esa-gold",
  },
  {
    label: "LinkedIn",
    href: "/contact",
    external: false,
    Icon: LinkedInIcon,
    hoverClass: "hover:text-esa-gold",
  },
] as const;

export function TopBar() {
  return (
    <div className="border-b border-white/10 bg-esa-navy text-white">
      <div className="container-esa flex min-h-10 flex-col justify-center gap-2.5 py-2.5 sm:min-h-11 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="flex min-w-0 flex-wrap items-center gap-x-5 gap-y-1.5 text-xs sm:text-[0.8125rem]">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-1.5 text-white/90 transition hover:text-esa-gold focus-esa"
          >
            <Phone className="h-3.5 w-3.5 shrink-0 text-esa-red" aria-hidden />
            <span>{SITE.phoneDisplay}</span>
          </a>
          <a
            href={SITE.emailHref}
            className="inline-flex min-w-0 items-center gap-1.5 text-white/90 transition hover:text-esa-gold focus-esa"
          >
            <Mail className="h-3.5 w-3.5 shrink-0 text-esa-red" aria-hidden />
            <span className="break-anywhere">{SITE.email}</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-1 sm:justify-end">
          {SOCIAL_LINKS.map(({ label, href, external, Icon, hoverClass }) => {
              const className = cn(
                "inline-flex h-8 w-8 items-center justify-center rounded-lg text-white/85 transition hover:bg-white/10 hover:text-esa-gold focus-esa",
                hoverClass,
              );

              if (external) {
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={className}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                );
              }

              return (
                <Link key={label} href={href} aria-label={label} className={className}>
                  <Icon className="h-3.5 w-3.5" />
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
