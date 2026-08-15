import { ArrowRight, CheckCircle2, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CourseLevelProgress } from "@/components/course/CourseLevelProgress";
import { LearningOutcomes } from "@/components/course/LearningOutcomes";
import {
  BodyText,
  CardTitle,
  CourseMeta,
  Label,
  Subheading,
} from "@/components/ui/Typography";
import type { CourseProgram } from "@/lib/course-data";
import { cn } from "@/lib/utils";

type CourseCardProps = {
  course: CourseProgram;
  tone?: "red" | "navy" | "gold";
  className?: string;
};

export function CourseCard({
  course,
  tone = "red",
  className,
}: CourseCardProps) {
  const accent =
    tone === "navy"
      ? {
          badge: "bg-esa-navy text-white",
          bar: "from-esa-navy via-esa-navy-soft to-esa-gold",
          chip: "bg-esa-navy/8 text-esa-navy",
        }
      : tone === "gold"
        ? {
            badge: "bg-esa-gold-soft text-esa-navy",
            bar: "from-esa-gold via-esa-gold-deep to-esa-red",
            chip: "bg-esa-gold-soft text-esa-navy",
          }
        : {
            badge: "bg-esa-red-soft text-esa-red",
            bar: "from-esa-red via-esa-red-dark to-esa-gold",
            chip: "bg-esa-red-soft text-esa-red",
          };

  const levelList = course.levels.includes("→")
    ? course.levels.split("→").map((part) => part.trim())
    : course.levels.includes("–")
      ? ["A1", "A2", "B1", "B2"]
      : course.levels.split(",").map((part) => part.trim());

  return (
    <Card
      id={course.id}
      className={cn(
        "group scroll-mt-28 overflow-hidden p-0 shadow-esa-card transition duration-300 ease-out hover:-translate-y-2 hover:border-esa-red/30 hover:shadow-esa-lift",
        className,
      )}
      hover={false}
    >
      <div className={cn("h-1.5 w-full bg-gradient-to-r", accent.bar)} aria-hidden />

      <div className="border-b border-esa-border bg-mesh px-5 py-6 sm:px-7 sm:py-7 lg:px-8">
        <div className="flex flex-wrap items-center gap-2.5">
          <span
            className={cn(
              "inline-flex rounded-xl px-3 py-1.5 text-xs font-semibold uppercase tracking-wider",
              accent.badge,
            )}
          >
            {course.levels}
          </span>
          {course.audienceNote ? (
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold",
                accent.chip,
              )}
            >
              <Users className="h-3.5 w-3.5" aria-hidden />
              {course.audienceNote}
            </span>
          ) : null}
          <CourseMeta className="ml-auto inline-flex items-center gap-1.5">
            <GraduationCap className="h-3.5 w-3.5" aria-hidden />
            Contact for details
          </CourseMeta>
        </div>

        <CardTitle as="h2" className="mt-4 text-2xl transition-colors duration-300 group-hover:text-esa-red sm:text-3xl">
          {course.title}
        </CardTitle>

        <div className="mt-5 rounded-2xl border border-esa-border/80 bg-white/80 px-4 py-4 shadow-esa-soft">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-esa-muted">
            Level progress
          </p>
          <CourseLevelProgress levels={levelList} />
        </div>
      </div>

      <div className="space-y-8 px-5 py-6 sm:px-7 sm:py-8 lg:px-8">
        <div>
          <Label tone="primary">Course overview</Label>
          <BodyText className="mt-3">{course.overview}</BodyText>
        </div>

        {course.whoFor ? (
          <div className="rounded-2xl border border-esa-border bg-esa-bg/80 px-5 py-4">
            <Label tone="primary">Who it is for</Label>
            <BodyText className="mt-3">{course.whoFor}</BodyText>
          </div>
        ) : null}

        <LearningOutcomes outcomes={course.outcomes} />

        <div>
          <Subheading as="h3" className="text-xl">
            Skills you will develop
          </Subheading>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {course.skills.map((skill) => (
              <div
                key={skill.title}
                className="group rounded-2xl border border-esa-border bg-white p-4 shadow-esa-soft transition duration-300 hover:-translate-y-0.5 hover:border-esa-red/25 hover:shadow-esa-card"
              >
                <div className="mb-2 flex items-center gap-2">
                  <CheckCircle2
                    className="h-4 w-4 text-esa-red transition group-hover:scale-110"
                    aria-hidden
                  />
                  <p className="font-display text-base font-semibold text-esa-navy">
                    {skill.title}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-esa-muted">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-esa-gold/40 bg-gradient-to-br from-esa-gold-soft/70 to-white px-5 py-4">
          <Label tone="muted">Certification information</Label>
          <BodyText className="mt-2 text-base text-esa-navy/80">
            {course.certification}
          </BodyText>
        </div>

        <Button
          href={
            course.ctaHref ??
            `/contact?interest=${encodeURIComponent(course.enquiryInterest ?? course.title)}`
          }
          size="lg"
          className="w-full sm:w-auto"
        >
          {course.ctaLabel}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
      </div>
    </Card>
  );
}
