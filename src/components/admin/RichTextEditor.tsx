"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type RichTextEditorProps = {
  value: string;
  onChange: (html: string) => void;
  className?: string;
};

export function RichTextEditor({ value, onChange, className }: RichTextEditorProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && ref.current.innerHTML !== value) {
      ref.current.innerHTML = value || "";
    }
  }, [value]);

  function applyFormat(command: string, commandValue?: string) {
    document.execCommand(command, false, commandValue);
    const el = ref.current;
    if (el) onChange(el.innerHTML);
  }

  return (
    <div className={cn("overflow-hidden rounded-xl border border-esa-border bg-white", className)}>
      <div className="flex flex-wrap gap-1 border-b border-esa-border bg-esa-soft/60 p-2">
        <button type="button" title="Bold" onClick={() => applyFormat("bold")} className="rounded-md px-2.5 py-1 text-xs font-semibold text-esa-navy transition hover:bg-white focus-esa">
          B
        </button>
        <button type="button" title="Italic" onClick={() => applyFormat("italic")} className="rounded-md px-2.5 py-1 text-xs font-semibold text-esa-navy transition hover:bg-white focus-esa">
          I
        </button>
        <button type="button" title="Underline" onClick={() => applyFormat("underline")} className="rounded-md px-2.5 py-1 text-xs font-semibold text-esa-navy transition hover:bg-white focus-esa">
          U
        </button>
        <button type="button" title="Heading" onClick={() => applyFormat("formatBlock", "h2")} className="rounded-md px-2.5 py-1 text-xs font-semibold text-esa-navy transition hover:bg-white focus-esa">
          H2
        </button>
        <button type="button" title="Bullet list" onClick={() => applyFormat("insertUnorderedList")} className="rounded-md px-2.5 py-1 text-xs font-semibold text-esa-navy transition hover:bg-white focus-esa">
          • List
        </button>
        <button type="button" title="Numbered list" onClick={() => applyFormat("insertOrderedList")} className="rounded-md px-2.5 py-1 text-xs font-semibold text-esa-navy transition hover:bg-white focus-esa">
          1. List
        </button>
        <button
          type="button"
          title="Insert link"
          onClick={() => {
            const url = window.prompt("Link URL");
            if (url) applyFormat("createLink", url);
          }}
          className="rounded-md px-2.5 py-1 text-xs font-semibold text-esa-navy transition hover:bg-white focus-esa"
        >
          Link
        </button>
      </div>
      <div
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        className="prose-esa min-h-[240px] max-w-none px-4 py-3 text-sm leading-relaxed text-esa-navy outline-none sm:text-base"
        onInput={() => {
          const el = ref.current;
          if (el) onChange(el.innerHTML);
        }}
      />
    </div>
  );
}
