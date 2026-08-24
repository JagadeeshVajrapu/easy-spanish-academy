import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui/Breadcrumbs";
import { BodyText, HeroHeading, Label } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

type CourseHeroProps = {
  flag: "ES" | "DE";
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  breadcrumbs?: BreadcrumbItem[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
};

export function CourseHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumbs,
  primaryCta = { label: "Enquire Now", href: "/contact" },
  secondaryCta,
  className,
}: CourseHeroProps) {
  return (
    <section className={cn("relative isolate overflow-hidden", className)}>
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="bg-hero-overlay absolute inset-0" />
      </div>

      <Container className="relative flex min-h-[58vh] items-end px-4 py-16 sm:min-h-[64vh] sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          {breadcrumbs ? <Breadcrumbs items={breadcrumbs} light /> : null}
          {eyebrow ? (
            <Label tone="light" className="mb-3">
              {eyebrow}
            </Label>
          ) : null}
          <HeroHeading className="text-white">{title}</HeroHeading>
          <BodyText className="mt-4 max-w-2xl text-white/80">{description}</BodyText>

          <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
            <Button href={primaryCta.href} size="lg" className="w-full sm:w-auto">
              {primaryCta.label}
            </Button>
            {secondaryCta ? (
              <Button
                href={secondaryCta.href}
                variant="outline"
                size="lg"
                className="w-full border-white/25 bg-white/10 text-white hover:bg-white/15 sm:w-auto"
                target={secondaryCta.href.startsWith("http") ? "_blank" : undefined}
                rel={secondaryCta.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
