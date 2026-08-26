"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { TopBar } from "@/components/layout/TopBar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { ContactFab } from "@/components/sections/ContactFab";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <main className="min-h-full flex-1">{children}</main>;
  }

  return (
    <>
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ContactFab />
    </>
  );
}
