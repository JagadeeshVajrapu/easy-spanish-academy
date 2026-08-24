import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { GERMAN_COURSES, SPANISH_COURSES, courseHref } from "@/lib/course-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/why-choose-us",
    "/courses",
    "/courses/spanish",
    "/courses/german/certificate-diploma",
    "/book-demo",
    "/blog",
    "/contact",
    "/privacy",
  ];

  const courseRoutes = [...SPANISH_COURSES, ...GERMAN_COURSES].map((course) =>
    courseHref(course),
  );

  return [...staticRoutes, ...courseRoutes].map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
