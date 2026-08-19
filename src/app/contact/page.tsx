import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { SITE } from "@/lib/constants";
import { whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Easy Spanish Academy by phone, email, or WhatsApp. Send an enquiry about Spanish and German courses.",
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
        <div className="container-esa grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-10">
          {/* Enquiry form — left on desktop (reference layout) */}
          <div className="order-2 lg:order-1">
            <ContactForm />
          </div>

          {/* Primary contact area — Call / WhatsApp / Email once */}
          <aside className="order-1 space-y-4 lg:order-2">
            <div>
              <p className="text-label text-esa-red">Contact information</p>
              <h2 className="mt-2 text-xl font-bold text-esa-navy sm:text-2xl">
                Reach Easy Spanish Academy
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-esa-muted">
                Call, WhatsApp, or email us—whichever is easiest for your enquiry.
              </p>
            </div>

            <div className="rounded-xl border border-esa-border bg-white p-5 shadow-esa-soft sm:p-6">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-esa-navy text-white">
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
            </div>
          </aside>
        </div>
      </section>

      {/* BOOK A DEMO + TALK TO CONSULTANT */}
      <section className="border-t border-esa-border bg-white">
        <div className="container-esa grid gap-4 py-10 sm:py-12 lg:grid-cols-2 lg:gap-6">
          <div className="rounded-xl border border-esa-border bg-esa-bg p-5 sm:p-6">
            <p className="text-label text-esa-red">Book a Demo</p>
            <h2 className="mt-2 text-xl font-bold text-esa-navy">
              Prefer a demo class first?
            </h2>
            <p className="mt-2 text-sm text-esa-muted">
              Share your preferred language and course—we will help you take the
              next step with a demo enquiry.
            </p>
            <Link
              href="/book-demo"
              className="mt-5 inline-flex rounded-lg bg-esa-red px-5 py-3 text-sm font-semibold text-white transition hover:bg-esa-red-dark focus-esa"
            >
              Book a Demo
            </Link>
          </div>

          <div className="rounded-xl border border-esa-border bg-esa-navy p-5 text-white sm:p-6">
            <p className="text-label text-esa-gold">Consultant</p>
            <h2 className="mt-2 text-xl font-bold text-white">
              Talk to a Consultant
            </h2>
            <p className="mt-2 text-sm text-white/75">
              Need help choosing Spanish or German? Use the enquiry form above, or
              call{" "}
              <a href={SITE.phoneHref} className="font-semibold text-esa-gold focus-esa">
                {SITE.phoneDisplay}
              </a>
              .
            </p>
            <a
              href="#contact-name"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15 focus-esa"
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
