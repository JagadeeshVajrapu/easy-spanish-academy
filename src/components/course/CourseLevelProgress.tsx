import { cn } from "@/lib/utils";

type CourseLevelProgressProps = {
  levels?: readonly string[];
  className?: string;
  light?: boolean;
};

export function CourseLevelProgress({
  levels = ["A1", "A2", "B1", "B2"],
  className,
  light = false,
}: CourseLevelProgressProps) {
  return (
    <ol
      className={cn("flex flex-wrap items-center gap-2 sm:gap-3", className)}
      aria-label={`Course levels ${levels.join(" to ")}`}
    >
      {levels.map((level, index) => (
        <li key={level} className="inline-flex items-center gap-2 sm:gap-3">
          <span
            className={cn(
              "inline-flex min-w-11 items-center justify-center rounded-xl px-2.5 py-1.5 font-display text-sm font-semibold tracking-tight sm:min-w-14 sm:px-3 sm:py-2 sm:text-base",
              light
                ? "bg-white text-esa-navy"
                : "bg-esa-navy text-white shadow-esa-soft",
            )}
          >
            {level}
          </span>
          {index < levels.length - 1 ? (
            <span
              aria-hidden
              className={cn(
                "h-px w-3 sm:w-6",
                light ? "bg-white/50" : "bg-esa-border",
              )}
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
