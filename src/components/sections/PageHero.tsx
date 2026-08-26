import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui/Breadcrumbs";
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
      <Container className="relative flex min-h-[42vh] items-end px-4 pb-12 pt-20 sm:min-h-[50vh] sm:px-6 sm:pb-16 sm:pt-24 lg:min-h-[56vh] lg:px-8 lg:pb-20 lg:pt-28">
        <div className="hero-text-shadow max-w-3xl">
          {breadcrumbs ? (
            <Breadcrumbs items={breadcrumbs} light className="mb-4 text-base" />
          ) : null}
          {eyebrow ? (
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-esa-gold sm:text-base">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-hero text-white">{title}</h1>
          <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-white/95 sm:mt-5 sm:text-lg md:text-xl">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
