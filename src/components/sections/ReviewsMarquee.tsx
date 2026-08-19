import { Star } from "lucide-react";
import { LEARNER_REVIEWS } from "@/lib/reviews-data";
import { cn } from "@/lib/utils";

type ReviewsMarqueeProps = {
  className?: string;
  compact?: boolean;
  /** When false, heading is omitted — useful when the parent section already has a title. */
  showHeading?: boolean;
  /** Background fade color for marquee edge masks */
  fadeFrom?: string;
};

function ReviewChip({
  name,
  role,
  quote,
  rating,
}: {
  name: string;
  role: string;
  quote: string;
  rating: number;
}) {
  return (
    <article className="group flex w-[min(20rem,82vw)] shrink-0 flex-col gap-2.5 rounded-2xl border border-esa-border bg-white px-4 py-4 shadow-esa-soft transition duration-300 hover:-translate-y-1 hover:border-esa-red/25 hover:shadow-esa-card sm:w-[22rem] sm:px-5 sm:py-5">
      <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={cn(
              "h-3.5 w-3.5",
              index < rating ? "fill-esa-gold text-esa-gold" : "text-esa-border",
            )}
            aria-hidden
          />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-esa-navy/90 sm:text-[0.95rem]">
        “{quote}”
      </p>
      <div className="mt-auto border-t border-esa-border/80 pt-3">
        <p className="text-sm font-bold text-esa-navy transition-colors group-hover:text-esa-red">
          {name}
        </p>
        <p className="mt-0.5 text-xs text-esa-muted">{role}</p>
      </div>
    </article>
  );
}

export function ReviewsMarquee({
  className,
  compact = false,
  showHeading = true,
  fadeFrom = "from-white",
}: ReviewsMarqueeProps) {
  const items = [...LEARNER_REVIEWS, ...LEARNER_REVIEWS];

  return (
    <div
      aria-label="Learner reviews"
      className={cn(compact ? "py-2" : "py-2 sm:py-3", className)}
    >
      {showHeading ? (
        <div className="container-esa mb-4 flex items-end justify-between gap-3 sm:mb-5">
          <div>
            <p className="text-label text-esa-red">Learner voices</p>
            <p className="mt-1 text-base font-semibold text-esa-navy sm:text-lg">
              What learners say about learning with us
            </p>
          </div>
          <p className="hidden text-xs text-esa-muted sm:block">Sample learner feedback</p>
        </div>
      ) : null}

      <div className="relative overflow-hidden">
        <div
          className={cn(
            "pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r to-transparent sm:w-16",
            fadeFrom,
          )}
        />
        <div
          className={cn(
            "pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l to-transparent sm:w-16",
            fadeFrom,
          )}
        />

        <div className="esa-marquee-track flex w-max gap-4 px-4 sm:gap-5 sm:px-6">
          {items.map((review, index) => (
            <ReviewChip
              key={`${review.id}-${index}`}
              name={review.name}
              role={review.role}
              quote={review.quote}
              rating={review.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
