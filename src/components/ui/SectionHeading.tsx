import { cn } from "@/lib/utils";
import { BodyText, Label, SectionTitle } from "@/components/ui/Typography";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
  as = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Label tone={light ? "light" : "primary"} className="mb-3">
          {eyebrow}
        </Label>
      ) : null}
      <SectionTitle as={as} className={cn("transition-colors duration-300", light && "text-white")}>
        {title}
      </SectionTitle>
      {description ? (
        <BodyText className={cn("mt-4", light && "text-white/75")}>
          {description}
        </BodyText>
      ) : null}
    </div>
  );
}
