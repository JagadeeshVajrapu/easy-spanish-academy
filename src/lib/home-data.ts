export type FeaturedCourse = {
  id: string;
  language: "Spanish" | "German";
  flag: "ES" | "DE";
  title: string;
  level: string;
  description: string;
  focus: string;
  href: string;
  interest: string;
};

export const FEATURED_COURSES: FeaturedCourse[] = [
  {
    id: "es-certificate",
    language: "Spanish",
    flag: "ES",
    title: "Certificate & Diploma",
    level: "A1 – B2",
    description:
      "A structured Spanish pathway designed to build strong foundations and steady progress across levels.",
    focus: "Grammar, vocabulary, listening, and guided speaking practice",
    href: "/spanish-courses#certificate",
    interest: "Spanish Certificate / Diploma Course",
  },
  {
    id: "es-crash",
    language: "Spanish",
    flag: "ES",
    title: "Crash Course",
    level: "A1 – B2",
    description:
      "An intensive Spanish option for learners who want focused progress with clear learning goals.",
    focus: "Accelerated practice and practical communication",
    href: "/spanish-courses#crash",
    interest: "Spanish Crash Course",
  },
  {
    id: "es-school",
    language: "Spanish",
    flag: "ES",
    title: "School Orientation Program",
    level: "Beginner – Advanced",
    description:
      "Interactive Spanish programs for school students across major boards—learn Spanish, speak with confidence, go global.",
    focus: "School orientation, speaking practice, and curriculum-focused learning",
    href: "/courses/spanish/school-course",
    interest: "School Orientation Program",
  },
  {
    id: "de-certificate",
    language: "German",
    flag: "DE",
    title: "Certificate & Diploma",
    level: "A1 – B2",
    description:
      "A clear German learning path from beginner foundations toward more confident communication.",
    focus: "Structured progression with pronunciation and speaking support",
    href: "/courses/german/certificate-diploma",
    interest: "German Certificate / Diploma Course",
  },
];

export const HOME_FAQ_PREVIEW = [
  {
    question: "What languages do you teach?",
    answer:
      "We teach Spanish and German. Both programs are designed to help you learn with structure and practice real communication.",
  },
  {
    question: "What levels are available?",
    answer:
      "Courses are organized from A1 to B2 so you can begin at the right stage. When you enquire, share your experience and goals and we will help you choose a starting point.",
  },
  {
    question: "Are classes online?",
    answer:
      "Yes—online learning is available. Formats and schedules can vary, so contact us for what is currently open.",
  },
  {
    question: "Do you provide certificates?",
    answer:
      "We offer certificate and diploma oriented course pathways for Spanish and German. Contact us for what certification options currently include.",
  },
  {
    question: "How can I contact the academy?",
    answer:
      "Call +91 9971-627-900, email easyspanishacademy01@gmail.com, or message us on WhatsApp. Visit us at C1, Madhuban Chowk, Pitampura, New Delhi - 110034, or use the enquiry form on our Contact page.",
  },
] as const;
