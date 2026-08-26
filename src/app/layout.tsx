import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { SITE } from "@/lib/constants";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
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
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-esa-bg text-esa-navy">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
