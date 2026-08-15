import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/HomeHero";
import {
  HomeChooseLanguage,
  HomeContactStrip,
  HomeFaqPreview,
  HomeFeaturedCourses,
  HomeFinalCta,
  HomeHowItWorks,
  HomeSpeakingSection,
  HomeTrustStrip,
  HomeWhyUs,
} from "@/components/sections/HomeSections";
import { ReviewsMarquee } from "@/components/sections/ReviewsMarquee";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} | Learn Spanish & German`,
    description: SITE.description,
    url: SITE.url,
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeTrustStrip />
      <HomeChooseLanguage />
      <HomeFeaturedCourses />
      <HomeWhyUs />
      <HomeSpeakingSection />
      <HomeHowItWorks />
      <ReviewsMarquee />
      <HomeFaqPreview />
      <HomeFinalCta />
      <HomeContactStrip />
    </>
  );
}
