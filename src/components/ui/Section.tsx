import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "muted" | "navy" | "mesh";
};

const toneClasses = {
  default: "bg-esa-surface",
  muted: "bg-esa-bg",
  navy: "bg-esa-navy text-white",
  mesh: "bg-mesh",
};

export function Section({
  children,
  className,
  id,
  tone = "default",
}: SectionProps) {
  return (
    <section id={id} className={cn("section-pad", toneClasses[tone], className)}>
      <div className="container-esa">{children}</div>
    </section>
  );
}
