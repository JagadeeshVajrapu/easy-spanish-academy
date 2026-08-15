import { Check } from "lucide-react";
import { Label, Subheading } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

type LearningOutcomesProps = {
  outcomes: string[];
  title?: string;
  className?: string;
};

export function LearningOutcomes({
  outcomes,
  title = "Learning outcomes",
  className,
}: LearningOutcomesProps) {
  return (
    <div className={cn(className)}>
      <Label tone="primary">{title}</Label>
      <Subheading as="h3" className="mt-2 text-xl">
        What you can expect to build
      </Subheading>
      <ul className="mt-5 space-y-3">
        {outcomes.map((outcome) => (
          <li key={outcome} className="flex gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-esa-red-soft text-esa-red">
              <Check className="h-3.5 w-3.5" aria-hidden />
            </span>
            <span className="text-esa-muted sm:text-base">{outcome}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
