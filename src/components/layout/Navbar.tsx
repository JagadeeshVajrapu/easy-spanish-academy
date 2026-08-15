"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { FlagAccent } from "@/components/ui/FlagAccent";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileNavId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenus() {
    setOpen(false);
    setCoursesOpen(false);
  }

  function goTo(href: string) {
    closeMenus();
    if (href !== pathname) {
      router.push(href);
    }
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-esa-border/70 bg-white/96 shadow-esa-soft backdrop-blur-md"
          : "border-transparent bg-white/92 backdrop-blur-sm",
      )}
    >
      <div className="container-esa flex h-16 items-center justify-between gap-3 px-4 sm:h-[4.35rem] sm:gap-4 sm:px-6 md:h-[4.65rem] lg:px-8">
        <Link
          href="/"
          onClick={closeMenus}
          className="group flex min-w-0 items-center gap-2.5 focus-esa sm:gap-3"
        >
          <BrandLogo
            size="nav"
            priority
            className="transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-[0.95rem] font-semibold leading-tight tracking-tight text-esa-navy transition-colors group-hover:text-esa-red sm:text-base md:text-[1.15rem]">
              Easy Spanish Academy
            </span>
            <span className="mt-0.5 hidden text-[11px] font-medium tracking-wide text-esa-muted sm:block">
              Spanish & German
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((item) => {
            if ("children" in item && item.children) {
              const childActive = item.children.some((child) => pathname === child.href);
              return (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 focus-esa",
                      childActive
                        ? "bg-esa-red-soft text-esa-red shadow-esa-soft"
                        : "text-esa-navy/80 hover:-translate-y-0.5 hover:bg-esa-red-soft/60 hover:text-esa-red",
                    )}
                    aria-expanded={coursesOpen}
                    aria-haspopup="menu"
                    onClick={() => setCoursesOpen((value) => !value)}
                    onBlur={(event) => {
                      if (!event.currentTarget.parentElement?.contains(event.relatedTarget as Node)) {
                        setCoursesOpen(false);
                      }
                    }}
                  >
                    Courses
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        coursesOpen && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </button>
                  {coursesOpen ? (
                    <div
                      role="menu"
                      className="absolute left-0 top-full z-50 mt-2 min-w-[220px] rounded-2xl border border-esa-border bg-white p-2 shadow-card"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className={cn(
                            "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 focus-esa",
                            pathname === child.href
                              ? "bg-esa-red-soft text-esa-red"
                              : "text-esa-navy hover:translate-x-0.5 hover:bg-esa-red-soft/50 hover:text-esa-red",
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
                  "rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 focus-esa",
                  active
                    ? "bg-esa-red-soft text-esa-red shadow-esa-soft"
                    : "text-esa-navy/80 hover:-translate-y-0.5 hover:bg-esa-red-soft/60 hover:text-esa-red",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href={SITE.phoneHref}
            variant="outline"
            size="sm"
            className="hidden xl:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {SITE.phoneDisplay}
          </Button>
          <Button href="/contact" size="sm" className="hidden sm:inline-flex" onClick={closeMenus}>
            Enroll Inquiry
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-esa-border bg-white text-esa-navy transition hover:border-esa-red/30 hover:bg-esa-red-soft/50 hover:text-esa-red focus-esa sm:h-12 sm:w-12 lg:hidden"
            aria-expanded={open}
            aria-controls={mobileNavId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id={mobileNavId}
        className={cn(
          "border-t border-esa-border bg-white lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav
          aria-label="Mobile"
          className="container-esa flex max-h-[calc(100vh-5.75rem)] flex-col gap-1 overflow-y-auto px-4 py-4 sm:px-6"
        >
          {NAV_LINKS.map((item) => {
            if ("children" in item && item.children) {
              return (
                <div key={item.label} className="rounded-2xl bg-esa-bg/70 p-2">
                  <p className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-esa-muted">
                    Courses
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={(event) => {
                        event.preventDefault();
                        goTo(child.href);
                      }}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-3 py-3 text-base font-medium focus-esa",
                        pathname === child.href
                          ? "bg-white text-esa-red shadow-soft"
                          : "text-esa-navy",
                      )}
                    >
                      <FlagAccent country={child.flag} size="md" />
                      {child.label}
                    </Link>
                  ))}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  goTo(item.href);
                }}
                className={cn(
                  "rounded-xl px-3 py-3 text-base font-medium focus-esa",
                  pathname === item.href
                    ? "bg-esa-red-soft text-esa-red"
                    : "text-esa-navy",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="mt-3 grid gap-2 border-t border-esa-border pt-4">
            <Button
              href="/contact"
              size="lg"
              onClick={(event) => {
                event.preventDefault();
                goTo("/contact");
              }}
            >
              Enroll Inquiry
            </Button>
            <Button href={SITE.phoneHref} variant="outline" size="lg">
              <Phone className="h-4 w-4" aria-hidden />
              Call {SITE.phoneDisplay}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
