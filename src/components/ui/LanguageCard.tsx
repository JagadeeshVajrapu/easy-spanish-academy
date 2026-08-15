import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FlagAccent } from "@/components/ui/FlagAccent";
import { BodyText, CardTitle, CourseMeta } from "@/components/ui/Typography";
import { ImageHover } from "@/components/ui/ImageHover";
import { cn } from "@/lib/utils";

type LanguageCardProps = {
  flag: "ES" | "DE";
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  className?: string;
};

export function LanguageCard({
  flag,
  title,
  description,
  href,
  image,
  imageAlt,
  className,
}: LanguageCardProps) {
  return (
    <Card className={cn("overflow-hidden p-0", className)}>
      <div className="relative aspect-[16/10]">
        <ImageHover>
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </ImageHover>
        <div className="absolute inset-0 bg-gradient-to-t from-esa-navy/70 via-esa-navy/20 to-transparent" />
        <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-xl bg-white/95 px-3 py-2 text-sm font-semibold text-esa-navy shadow-esa-soft">
          <FlagAccent country={flag} />
          {flag === "ES" ? "Spanish" : "German"}
        </div>
      </div>
      <div className="p-6 sm:p-7">
        <CardTitle as="h3" className="text-2xl sm:text-[1.65rem]">
          {title}
        </CardTitle>
        <BodyText className="mt-3">{description}</BodyText>
        <Button href={href} className="mt-6" variant="secondary">
          Explore {title}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
      </div>
    </Card>
  );
}

type CourseCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  meta?: string;
  href?: string;
  ctaLabel?: string;
  className?: string;
  tone?: "red" | "navy";
};

export function CourseCard({
  title,
  description,
  icon,
  meta = "Contact us for current course details.",
  href,
  ctaLabel = "Inquire",
  className,
  tone = "red",
}: CourseCardProps) {
  return (
    <Card className={cn("flex h-full flex-col", className)}>
      {icon ? (
        <div
          className={cn(
            "mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl",
            tone === "red"
              ? "bg-esa-red-soft text-esa-red"
              : "bg-esa-navy text-white",
          )}
        >
          {icon}
        </div>
      ) : null}
      <CardTitle>{title}</CardTitle>
      <BodyText className="mt-3 flex-1 text-base">{description}</BodyText>
      <CourseMeta className="mt-5 border-t border-esa-border pt-4">{meta}</CourseMeta>
      {href ? (
        <Button href={href} variant="outline" size="sm" className="mt-4 w-fit">
          {ctaLabel}
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Button>
      ) : null}
    </Card>
  );
}
