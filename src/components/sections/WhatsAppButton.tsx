"use client";

import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";
import { whatsappUrl } from "@/lib/utils";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl(SITE.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Easy Spanish Academy on WhatsApp"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-esa-lift transition-transform duration-200 hover:scale-105 focus-esa sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />
    </a>
  );
}
