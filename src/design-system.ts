/**
 * Design system overview for Easy Spanish Academy.
 *
 * Tokens:    src/lib/design-tokens.ts + src/app/globals.css (:root)
 * Typography: src/components/ui/Typography.tsx + .text-hero/.text-section/... utilities
 * Components: import shared pieces from @/components/ui or course modules from @/components/course
 */

export * from "@/components/ui/index";
export { Navbar } from "@/components/layout/Navbar";
export { Footer } from "@/components/layout/Footer";
export { CTABanner } from "@/components/sections/CTABanner";
export { ContactForm } from "@/components/sections/ContactForm";
export { BlogCard } from "@/components/sections/BlogCard";
export { PageHero } from "@/components/sections/PageHero";
export {
  CourseHero,
  CourseLevelProgress,
  CourseCard,
  LearningOutcomes,
  CourseFAQ,
  CourseCTA,
} from "@/components/course";
export { colors, motion, radii, shadows, typography } from "@/lib/design-tokens";
