import { Compass, MessageCircle, Sparkles, Target } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { BodyTextSm, CardTitle, Label } from "@/components/ui/Typography";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { cn } from "@/lib/utils";

export type JourneyStep = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

const DEFAULT_STEPS: JourneyStep[] = [
  {
    title: "Discover",
    description:
      "Share your goals and preferred language so we can guide your starting point.",
    icon: <Compass className="h-5 w-5" aria-hidden />,
  },
  {
    title: "Learn",
    description:
      "Build foundations with clear explanations, vocabulary, and cultural context.",
    icon: <Target className="h-5 w-5" aria-hidden />,
  },
  {
    title: "Practice",
    description:
      "Grow speaking confidence through guided conversation and active use.",
    icon: <MessageCircle className="h-5 w-5" aria-hidden />,
  },
  {
    title: "Connect",
    description:
      "Use your Spanish or German to communicate with clarity and warmth.",
    icon: <Sparkles className="h-5 w-5" aria-hidden />,
  },
];

type LearningJourneyProps = {
  steps?: JourneyStep[];
  className?: string;
  title?: string;
  eyebrow?: string;
};

export function LearningJourney({
  steps = DEFAULT_STEPS,
  className,
  title = "Your learning journey",
  eyebrow = "Pathway",
}: LearningJourneyProps) {
  return (
    <div className={cn(className)}>
      <Label tone="primary">{eyebrow}</Label>
      <h2 className="text-section mt-3 text-esa-navy">{title}</h2>
      <StaggerGroup className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <StaggerItem key={step.title}>
            <Card className="relative h-full overflow-hidden">
              <span className="absolute right-4 top-4 font-display text-4xl font-semibold text-esa-soft">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-esa-navy text-white">
                {step.icon}
              </div>
              <CardTitle>{step.title}</CardTitle>
              <BodyTextSm className="mt-3">{step.description}</BodyTextSm>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}
