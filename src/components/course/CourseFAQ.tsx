import { Accordion } from "@/components/ui/Accordion";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FaqItem } from "@/lib/faq-data";

type CourseFAQProps = {
  items: FaqItem[];
  title?: string;
  description?: string;
};

export function CourseFAQ({
  items,
  title = "Course questions",
  description = "Quick answers about levels, pathways, and how to enquire. Contact us for current course details.",
}: CourseFAQProps) {
  return (
    <Section tone="muted">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
        <AnimateIn>
          <SectionHeading eyebrow="FAQ" title={title} description={description} />
          <Button href="/contact" variant="outline" className="mt-8">
            Contact us
          </Button>
        </AnimateIn>
        <AnimateIn delay={0.08}>
          <Accordion items={items} />
        </AnimateIn>
      </div>
    </Section>
  );
}
