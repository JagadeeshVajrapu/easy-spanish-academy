import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { ContactForm } from "@/components/sections/ContactForm";
import { ACADEMY_LOCATIONS, SITE } from "@/lib/constants";
import { whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Easy Spanish Academy in Pitampura, Delhi. Call, WhatsApp, email, or send an enquiry about Spanish and German courses.",
  openGraph: {
    title: `Contact Us | ${SITE.name}`,
    description:
      "Enquire about Spanish and German courses. Call, WhatsApp, or email Easy Spanish Academy.",
    url: `${SITE.url}/contact`,
  },
};

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.85 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* HERO — reference-style navy band */}
      <section className="bg-esa-navy text-white">
        <div className="container-esa py-12 sm:py-14 lg:py-16">
          <p className="text-label text-esa-gold">Contact</p>
          <h1 className="text-hero mt-3 text-white">Get in touch</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Have a question, want a demo, or ready to enrol? Reach out by phone,
            WhatsApp, email, or the enquiry form.
          </p>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="section-pad bg-esa-bg">
        <div className="container-esa grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
          {/* Enquiry form — left on desktop */}
          <div className="order-2 flex h-full lg:order-1">
            <ContactForm className="h-full" />
          </div>

          {/* Primary contact area */}
          <aside className="order-1 flex h-full lg:order-2">
            <div className="flex h-full w-full flex-col rounded-xl border border-esa-border bg-white p-6 shadow-esa-soft sm:p-8">
              <div className="mb-6 border-b border-esa-border pb-6">
                <p className="text-label text-esa-red">Contact information</p>
                <h2 className="mt-2 text-xl font-bold text-esa-navy sm:text-2xl">
                  Reach Easy Spanish Academy
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-esa-muted sm:text-base">
                  Call, WhatsApp, or email us—whichever is easiest for your enquiry.
                </p>
              </div>

              <div className="flex flex-1 flex-col">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3B82F6] text-white">
                  <Phone className="h-4 w-4" aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold text-esa-navy">Call</h3>
                  <a
                    href={SITE.phoneHref}
                    className="mt-1 inline-block text-base font-semibold text-esa-navy transition hover:text-esa-red focus-esa"
                  >
                    {SITE.phoneDisplay}
                  </a>
                  <p className="mt-1 text-sm text-esa-muted">
                    Speak with us about Spanish or German courses.
                  </p>
                </div>
              </div>

              <div className="my-5 border-t border-esa-border" />

              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <WhatsAppGlyph className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold text-esa-navy">WhatsApp</h3>
                  <p className="mt-1 text-sm text-esa-muted">
                    Message us for course guidance and demo booking.
                  </p>
                  <a
                    href={whatsappUrl(SITE.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1ebe57] focus-esa"
                  >
                    <WhatsAppGlyph className="h-4 w-4" />
                    WhatsApp us
                  </a>
                </div>
              </div>

              <div className="my-5 border-t border-esa-border" />

              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-esa-navy text-white">
                  <MapPin className="h-4 w-4" aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold text-esa-navy">Address</h3>
                  <address className="mt-1 not-italic text-sm leading-relaxed text-esa-navy sm:text-base">
                    {SITE.addressLine1}
                    <br />
                    {SITE.addressLine2}
                  </address>
                  <a
                    href={SITE.addressMapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-semibold text-esa-red transition hover:text-esa-red-dark focus-esa"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>

              <div className="my-5 border-t border-esa-border" />

              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-esa-red-soft text-esa-red">
                  <Mail className="h-4 w-4" aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold text-esa-navy">Email</h3>
                  <a
                    href={SITE.emailHref}
                    className="mt-1 block break-anywhere text-sm font-semibold text-esa-navy transition hover:text-esa-red focus-esa sm:text-base"
                  >
                    {SITE.email}
                  </a>
                  <p className="mt-1 text-sm text-esa-muted">
                    Send course questions or enrolment details by email.
                  </p>
                </div>
              </div>

              <div className="my-5 border-t border-esa-border" />

              <div>
                <h3 className="text-base font-bold text-esa-navy">Follow us</h3>
                <p className="mt-1 text-sm text-esa-muted">
                  YouTube, Instagram, and Facebook — opens in a new tab.
                </p>
                <SocialLinks tone="light" className="mt-3" />
              </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Locations */}
      <section className="border-t border-esa-border bg-white">
        <div className="container-esa section-pad">
          <div className="max-w-2xl">
            <p className="text-label text-esa-red">Locations we serve</p>
            <h2 className="text-section mt-2 text-esa-navy">
              Learn Online Across India
            </h2>
            <p className="mt-3 text-esa-muted">
              Our academy is based in Pitampura, Delhi. We also offer online Spanish
              and German programs for learners across these regions.
            </p>
          </div>

          <div className="mt-8 rounded-xl border border-esa-border bg-esa-bg p-5 sm:p-6">
            <p className="text-label text-esa-red">Office address</p>
            <address className="mt-2 not-italic text-base font-semibold leading-relaxed text-esa-navy">
              {SITE.addressLine1}
              <br />
              {SITE.addressLine2}
            </address>
            <a
              href={SITE.addressMapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-esa-red transition hover:text-esa-red-dark focus-esa"
            >
              <MapPin className="h-4 w-4" aria-hidden />
              Open in Google Maps
            </a>
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {ACADEMY_LOCATIONS.map((location) => (
              <li
                key={location}
                className="esa-lift-soft flex items-center gap-2 rounded-xl border border-esa-border bg-esa-bg px-3 py-3 text-sm font-medium text-esa-navy sm:px-4"
              >
                <MapPin className="h-4 w-4 shrink-0 text-esa-red" aria-hidden />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BOOK A DEMO + TALK TO CONSULTANT */}
      <section className="border-t border-esa-border bg-white">
        <div className="container-esa grid auto-rows-fr gap-5 py-10 sm:py-12 lg:grid-cols-2 lg:gap-6">
          <div className="flex h-full min-h-[240px] flex-col rounded-xl border border-esa-border bg-esa-bg p-6 shadow-esa-soft sm:min-h-[260px] sm:p-8">
            <p className="text-label text-esa-red">Book a Demo</p>
            <h2 className="mt-2 text-xl font-bold text-esa-navy sm:text-2xl">
              Prefer a demo class first?
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-esa-muted sm:text-base">
              Share your preferred language and course—we will help you take the
              next step with a demo enquiry.
            </p>
            <Link
              href="/book-demo"
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-esa-red px-5 py-3 text-sm font-semibold text-white transition hover:bg-esa-red-dark focus-esa sm:w-auto"
            >
              Book a Demo
            </Link>
          </div>

          <div className="flex h-full min-h-[240px] flex-col rounded-xl border border-esa-border bg-esa-navy p-6 text-white shadow-esa-soft sm:min-h-[260px] sm:p-8">
            <p className="text-label text-esa-gold">Consultant</p>
            <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              Talk to a Consultant
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-white/75 sm:text-base">
              Need help choosing Spanish or German? Use the enquiry form above, or
              call{" "}
              <a href={SITE.phoneHref} className="font-semibold text-esa-gold focus-esa">
                {SITE.phoneDisplay}
              </a>
              .
            </p>
            <a
              href="#contact-name"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15 focus-esa sm:w-auto"
            >
              <MessageSquare className="h-4 w-4" aria-hidden />
              Go to enquiry form
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
