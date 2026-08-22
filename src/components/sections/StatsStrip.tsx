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
};

/** Full-width credibility band — best placed after value proposition on the homepage. */
export function StatsStrip({ className }: StatsStripProps) {
  return (
    <section
      aria-label="Academy highlights"
      className={cn("relative overflow-hidden bg-esa-navy py-12 sm:py-14", className)}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_20%_0%,rgba(212,160,23,0.14),transparent_55%),radial-gradient(ellipse_60%_70%_at_90%_100%,rgba(196,30,30,0.12),transparent_50%)]"
        aria-hidden
      />

      <div className="container-esa relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-label text-esa-gold">Our track record</p>
          <h2 className="mt-2 text-[clamp(1.35rem,2.8vw,1.85rem)] font-bold leading-snug text-white">
            Trusted by Learners Across India
          </h2>
          <p className="mt-2 text-sm text-white/80 sm:text-base">
            Real progress built through structured Spanish and German programs.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4">
          {ACADEMY_STATS.map((item) => (
            <article
              key={item.label}
              className="group esa-lift-soft flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-3 py-6 text-center backdrop-blur-sm transition hover:border-esa-gold/30 hover:bg-white/10 sm:px-4 sm:py-7"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-esa-gold/15 text-esa-gold transition duration-200 group-hover:scale-105 group-hover:bg-esa-gold/25">
                <item.icon className="h-5 w-5" aria-hidden />
              </span>

              <p className="mt-3 whitespace-nowrap text-[clamp(1.75rem,3.6vw,2.35rem)] font-bold leading-none tracking-tight text-white tabular-nums">
                {item.value}
              </p>

              <p className="mt-2 text-sm font-medium leading-snug text-white/75">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
