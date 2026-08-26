import { redirect } from "next/navigation";

type Props = { params: Promise<{ language: string }> };

/** Language listing pages removed — Spanish & German go to the main courses hub / certificate. */
export default async function LanguageCoursesPage({ params }: Props) {
  const { language } = await params;
  if (language === "german") {
    redirect("/courses/german/certificate-diploma");
  }
  redirect("/courses");
}
