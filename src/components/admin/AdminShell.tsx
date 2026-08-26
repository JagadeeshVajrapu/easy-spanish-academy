"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { AdminLogoutButton } from "@/components/admin/AdminLogoutButton";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/blogs", label: "All blogs" },
  { href: "/admin/blogs/create", label: "New blog", primary: true },
];

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isLogin = pathname === "/admin/login";

  if (isLogin) {
    return <div className="min-h-screen bg-esa-bg text-esa-navy">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-esa-bg text-esa-navy">
      <header className="border-b border-esa-border bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-esa-red">
              Easy Spanish Academy
            </p>
            <p className="text-lg font-bold">Blog Admin</p>
          </div>
          <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold">
            {nav.map((item) => {
              const active =
                item.href === "/admin/blogs"
                  ? pathname === "/admin/blogs" || pathname.startsWith("/admin/blogs/edit")
                  : pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 focus-esa",
                    item.primary
                      ? "bg-esa-red text-white hover:bg-esa-red-dark"
                      : active
                        ? "bg-esa-soft text-esa-navy"
                        : "hover:bg-esa-soft",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/blog" className="rounded-lg px-3 py-2 hover:bg-esa-soft focus-esa" target="_blank">
              View blog
            </Link>
            <AdminLogoutButton />
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">{children}</div>
    </div>
  );
}
