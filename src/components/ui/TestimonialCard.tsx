import { Quote } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { BodyText, CardTitle, CourseMeta } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

/**
 * Editable testimonial card template.
 * Do not invent real student names or quotes — pass client-approved content only.
 */
type TestimonialCardProps = {
  quote: string;
  name: string;
  role?: string;
  className?: string;
  placeholder?: boolean;
};

export function TestimonialCard({
  quote,
  name,
  role,
  className,
  placeholder = false,
}: TestimonialCardProps) {
  return (
    <Card className={cn("relative h-full", className)} hover={!placeholder}>
      <Quote className="mb-4 h-8 w-8 text-esa-gold" aria-hidden />
      <BodyText as="blockquote" className="text-esa-navy/90">
        “{quote}”
      </BodyText>
      <div className="mt-6 border-t border-esa-border pt-4">
        <CardTitle as="p" className="text-base">
          {name}
        </CardTitle>
        {role ? <CourseMeta className="mt-1">{role}</CourseMeta> : null}
        {placeholder ? (
          <p className="mt-3 text-xs font-medium uppercase tracking-wider text-esa-muted">
            Placeholder — replace with approved learner feedback
          </p>
        ) : null}
      </div>
    </Card>
  );
}
