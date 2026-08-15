import { Star } from "lucide-react";
import { LEARNER_REVIEWS } from "@/lib/reviews-data";
import { cn } from "@/lib/utils";

type ReviewsMarqueeProps = {
  className?: string;
  compact?: boolean;
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
    <article className="group flex w-[min(22rem,78vw)] shrink-0 flex-col gap-2 rounded-2xl border border-esa-border/90 bg-white px-4 py-3.5 shadow-esa-soft transition duration-300 hover:-translate-y-0.5 hover:border-esa-red/25 hover:shadow-esa-card sm:w-[24rem] sm:px-5 sm:py-4">
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
      <div className="mt-auto border-t border-esa-border/80 pt-2.5">
        <p className="font-display text-sm font-semibold text-esa-navy transition-colors group-hover:text-esa-red">
          {name}
        </p>
        <p className="text-xs text-esa-muted">{role}</p>
      </div>
    </article>
  );
}

export function ReviewsMarquee({ className, compact = false }: ReviewsMarqueeProps) {
  const items = [...LEARNER_REVIEWS, ...LEARNER_REVIEWS];

  return (
    <section
      aria-label="Learner reviews"
      className={cn(
        "overflow-hidden border-t border-esa-border/80 bg-gradient-to-r from-esa-red-soft/40 via-white to-esa-gold-soft/50",
        compact ? "py-3.5 sm:py-4" : "py-6 sm:py-8",
        className,
      )}
    >
      <div className="container-esa mb-3 flex items-end justify-between gap-3 px-4 sm:mb-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-label text-esa-red">Learner voices</p>
          <p className="mt-1 font-display text-base font-semibold text-esa-navy sm:text-lg">
            What learners say about learning with us
          </p>
        </div>
        <p className="hidden text-xs text-esa-muted sm:block">Sample learner feedback</p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent sm:w-14" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent sm:w-14" />

        <div className="esa-marquee-track flex w-max gap-3 px-4 sm:gap-4 sm:px-6">
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
    </section>
  );
}
