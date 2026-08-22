import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui/Breadcrumbs";
import { BodyText, HeroHeading } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumbs,
  className,
}: PageHeroProps) {
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
      <Container className="relative flex min-h-[38vh] items-end px-4 pb-12 pt-20 sm:min-h-[46vh] sm:px-6 sm:pb-16 sm:pt-24 lg:min-h-[52vh] lg:px-8 lg:pb-20 lg:pt-28">
        <div className="hero-text-shadow max-w-3xl">
          {breadcrumbs ? <Breadcrumbs items={breadcrumbs} light className="mb-3" /> : null}
          {eyebrow ? (
            <p className="text-label mb-3 text-esa-gold">{eyebrow}</p>
          ) : null}
          <HeroHeading className="text-white">{title}</HeroHeading>
          <BodyText className="mt-3 max-w-2xl text-white/90 sm:mt-4">
            {description}
          </BodyText>
        </div>
      </Container>
    </section>
  );
}
