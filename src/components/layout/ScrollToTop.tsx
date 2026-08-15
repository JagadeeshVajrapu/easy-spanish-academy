"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function scrollToHash(hash: string) {
  const id = decodeURIComponent(hash.replace(/^#/, ""));
  if (!id) return false;
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "auto", block: "start" });
  return true;
}

/** Scrolls to top on route change, or to the hash target when present. */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const tryScroll = () => scrollToHash(hash);
      tryScroll();
      const frame = window.requestAnimationFrame(() => {
        tryScroll();
        window.requestAnimationFrame(tryScroll);
      });
      const t1 = window.setTimeout(tryScroll, 80);
      const t2 = window.setTimeout(tryScroll, 200);
      return () => {
        window.cancelAnimationFrame(frame);
        window.clearTimeout(t1);
        window.clearTimeout(t2);
      };
    }

    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash) {
        scrollToHash(window.location.hash);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
