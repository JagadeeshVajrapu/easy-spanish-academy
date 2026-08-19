import { cn } from "@/lib/utils";

/** Lightweight wrapper — no scroll-triggered opacity (avoids zoom/scroll layout bugs). */
export function AnimateIn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: string;
  variant?: string;
}) {
  return <div className={cn(className)}>{children}</div>;
}
