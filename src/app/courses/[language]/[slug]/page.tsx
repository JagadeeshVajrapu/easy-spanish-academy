import type { Metadata } from "next";
import Link from "next/link";
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

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="border-b border-esa-border bg-white"
      >
        <div className="container-esa flex flex-wrap items-center gap-1.5 py-3 text-sm text-esa-muted">
          <Link href="/" className="hover:text-esa-red focus-esa">
            Home
          </Link>
          <span aria-hidden>/</span>
          <Link href="/courses" className="hover:text-esa-red focus-esa">
            Courses
          </Link>
          <span aria-hidden>/</span>
          <Link
            href={`/courses/${language}`}
            className="hover:text-esa-red focus-esa"
          >
            {course.language}
          </Link>
          <span aria-hidden>/</span>
          <span className="font-medium text-esa-navy">{course.shortTitle}</span>
        </div>
      </nav>
      <CourseDetailView course={course} />
    </>
  );
}
