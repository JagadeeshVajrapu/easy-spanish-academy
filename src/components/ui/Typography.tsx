import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
  as?: HeadingLevel | "p" | "span" | "blockquote";
};

export function HeroHeading({ children, className, as: Tag = "h1" }: TypographyProps) {
  return <Tag className={cn("text-hero text-esa-navy", className)}>{children}</Tag>;
}

export function SectionTitle({ children, className, as: Tag = "h2" }: TypographyProps) {
  return <Tag className={cn("text-section text-esa-navy", className)}>{children}</Tag>;
}

export function Subheading({ children, className, as: Tag = "h3" }: TypographyProps) {
  return <Tag className={cn("text-subheading text-esa-navy", className)}>{children}</Tag>;
}

export function CardTitle({ children, className, as: Tag = "h3" }: TypographyProps) {
  return <Tag className={cn("text-card-title text-esa-navy", className)}>{children}</Tag>;
}

export function BodyText({ children, className, as: Tag = "p" }: TypographyProps) {
  return <Tag className={cn("text-body", className)}>{children}</Tag>;
}

export function BodyTextSm({ children, className, as: Tag = "p" }: TypographyProps) {
  return <Tag className={cn("text-body-sm", className)}>{children}</Tag>;
}

export function Label({
  children,
  className,
  tone = "primary",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "primary" | "gold" | "muted" | "light";
}) {
  const tones = {
    primary: "text-esa-red",
    gold: "text-esa-gold",
    muted: "text-esa-muted",
    light: "text-esa-gold",
  };

  return <p className={cn("text-label", tones[tone], className)}>{children}</p>;
}

export function CourseMeta({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("text-course-meta", className)}>{children}</p>;
}
