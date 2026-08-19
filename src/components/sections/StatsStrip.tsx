import { Award, GraduationCap, Sparkles, Users, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/** Illustrative academy highlights — replace with verified figures when available. */
export const ACADEMY_STATS = [
  { value: "480+", label: "Students trained", icon: Users },
  { value: "45+", label: "Batches completed", icon: GraduationCap },
  { value: "5+", label: "Years experience", icon: Award },
  { value: "93%", label: "Success rate", icon: Sparkles },
] as const satisfies ReadonlyArray<{
  value: string;
  label: string;
  icon: LucideIcon;
}>;

type StatsStripProps = {
  className?: string;
  variant?: "overlap" | "inline";
};

export function StatsStrip({ className, variant = "overlap" }: StatsStripProps) {
  return (
    <section
      aria-label="Academy highlights"
      className={cn(
        variant === "overlap" && "relative z-10 -mt-7 pb-2 sm:-mt-9 sm:pb-3",
        className,
      )}
    >
      <div className="container-esa">
        <div className="overflow-hidden rounded-2xl border border-esa-border bg-gradient-to-br from-white via-white to-esa-gold-soft/30 shadow-esa-card">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {ACADEMY_STATS.map((item, index) => (
              <div
                key={item.label}
                className={cn(
                  "group relative flex min-h-[8.5rem] flex-col items-center justify-center px-3 py-6 text-center sm:min-h-[9.25rem] sm:px-4 sm:py-7",
                  index % 2 === 1 && "max-lg:border-l max-lg:border-esa-border/70",
                  index >= 2 && "max-lg:border-t max-lg:border-esa-border/70",
                  index > 0 && "lg:border-l lg:border-esa-border/70",
                )}
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-esa-red-soft text-esa-red transition duration-200 group-hover:scale-105 group-hover:bg-esa-red group-hover:text-white">
                  <item.icon className="h-5 w-5" aria-hidden />
                </span>

                <p className="mt-3 whitespace-nowrap text-[clamp(1.65rem,3.8vw,2.25rem)] font-bold leading-none tracking-tight text-esa-navy tabular-nums">
                  <span className="text-esa-red">{item.value}</span>
                </p>

                <p className="mt-2 max-w-[9.5rem] text-sm font-medium leading-snug text-esa-muted">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
