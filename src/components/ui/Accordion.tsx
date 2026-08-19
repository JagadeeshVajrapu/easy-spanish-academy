"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: readonly AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div
            key={item.question}
            className={cn(
              "esa-lift-soft rounded-xl border bg-white shadow-esa-soft",
              isOpen ? "border-esa-red/30" : "border-esa-border",
            )}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-start justify-between gap-3 px-4 py-4 text-left focus-esa sm:items-center sm:gap-4 sm:px-5 sm:py-4"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="min-w-0 text-[0.98rem] font-semibold leading-snug text-esa-navy sm:text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "mt-0.5 h-5 w-5 shrink-0 text-esa-red transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden
                />
              </button>
            </h3>
            {isOpen ? (
              <div id={panelId} role="region" aria-labelledby={buttonId}>
                <p className="border-t border-esa-border/70 px-4 pb-4 pt-3 text-sm leading-relaxed text-esa-muted sm:px-5 sm:pb-5 sm:text-base">
                  {item.answer}
                </p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
