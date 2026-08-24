import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseDetailView } from "@/components/course/CourseDetailView";
import { getCourseByPath } from "@/lib/course-data";
import { SITE } from "@/lib/constants";

type PageProps = {
  params: Promise<{ language: string; slug: string }>;
};

export async function generateStaticParams() {
  return [
    { language: "spanish", slug: "certificate-diploma" },
    { language: "spanish", slug: "crash-course" },
    { language: "spanish", slug: "school-course" },
    { language: "german", slug: "certificate-diploma" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { language, slug } = await params;
  const course = getCourseByPath(language, slug);
  if (!course) return { title: "Course" };
  return {
    title: course.title,
    description: course.overview,
    openGraph: {
      title: `${course.title} | ${SITE.name}`,
      description: course.overview,
      url: `${SITE.url}/courses/${language}/${slug}`,
    },
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { language, slug } = await params;
  const course = getCourseByPath(language, slug);
  if (!course) notFound();

  // German has no listing page — link breadcrumb to the A1–B2 course directly.
  const languageHref =
    language === "german"
      ? "/courses/german/certificate-diploma"
      : `/courses/${language}`;

  return (
    <CourseDetailView
      course={course}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: course.language, href: languageHref },
        { label: course.shortTitle },
      ]}
    />
  );
}
