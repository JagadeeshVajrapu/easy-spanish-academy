export type SkillFocus = {
  title: string;
  description: string;
};

export type CourseLevelDetail = {
  code: string;
  title: string;
  description: string;
  focus: string[];
};

export type CourseProgram = {
  id: string;
  slug: string;
  language: "Spanish" | "German";
  flag: "ES" | "DE";
  title: string;
  shortTitle: string;
  levels: string;
  levelList: string[];
  levelDetails: CourseLevelDetail[];
  overview: string;
  introduction: string;
  whoFor?: string;
  audienceNote?: string;
  outcomes: string[];
  benefits: string[];
  skills: SkillFocus[];
  topics: string[];
  topicDetails: SkillFocus[];
  certification: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  enquiryInterest: string;
  faq: { question: string; answer: string }[];
};

export const CEFR_LEVELS = ["A1", "A2", "B1", "B2"] as const;

/** Core skill topics shown on certificate / diploma style courses */
export const CORE_TOPIC_AREAS: SkillFocus[] = [
  {
    title: "Grammar",
    description: "Learn structures step by step so you can form accurate sentences.",
  },
  {
    title: "Vocabulary",
    description: "Expand practical word banks you can use in real situations.",
  },
  {
    title: "Speaking",
    description: "Build confidence for everyday conversations and clear expression.",
  },
  {
    title: "Listening",
    description: "Train your ear for natural rhythm and comprehension.",
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

export const LEARNING_AREAS = CORE_TOPIC_AREAS;

const SPANISH_LEVELS: CourseLevelDetail[] = [
  {
    code: "A1",
    title: "Beginner",
    description:
      "Start with essentials—greetings, everyday phrases, and the foundations of Spanish communication.",
    focus: [
      "Basic greetings and introductions",
      "Everyday vocabulary",
      "Simple present structures",
      "Short reading and listening practice",
    ],
  },
  {
    code: "A2",
    title: "Elementary",
    description:
      "Grow beyond basics into short conversations, clearer sentences, and more useful daily Spanish.",
    focus: [
      "Everyday conversations",
      "Past and present narration basics",
      "Short messages and notes",
      "Listening for key information",
    ],
  },
  {
    code: "B1",
    title: "Intermediate",
    description:
      "Express experiences and opinions with greater independence across speaking, reading, and writing.",
    focus: [
      "Describe experiences and plans",
      "Stronger sentence structures",
      "Practical writing tasks",
      "More confident speaking practice",
    ],
  },
  {
    code: "B2",
    title: "Upper Intermediate",
    description:
      "Communicate with more fluency and accuracy for study, work, travel, and real-life situations.",
    focus: [
      "Extended conversation practice",
      "Clearer written expression",
      "Listening for detail and meaning",
      "Review and progress checkpoints",
    ],
  },
];

const GERMAN_LEVELS: CourseLevelDetail[] = [
  {
    code: "A1",
    title: "Beginner",
    description:
      "Build your first German foundations with clear explanations and guided speaking practice.",
    focus: [
      "Basic greetings and introductions",
      "Everyday vocabulary",
      "Simple present structures",
      "Pronunciation and listening habits",
    ],
  },
  {
    code: "A2",
    title: "Elementary",
    description:
      "Handle everyday conversations and short written communication with growing confidence.",
    focus: [
      "Everyday conversations",
      "Past tense narration basics",
      "Short emails and messages",
      "Listening comprehension",
    ],
  },
  {
    code: "B1",
    title: "Intermediate",
    description:
      "Express opinions, describe experiences, and prepare for more independent German use.",
    focus: [
      "Express opinions and experiences",
      "Stronger sentence structures",
      "Formal and informal writing practice",
      "Speaking confidence building",
    ],
  },
  {
    code: "B2",
    title: "Upper Intermediate",
    description:
      "Develop clearer fluency for study, work, and real communication needs.",
    focus: [
      "Extended speaking practice",
      "Detailed listening and reading",
      "Clear written expression",
      "Progress checkpoints across skills",
    ],
  },
];

function courseFaq(language: string, title: string) {
  return [
    {
      question: `Who is the ${title} for?`,
      answer: `This program is designed for learners who want structured ${language} progress with clear levels and practical communication practice. Share your experience when you enquire and we will help you choose a starting point.`,
    },
    {
      question: "Which levels are covered?",
      answer:
        "Pathways are organized from A1 to B2. Your starting level depends on your current skills and goals.",
    },
    {
      question: "Are classes online?",
      answer:
        "Yes—online learning is available. Formats and schedules can vary, so contact us for what is currently open.",
    },
    {
      question: "How can I book a demo?",
      answer:
        "Use Book a Demo or Contact, or message us on WhatsApp. Share your preferred language and goals and we will guide the next step.",
    },
  ];
}

export const SPANISH_COURSES: CourseProgram[] = [
  {
    id: "certificate",
    slug: "certificate-diploma",
    language: "Spanish",
    flag: "ES",
    title: "Spanish Certificate & Diploma Course",
    shortTitle: "Certificate & Diploma",
    levels: "A1 → A2 → B1 → B2",
    levelList: ["A1", "A2", "B1", "B2"],
    levelDetails: SPANISH_LEVELS,
    overview:
      "A structured Spanish pathway designed to take you from foundational skills toward confident communication across CEFR levels.",
    introduction:
      "The Spanish Certificate & Diploma Course gives you a clear learning path from A1 to B2. Lessons balance grammar, vocabulary, and guided practice so you can understand more, speak more clearly, and build lasting communication skills.",
    whoFor:
      "Ideal for beginners and developing learners who want a complete, level-based Spanish journey with speaking at the center.",
    outcomes: [
      "Communicate more clearly in everyday Spanish situations",
      "Strengthen grammar and vocabulary with purpose",
      "Improve listening and reading comprehension",
      "Build writing habits that support school, work, or personal goals",
      "Progress through A1 to B2 with structured guidance",
    ],
    benefits: [
      "Clear A1–B2 level progression",
      "Speaking practice woven into learning",
      "Balanced focus across all core skills",
      "Beginner-friendly structure",
      "Certificate / diploma oriented pathway",
      "Guidance when you enquire and start",
    ],
    skills: CORE_TOPIC_AREAS,
    topics: [
      "Grammar",
      "Vocabulary",
      "Speaking",
      "Listening",
      "Reading",
      "Writing",
    ],
    topicDetails: CORE_TOPIC_AREAS,
    certification:
      "This pathway is oriented toward certificate / diploma learning. Contact us for details on current certification information and course options.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Student studying Spanish notes and materials",
    ctaLabel: "View Topics",
    enquiryInterest: "Spanish Certificate & Diploma Course",
    faq: courseFaq("Spanish", "Spanish Certificate & Diploma Course"),
  },
  {
    id: "crash",
    slug: "crash-course",
    language: "Spanish",
    flag: "ES",
    title: "Spanish Crash Course",
    shortTitle: "Crash Course",
    levels: "A1 → B2",
    levelList: ["A1", "A2", "B1", "B2"],
    levelDetails: SPANISH_LEVELS,
    overview:
      "An intensive Spanish option focused on faster progress, practical communication, and speaking confidence.",
    introduction:
      "The Spanish Crash Course is built for learners who want intensive learning and speaking practice. You move through essential foundations with a clear A1→B2 focus—prioritizing usable communication over slow, passive study.",
    whoFor:
      "Learners who prefer a faster, focused path and can commit to regular practice.",
    outcomes: [
      "Accelerate foundational and intermediate Spanish skills",
      "Prioritize practical speaking and listening",
      "Cover essential grammar and vocabulary efficiently",
      "Build usable communication habits quickly",
    ],
    benefits: [
      "Intensive learning focus",
      "Speaking-first practice",
      "Clear A1→B2 direction",
      "High-frequency vocabulary",
      "Practical grammar for communication",
      "Faster momentum with guided practice",
    ],
    skills: CORE_TOPIC_AREAS,
    topics: [
      "Intensive foundations and essential phrases",
      "High-frequency vocabulary sets",
      "Focused grammar for communication",
      "Intensive speaking practice",
      "Listening drills for real situations",
      "Short writing and reading tasks",
    ],
    topicDetails: [
      {
        title: "Intensive Foundations",
        description: "Cover essential phrases and structures with focused, efficient practice.",
      },
      {
        title: "Speaking Focus",
        description: "Spend more time speaking so confidence grows alongside understanding.",
      },
      {
        title: "Practical Grammar",
        description: "Learn the grammar you need to communicate—clearly and with purpose.",
      },
      {
        title: "Listening & Response",
        description: "Train comprehension and response for everyday situations.",
      },
      {
        title: "Vocabulary Momentum",
        description: "Build high-frequency word banks you can use immediately.",
      },
      {
        title: "Guided Progress",
        description: "Stay on track with clear goals across the A1→B2 pathway.",
      },
    ],
    certification:
      "Contact us for details on schedules, formats, and how this intensive pathway fits your goals.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Learners practicing conversation in a language class",
    ctaLabel: "View Topics",
    enquiryInterest: "Spanish Crash Course",
    faq: courseFaq("Spanish", "Spanish Crash Course"),
  },
  {
    id: "school",
    slug: "school-course",
    language: "Spanish",
    flag: "ES",
    title: "Spanish School-Oriented Course",
    shortTitle: "School-Oriented",
    levels: "A1 → B2",
    levelList: ["A1", "A2", "B1", "B2"],
    levelDetails: SPANISH_LEVELS,
    overview:
      "Spanish support for school students aged 5 to 16 (up to Class 10)—clarity, confidence, and consistent practice aligned with school learning needs.",
    introduction:
      "The Spanish School-Oriented Course supports school students aged 5 to 16 (up to Class 10). Lessons focus on clarity, confidence, and steady practice so young learners can strengthen understanding for classwork while building speaking and communication skills.",
    whoFor: "School students and parents seeking structured Spanish support.",
    audienceNote: "Ages 5–16 · Up to Class 10",
    outcomes: [
      "Strengthen school-aligned Spanish understanding",
      "Build confidence in speaking and listening",
      "Improve reading and writing for classwork",
      "Develop steady practice habits with guidance",
    ],
    benefits: [
      "Designed for school-age learners (5–16)",
      "Support up to Class 10 pathways",
      "Age-appropriate vocabulary and practice",
      "Speaking confidence for class and conversation",
      "Reading and writing for school tasks",
      "Encouraging, structured guidance",
    ],
    skills: CORE_TOPIC_AREAS,
    topics: [
      "Age-appropriate vocabulary and phrases",
      "School-aligned grammar support",
      "Listening and pronunciation practice",
      "Speaking confidence for class and conversation",
      "Reading and writing for school tasks",
      "Regular revision and encouragement",
    ],
    topicDetails: [
      {
        title: "School-Aligned Support",
        description: "Practice that supports classroom understanding and school learning needs.",
      },
      {
        title: "Age-Appropriate Learning",
        description: "Vocabulary, examples, and pacing suited to learners aged 5–16.",
      },
      {
        title: "Speaking Confidence",
        description: "Gentle speaking practice that helps students participate more confidently.",
      },
      {
        title: "Listening & Pronunciation",
        description: "Clear listening work that builds recognition and accurate speech habits.",
      },
      {
        title: "Reading & Writing",
        description: "Support for school-related reading and writing tasks.",
      },
      {
        title: "Steady Revision",
        description: "Regular review so progress feels consistent and encouraging.",
      },
    ],
    certification:
      "Contact us for current school-oriented options, formats, and how we support Class 10 pathways.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Young learners in a friendly classroom setting",
    ctaLabel: "View Topics",
    enquiryInterest: "Spanish School-Oriented Course",
    faq: courseFaq("Spanish", "Spanish School-Oriented Course"),
  },
];

export const GERMAN_COURSES: CourseProgram[] = [
  {
    id: "certificate",
    slug: "certificate-diploma",
    language: "German",
    flag: "DE",
    title: "German Certificate & Diploma Course",
    shortTitle: "Certificate & Diploma",
    levels: "A1 → A2 → B1 → B2",
    levelList: ["A1", "A2", "B1", "B2"],
    levelDetails: GERMAN_LEVELS,
    overview:
      "A clear German learning path from beginner foundations toward more confident communication, with pronunciation support and practical speaking practice.",
    introduction:
      "The German Certificate & Diploma Course follows the same clear visual structure and level pathway as our Spanish certificate program—A1 to B2—with pronunciation support, guided speaking, and steady skill building across grammar, vocabulary, listening, reading, and writing.",
    whoFor:
      "Beginners and developing learners who want structured German progression with guided practice.",
    outcomes: [
      "Build stronger German foundations across levels",
      "Improve pronunciation and speaking confidence",
      "Develop listening and reading skills",
      "Practice writing for everyday and study needs",
    ],
    benefits: [
      "Clear A1–B2 level progression",
      "Pronunciation and speaking support",
      "Balanced focus across core skills",
      "Beginner-friendly structure",
      "Certificate / diploma oriented pathway",
      "Guidance when you enquire and start",
    ],
    skills: CORE_TOPIC_AREAS,
    topics: [
      "Grammar",
      "Vocabulary",
      "Speaking",
      "Listening",
      "Reading",
      "Writing",
    ],
    topicDetails: CORE_TOPIC_AREAS,
    certification:
      "This pathway is oriented toward certificate / diploma learning. Contact us for details on current options.",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "European streetscape reflecting German language learning",
    ctaLabel: "View Topics",
    enquiryInterest: "German Certificate & Diploma Course",
    faq: courseFaq("German", "German Certificate & Diploma Course"),
  },
];

export function getCourseByPath(
  language: string,
  slug: string,
): CourseProgram | undefined {
  const list = language === "german" ? GERMAN_COURSES : SPANISH_COURSES;
  return list.find((course) => course.slug === slug);
}

export function courseHref(course: CourseProgram) {
  const lang = course.language === "German" ? "german" : "spanish";
  return `/courses/${lang}/${course.slug}`;
}

export function courseTopicsHref(course: CourseProgram) {
  return `${courseHref(course)}#topics`;
}

export const ALL_COURSES = [...SPANISH_COURSES, ...GERMAN_COURSES];

export const HOME_FAQ = [
  {
    question: "Which languages do you teach?",
    answer:
      "We teach Spanish and German. Both programs are designed to help you learn with structure and practice real communication.",
  },
  {
    question: "Which levels are available?",
    answer:
      "Courses are organized from A1 to B2 so you can begin at the right stage. When you enquire or book a demo, share your experience and goals and we will help you choose a starting point.",
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
    question: "How can I book a demo?",
    answer:
      "Use the Book a Demo page or Contact form, or message us on WhatsApp. Share your preferred language and goals and we will guide the next step.",
  },
  {
    question: "How can I contact the academy?",
    answer:
      "Call +91 99716 27900, email easyspanishacademy01@gmail.com, or message us on WhatsApp. You can also use the enquiry form on our Contact page.",
  },
] as const;
