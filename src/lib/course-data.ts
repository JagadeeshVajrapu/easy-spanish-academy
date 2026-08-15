export type SkillFocus = {
  title: string;
  description: string;
};

export type CourseProgram = {
  id: string;
  title: string;
  levels: string;
  overview: string;
  whoFor?: string;
  audienceNote?: string;
  outcomes: string[];
  skills: SkillFocus[];
  certification: string;
  ctaLabel: string;
  ctaHref?: string;
  enquiryInterest?: string;
};

export const CEFR_LEVELS = ["A1", "A2", "B1", "B2"] as const;

export const SPANISH_SKILLS: SkillFocus[] = [
  {
    title: "Speaking",
    description: "Build confidence for everyday conversations and clear expression.",
  },
  {
    title: "Grammar",
    description: "Learn structures step by step so you can form accurate sentences.",
  },
  {
    title: "Vocabulary",
    description: "Expand practical word banks you can use in real situations.",
  },
  {
    title: "Listening",
    description: "Train your ear for natural Spanish rhythm and comprehension.",
  },
  {
    title: "Reading",
    description: "Understand texts with growing independence and clarity.",
  },
  {
    title: "Writing",
    description: "Practice writing for messages, school work, and everyday needs.",
  },
];

export const GERMAN_SKILLS: SkillFocus[] = [
  {
    title: "Speaking",
    description: "Develop clearer pronunciation and practical spoken German.",
  },
  {
    title: "Grammar",
    description: "Understand patterns that make German feel more approachable.",
  },
  {
    title: "Vocabulary",
    description: "Grow useful vocabulary for study, daily life, and communication.",
  },
  {
    title: "Listening",
    description: "Improve comprehension of spoken German in guided practice.",
  },
  {
    title: "Reading",
    description: "Build reading confidence across level-appropriate materials.",
  },
  {
    title: "Writing",
    description: "Strengthen written expression with structured practice.",
  },
];

export const SPANISH_COURSES: CourseProgram[] = [
  {
    id: "certificate",
    title: "Certificate Diploma",
    levels: "A1, A2, B1, B2",
    overview:
      "A structured Spanish pathway designed to take you from foundational skills toward confident communication. Lessons balance clarity, practice, and steady progression across CEFR levels.",
    whoFor:
      "Ideal for beginners and developing learners who want a complete, level-based Spanish journey with speaking at the center.",
    outcomes: [
      "Communicate more clearly in everyday Spanish situations",
      "Strengthen grammar and vocabulary with purpose",
      "Improve listening and reading comprehension",
      "Build writing habits that support school, work, or personal goals",
      "Progress through A1 to B2 with structured guidance",
    ],
    skills: SPANISH_SKILLS,
    certification:
      "This pathway is oriented toward certificate / diploma learning. Contact us for details on current certification information and course options.",
    ctaLabel: "Enquire About Certificate Course",
    enquiryInterest: "Spanish Certificate / Diploma Course",
  },
  {
    id: "crash",
    title: "Crash Course",
    levels: "A1 → B2",
    overview:
      "An intensive Spanish pathway for learners who want focused progress. The crash course emphasizes efficient learning, active practice, and clear milestones from A1 toward B2.",
    whoFor:
      "Best for motivated learners who prefer a concentrated learning rhythm and want to move through levels with strong practice habits.",
    outcomes: [
      "Accelerate foundational and intermediate Spanish skills",
      "Practice speaking more frequently within a focused pathway",
      "Reinforce grammar and vocabulary through intensive review",
      "Build momentum across listening, reading, and writing",
    ],
    skills: SPANISH_SKILLS,
    certification:
      "Contact us for details on how the crash course maps to levels and any certificate-related options.",
    ctaLabel: "Enquire About Crash Course",
    enquiryInterest: "Spanish Crash Course",
  },
  {
    id: "school",
    title: "School-Oriented Course",
    levels: "A1 – B2",
    overview:
      "A Spanish program designed for school students who need structured support, clearer understanding, and stronger communication skills alongside their studies.",
    whoFor:
      "Created for school students aged 5 to 16, covering learners up to Class 10. Ideal for building Spanish confidence alongside school learning.",
    audienceNote: "Ages 5–16 · Up to Class 10",
    outcomes: [
      "Strengthen classroom confidence in Spanish",
      "Improve speaking and comprehension with guided practice",
      "Build vocabulary and grammar needed for school learning",
      "Develop steadier reading and writing habits",
    ],
    skills: SPANISH_SKILLS,
    certification:
      "Contact us for details on school-program structure and any related certification information.",
    ctaLabel: "Ask About School Program",
    enquiryInterest: "Spanish School-Oriented Course",
  },
];

export const GERMAN_COURSES: CourseProgram[] = [
  {
    id: "certificate",
    title: "Certificate Diploma",
    levels: "A1 → A2 → B1 → B2",
    overview:
      "A clear German learning pathway from beginner foundations to more confident communication. The course focuses on structured progression, practical usage, and skills you can apply in real life.",
    whoFor:
      "Suitable for beginners and learners returning to German who want a complete A1–B2 certificate / diploma oriented pathway.",
    outcomes: [
      "Speak German with greater clarity and confidence",
      "Understand essential grammar patterns step by step",
      "Expand practical vocabulary for everyday use",
      "Improve listening, reading, and writing skills",
      "Progress through A1, A2, B1, and B2 with guided support",
    ],
    skills: GERMAN_SKILLS,
    certification:
      "This pathway is oriented toward certificate / diploma learning. Contact us for details on current certification information and course options.",
    ctaLabel: "Enquire About German Course",
    enquiryInterest: "German Certificate / Diploma Course",
  },
];

export const SPANISH_COURSE_FAQS = [
  {
    question: "Which Spanish levels do you offer?",
    answer:
      "Spanish courses cover A1, A2, B1, and B2. Contact us for details on the best starting level for your goals.",
  },
  {
    question: "What is the difference between the Certificate and Crash Course?",
    answer:
      "The Certificate / Diploma Course is a structured full pathway across levels. The Crash Course is an intensive option for focused progress. Contact us for details on which fits you best.",
  },
  {
    question: "Is there a school-oriented Spanish program?",
    answer:
      "Yes. Our School-Oriented Course supports school students aged 5 to 16, up to Class 10. Contact us for current program details.",
  },
  {
    question: "How do I enquire about Spanish courses?",
    answer:
      "Call 9971-62-7900, email easyspanishacademy01@gmail.com, message us on WhatsApp, or use the Contact page.",
  },
];

export const GERMAN_COURSE_FAQS = [
  {
    question: "Which German levels do you offer?",
    answer:
      "The German Certificate / Diploma Course covers A1, A2, B1, and B2. Contact us for details on placement and current options.",
  },
  {
    question: "Is the German course beginner friendly?",
    answer:
      "Yes. The pathway is designed to support beginners while remaining useful for learners building toward intermediate confidence.",
  },
  {
    question: "Do you provide certification information?",
    answer:
      "The course is certificate / diploma oriented. Contact us for details on current certification information.",
  },
  {
    question: "How do I enquire about German courses?",
    answer:
      "Call 9971-62-7900, email easyspanishacademy01@gmail.com, message us on WhatsApp, or use the Contact page.",
  },
];
