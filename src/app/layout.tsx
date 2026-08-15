import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { TopBar } from "@/components/layout/TopBar";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";
import { SITE } from "@/lib/constants";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Spanish & German Language Courses`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "Easy Spanish Academy",
    "Spanish courses",
    "German courses",
    "language academy",
    "learn Spanish",
    "learn German",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Spanish & German Language Courses`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Spanish & German Language Courses`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${syne.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-esa-bg text-esa-navy">
        <ScrollToTop />
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
