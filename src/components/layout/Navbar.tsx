"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { FlagAccent } from "@/components/ui/FlagAccent";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const COURSE_LINKS = [
  { label: "Spanish", href: "/courses/spanish", flag: "ES" as const },
  { label: "German", href: "/courses/german", flag: "DE" as const },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const mobileNavId = useId();
  const desktopCoursesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) setMobileCoursesOpen(false);
  }, [open]);

  useEffect(() => {
    if (!coursesOpen) return;
    function onPointerDown(event: MouseEvent) {
      if (
        desktopCoursesRef.current &&
        !desktopCoursesRef.current.contains(event.target as Node)
      ) {
        setCoursesOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setCoursesOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [coursesOpen]);

  function closeMenus() {
    setOpen(false);
    setCoursesOpen(false);
    setMobileCoursesOpen(false);
  }

  function goTo(href: string) {
    closeMenus();
    if (href !== pathname) router.push(href);
    else window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  const courseActive =
    pathname.startsWith("/courses") ||
    pathname.startsWith("/spanish-courses") ||
    pathname.startsWith("/german-courses");

  return (
    <header className="sticky top-0 z-40 border-b border-esa-border/80 bg-white">
      <div className="container-esa flex h-16 items-center justify-between gap-3 sm:h-[4.25rem]">
        <Link
          href="/"
          onClick={(event) => {
            closeMenus();
            if (pathname === "/") {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="group flex min-w-0 items-center gap-2.5 focus-esa"
        >
          <BrandLogo size="nav" priority />
          <span className="min-w-0">
            <span className="block truncate text-[0.95rem] font-bold leading-tight text-esa-navy sm:text-base">
              Easy Spanish Academy
            </span>
            <span className="mt-0.5 hidden text-[11px] text-esa-muted sm:block">
              Spanish & German Language Institute
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((item) => {
            if ("children" in item && item.children) {
              return (
                <div key={item.label} className="relative" ref={desktopCoursesRef}>
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition focus-esa",
                      courseActive || coursesOpen
                        ? "bg-esa-red-soft text-esa-red"
                        : "text-esa-navy/80 hover:bg-esa-soft hover:text-esa-navy",
                    )}
                    aria-expanded={coursesOpen}
                    onClick={() => setCoursesOpen((v) => !v)}
                  >
                    Courses
                    <ChevronDown
                      className={cn("h-4 w-4 transition", coursesOpen && "rotate-180")}
                      aria-hidden
                    />
                  </button>
                  {coursesOpen ? (
                    <div
                      role="menu"
                      className="absolute left-0 top-full z-50 mt-2 min-w-[200px] rounded-xl border border-esa-border bg-white p-1.5 shadow-esa-card"
                    >
                      {COURSE_LINKS.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className={cn(
                            "flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium focus-esa",
                            pathname.startsWith(child.href)
                              ? "bg-esa-red-soft text-esa-red"
                              : "text-esa-navy hover:bg-esa-soft",
                          )}
                          onClick={closeMenus}
                        >
                          <FlagAccent country={child.flag} />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            }

            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenus}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition focus-esa",
                  active
                    ? "bg-esa-red-soft text-esa-red"
                    : "text-esa-navy/80 hover:bg-esa-soft hover:text-esa-navy",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={SITE.phoneHref}
            className="hidden items-center gap-1.5 whitespace-nowrap text-sm font-medium text-esa-navy transition hover:text-esa-red focus-esa xl:inline-flex"
          >
            <Phone className="h-4 w-4 shrink-0 text-esa-red" aria-hidden />
            {SITE.phoneDisplay}
          </a>
          <Link
            href="/book-demo"
            className="hidden rounded-lg bg-esa-red px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-esa-red-dark focus-esa sm:inline-flex"
            onClick={closeMenus}
          >
            Book a Demo
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-esa-border text-esa-navy transition hover:bg-esa-soft focus-esa lg:hidden"
            aria-expanded={open}
            aria-controls={mobileNavId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id={mobileNavId}
        className={cn("border-t border-esa-border bg-white lg:hidden", open ? "block" : "hidden")}
      >
        <nav
          aria-label="Mobile"
          className="container-esa flex max-h-[min(70vh,32rem)] flex-col gap-1 overflow-y-auto py-3"
        >
          {NAV_LINKS.map((item) => {
            if ("children" in item && item.children) {
              return (
                <div key={item.label} className="rounded-xl border border-esa-border">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-3 py-3 text-left text-base font-medium text-esa-navy focus-esa"
                    aria-expanded={mobileCoursesOpen}
                    onClick={() => setMobileCoursesOpen((v) => !v)}
                  >
                    Courses
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition",
                        mobileCoursesOpen && "rotate-180",
                      )}
                    />
                  </button>
                  {mobileCoursesOpen ? (
                    <div className="space-y-1 border-t border-esa-border p-2">
                      {COURSE_LINKS.map((child) => (
                        <button
                          key={child.href}
                          type="button"
                          className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-base font-medium text-esa-navy hover:bg-esa-soft focus-esa"
                          onClick={() => goTo(child.href)}
                        >
                          <FlagAccent country={child.flag} size="md" />
                          {child.label}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            }

            return (
              <button
                key={item.href}
                type="button"
                className={cn(
                  "rounded-lg px-3 py-3 text-left text-base font-medium focus-esa",
                  pathname === item.href
                    ? "bg-esa-red-soft text-esa-red"
                    : "text-esa-navy",
                )}
                onClick={() => goTo(item.href)}
              >
                {item.label}
              </button>
            );
          })}
          <Link
            href="/book-demo"
            onClick={closeMenus}
            className="mt-2 rounded-lg bg-esa-red px-3 py-3 text-center text-base font-semibold text-white focus-esa"
          >
            Book a Demo
          </Link>
          <a
            href={SITE.phoneHref}
            className="rounded-lg bg-esa-soft px-3 py-3 text-center text-base font-medium text-esa-navy transition hover:bg-esa-red-soft hover:text-esa-red focus-esa"
          >
            Call {SITE.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
