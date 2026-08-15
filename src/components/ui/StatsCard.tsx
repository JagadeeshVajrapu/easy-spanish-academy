import { Card } from "@/components/ui/Card";
import { BodyTextSm, Label } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

/**
 * Stats / highlight card.
 * Prefer qualitative labels over invented student counts or awards.
 */
type StatsCardProps = {
  value: string;
  label: string;
  description?: string;
  className?: string;
  tone?: "default" | "navy" | "soft";
};

export function StatsCard({
  value,
  label,
  description,
  className,
  tone = "default",
}: StatsCardProps) {
  const tones = {
    default: "bg-esa-surface",
    navy: "border-transparent bg-esa-navy text-white shadow-none",
    soft: "bg-esa-red-soft/60",
  };

  return (
    <Card
      className={cn("h-full", tones[tone], className)}
      hover={tone !== "navy"}
    >
      <p
        className={cn(
          "font-display text-3xl font-semibold tracking-tight sm:text-4xl",
          tone === "navy" ? "text-esa-gold" : "text-esa-red",
        )}
      >
        {value}
      </p>
      <Label
        tone={tone === "navy" ? "light" : "muted"}
        className="mt-3"
      >
        {label}
      </Label>
      {description ? (
        <BodyTextSm
          className={cn("mt-3", tone === "navy" && "text-white/70")}
        >
          {description}
        </BodyTextSm>
      ) : null}
    </Card>
  );
}

type StatsGridProps = {
  items: StatsCardProps[];
  className?: string;
};

export function StatsGrid({ items, className }: StatsGridProps) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {items.map((item) => (
        <StatsCard key={`${item.label}-${item.value}`} {...item} />
      ))}
    </div>
  );
}

/** Qualitative academy highlights — no invented enrollment figures. */
export const ACADEMY_HIGHLIGHTS: StatsCardProps[] = [
  {
    value: "ES + DE",
    label: "Languages",
    description: "Spanish and German pathways under one academy.",
  },
  {
    value: "Speak",
    label: "Focus",
    description: "Conversation practice woven into every learning journey.",
  },
  {
    value: "Clear",
    label: "Guidance",
    description: "Structured lessons with friendly, professional support.",
  },
  {
    value: "Connect",
    label: "Purpose",
    description: "Language skills that help you connect across cultures.",
  },
];
