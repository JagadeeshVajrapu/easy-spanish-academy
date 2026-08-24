"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { FlagAccent } from "@/components/ui/FlagAccent";
import { COURSE_NAV, NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

function isCoursePathActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isNavLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const navLinkClass = (active: boolean) =>
  cn(
    "inline-flex min-h-9 shrink-0 items-center justify-center whitespace-nowrap rounded-lg px-2.5 text-[13px] font-medium transition duration-200 focus-esa xl:min-h-10 xl:px-3 xl:text-sm",
    active
      ? "bg-esa-red-soft text-esa-red shadow-sm ring-1 ring-esa-red/20"
      : "text-esa-navy/85 hover:bg-esa-soft hover:text-esa-navy",
  );

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

  useEffect(() => {
    setCoursesOpen(false);
  }, [pathname]);

  function renderDesktopCourseMenu() {
    return (
      <div
        role="menu"
        className="absolute left-1/2 top-full z-50 mt-2 w-[17rem] -translate-x-1/2 rounded-xl border border-esa-border bg-white p-2 shadow-esa-lift"
      >
        {COURSE_NAV.map((group) => (
          <div key={group.href} className="rounded-lg">
            <Link
              href={group.href}
              role="menuitem"
              className={cn(
                "flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-semibold focus-esa",
                isCoursePathActive(pathname, group.href)
                  ? "bg-esa-red-soft text-esa-red"
                  : "text-esa-navy hover:bg-esa-soft",
              )}
              onClick={closeMenus}
            >
              {group.flag ? <FlagAccent country={group.flag} /> : null}
              {group.label}
            </Link>

            {group.children?.length ? (
              <div className="mb-1 mt-0.5 space-y-0.5 pl-3">
                <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-esa-muted">
                  Programs
                </p>
                {group.children.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    role="menuitem"
                    className={cn(
                      "block rounded-lg px-3 py-2 text-sm font-medium focus-esa",
                      pathname.startsWith(sub.href)
                        ? "bg-esa-red-soft text-esa-red"
                        : "text-esa-navy/90 hover:bg-esa-soft hover:text-esa-navy",
                    )}
                    onClick={closeMenus}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            ) : null}

            {group !== COURSE_NAV[COURSE_NAV.length - 1] ? (
              <div className="my-1.5 border-t border-esa-border/80" aria-hidden />
            ) : null}
          </div>
        ))}
      </div>
    );
  }

  function renderMobileCourseMenu() {
    return (
      <div className="space-y-1 border-t border-esa-border p-2">
        {COURSE_NAV.map((group) => (
          <div key={group.href} className="rounded-lg">
            <button
              type="button"
              className={cn(
                "flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-base font-semibold focus-esa",
                isCoursePathActive(pathname, group.href)
                  ? "bg-esa-red-soft text-esa-red"
                  : "text-esa-navy hover:bg-esa-soft",
              )}
              onClick={() => goTo(group.href)}
            >
              {group.flag ? <FlagAccent country={group.flag} size="md" /> : null}
              {group.label}
            </button>

            {group.children?.length ? (
              <div className="ml-3 mt-0.5 space-y-0.5 border-l-2 border-esa-red/15 pl-2">
                {group.children.map((sub) => (
                  <button
                    key={sub.href}
                    type="button"
                    className={cn(
                      "w-full rounded-lg px-3 py-2 text-left text-sm font-medium focus-esa",
                      pathname.startsWith(sub.href)
                        ? "bg-esa-red-soft text-esa-red"
                        : "text-esa-navy/85 hover:bg-esa-soft",
                    )}
                    onClick={() => goTo(sub.href)}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    );
  }

  return (
    <header className="sticky top-0 z-40 border-b border-esa-border/70 bg-white/95 shadow-esa-soft backdrop-blur-md">
      <div className="container-esa flex h-[4.25rem] items-center gap-3 sm:h-[4.5rem] sm:gap-4">
        {/* Brand */}
        <Link
          href="/"
          onClick={(event) => {
            closeMenus();
            if (pathname === "/") {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="group flex min-w-0 shrink-0 items-center gap-2 focus-esa sm:gap-2.5"
        >
          <BrandLogo size="nav" priority />
          <span className="hidden min-w-0 leading-tight md:block">
            <span className="block max-w-[9.5rem] truncate text-[0.9375rem] font-bold text-esa-navy lg:max-w-[10.5rem] lg:text-base xl:max-w-none">
              Easy Spanish Academy
            </span>
            <span className="mt-0.5 hidden text-[11px] leading-snug text-esa-muted xl:block xl:text-xs">
              {SITE.instituteTagline}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden min-w-0 flex-1 items-center justify-center lg:flex"
          aria-label="Primary"
        >
          <div className="flex max-w-full items-center justify-center gap-0.5 xl:gap-1">
            {NAV_LINKS.map((item) => {
              if ("children" in item && item.children) {
                return (
                  <div key={item.label} className="relative shrink-0" ref={desktopCoursesRef}>
                    <button
                      type="button"
                      className={cn(
                        navLinkClass(courseActive || coursesOpen),
                        "gap-1",
                      )}
                      aria-expanded={coursesOpen}
                      aria-current={courseActive ? "page" : undefined}
                      onClick={() => setCoursesOpen((v) => !v)}
                    >
                      Courses
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 shrink-0 transition duration-200 xl:h-4 xl:w-4",
                          coursesOpen && "rotate-180",
                        )}
                        aria-hidden
                      />
                    </button>
                    {coursesOpen ? renderDesktopCourseMenu() : null}
                  </div>
                );
              }

              const active = isNavLinkActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenus}
                  className={navLinkClass(active)}
                  aria-current={active ? "page" : undefined}
                >
                  {item.href === "/why-choose-us" ? (
                    <>
                      <span className="xl:hidden">Why Us</span>
                      <span className="hidden xl:inline">Why Choose Us</span>
                    </>
                  ) : (
                    item.label
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Actions */}
        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-2.5 lg:ml-0">
          <Link
            href="/book-demo"
            className="esa-btn hidden rounded-lg bg-esa-red px-4 py-2.5 text-sm font-semibold text-white shadow-esa-soft transition hover:bg-esa-red-dark focus-esa lg:inline-flex xl:px-5 xl:py-3"
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

      {/* Mobile menu */}
      <div
        id={mobileNavId}
        className={cn(
          "border-t border-esa-border bg-white lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav
          aria-label="Mobile"
          className="container-esa flex max-h-[min(70vh,32rem)] flex-col gap-1 overflow-y-auto py-3"
        >
          {NAV_LINKS.map((item) => {
            if ("children" in item && item.children) {
              return (
                <div key={item.label} className="overflow-hidden rounded-xl border border-esa-border">
                  <button
                    type="button"
                    className={cn(
                      "flex w-full items-center justify-between px-3 py-3 text-left text-base font-medium focus-esa",
                      courseActive || mobileCoursesOpen
                        ? "bg-esa-red-soft text-esa-red"
                        : "text-esa-navy",
                    )}
                    aria-expanded={mobileCoursesOpen}
                    aria-current={courseActive ? "page" : undefined}
                    onClick={() => setMobileCoursesOpen((v) => !v)}
                  >
                    Courses
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition duration-200",
                        mobileCoursesOpen && "rotate-180",
                      )}
                    />
                  </button>
                  {mobileCoursesOpen ? renderMobileCourseMenu() : null}
                </div>
              );
            }

            return (
              <button
                key={item.href}
                type="button"
                className={cn(
                  "rounded-lg px-3 py-3 text-left text-base font-medium focus-esa",
                  isNavLinkActive(pathname, item.href)
                    ? "bg-esa-red-soft text-esa-red ring-1 ring-esa-red/15"
                    : "text-esa-navy",
                )}
                aria-current={isNavLinkActive(pathname, item.href) ? "page" : undefined}
                onClick={() => goTo(item.href)}
              >
                {item.label}
              </button>
            );
          })}
          <Link
            href="/book-demo"
            onClick={closeMenus}
            className="mt-2 rounded-lg bg-esa-red px-3 py-3 text-center text-base font-semibold text-white shadow-esa-soft focus-esa"
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
