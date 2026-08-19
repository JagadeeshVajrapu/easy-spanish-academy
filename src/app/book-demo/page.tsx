import type { Metadata } from "next";
import { BookDemoForm } from "@/components/sections/BookDemoForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Book a demo class with Easy Spanish Academy for Spanish or German courses.",
  openGraph: {
    title: `Book a Demo | ${SITE.name}`,
    url: `${SITE.url}/book-demo`,
  },
};

type PageProps = {
  searchParams: Promise<{ interest?: string }>;
};

export default async function BookDemoPage({ searchParams }: PageProps) {
  const params = await searchParams;

  return (
    <section className="section-pad">
      <div className="container-esa grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-label text-esa-red">Book a Demo</p>
          <h1 className="text-hero mt-2">Request a demo class</h1>
          <p className="mt-3 text-esa-muted">
            Tell us your preferred language and course. We will get back to you
            with the next step. You can also call{" "}
            <a href={SITE.phoneHref} className="font-semibold text-esa-red focus-esa">
              {SITE.phoneDisplay}
            </a>{" "}
            or email{" "}
            <a href={SITE.emailHref} className="font-semibold text-esa-red focus-esa">
              {SITE.email}
            </a>
            .
          </p>
        </div>
        <div className="rounded-xl border border-esa-border bg-white p-5 shadow-esa-soft sm:p-7">
          <BookDemoForm defaultInterest={params.interest} />
        </div>
      </div>
    </section>
  );
}
