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

export const SCHOOL_BOARDS = [
  "CBSE",
  "ICSE",
  "State Boards",
] as const;

export const SCHOOL_STUDENT_GETS = [
  {
    title: "Live online Spanish classes",
    text: "Students join live classes from home. Classes are fun, clear, and easy to follow.",
  },
  {
    title: "Friendly expert trainers",
    text: "Teachers explain slowly and clearly, so school students feel comfortable asking questions.",
  },
  {
    title: "Speaking practice every class",
    text: "Students practise speaking Spanish in class—not only reading from books.",
  },
  {
    title: "Fits school boards & age groups",
    text: "We support students from CBSE, ICSE, and State Boards.",
  },
  {
    title: "Culture & real-life use",
    text: "Students learn useful words and a little Spanish culture in a simple way.",
  },
  {
    title: "Step-by-step progress",
    text: "From first words to stronger speaking—clear steps that parents can understand.",
  },
] as const;

export const LANGUAGE_HIGHLIGHTS = {
  Spanish: [
    {
      title: "2nd most spoken native language",
      text: "Spanish is spoken natively by hundreds of millions of people—second only to Mandarin—across Spain and Latin America.",
    },
    {
      title: "Official in 20+ countries",
      text: "A strong choice for travel, hospitality, tourism, international business, and cultural exchange worldwide.",
    },
    {
      title: "Faster speaking confidence",
      text: "Spanish spelling and pronunciation are relatively consistent, which helps beginners start speaking earlier.",
    },
    {
      title: "Growing demand in India",
      text: "Useful for school electives, higher studies, BPOs, tourism, and global workplaces that value Spanish skills.",
    },
  ],
  German: [
    {
      title: "Most spoken language in the EU",
      text: "German is the most widely spoken native language in the European Union and a key language of Europe’s largest economy.",
    },
    {
      title: "Study & career advantage",
      text: "Valued for higher education in Germany, Austria, and Switzerland—plus engineering, research, and skilled pathways.",
    },
    {
      title: "Business & technology edge",
      text: "Useful across automotive, manufacturing, IT, logistics, and companies connected to German-speaking markets.",
    },
    {
      title: "Clear A1–B2 learning path",
      text: "Our German course builds grammar, vocabulary, pronunciation, and speaking step by step with live practice.",
    },
  ],
} as const;

/** Short eye-catching lines shown next to flags on course pages */
export const LANGUAGE_ADDONS = {
  Spanish: [
    "Spoken across Spain & Latin America",
    "Great for travel, career & culture",
    "Beginner-friendly pronunciation",
    "Clear A1–B2 levels",
  ],
  German: [
    "Key language of Europe’s largest economy",
    "Strong for study abroad & careers",
    "Useful in engineering, IT & business",
    "Clear A1–B2 certificate path",
  ],
} as const;

/** Highlight chips for the school program hero (no A1–B2 level boxes) */
export const SCHOOL_HERO_CHIPS = [
  {
    label: "Live online tuition",
    hint: "Interactive classes",
  },
  {
    label: "All major boards",
    hint: "CBSE · ICSE · State",
  },
  {
    label: "Speaking-focused",
    hint: "Confidence in class",
  },
  {
    label: "Ages 5–16 · Up to Class 10",
    hint: "School-friendly pace",
  },
] as const;

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
      "A structured Spanish pathway designed to take you from foundational skills toward confident communication from A1 to B2.",
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
    image: "/images/spanish-certificate-banner.jpg",
    imageAlt: "Learn Spanish — speak, connect, and explore with Easy Spanish Academy",
    ctaLabel: "View Course",
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
    levels: "3-month intensive",
    levelList: ["Speaking", "Grammar", "Business", "Travel"],
    levelDetails: SPANISH_LEVELS,
    overview:
      "A focused 3-month Spanish course for professional travellers—built around speaking, grammar, business use, and travel conversations.",
    introduction:
      "The Spanish Crash Course is designed as a 3-month intensive path for professionals and travellers who need practical Spanish quickly. We emphasise speaking practice and clear grammatical rules so you can communicate for business, travel, and everyday situations with confidence.",
    whoFor:
      "Professionals and travellers who need Spanish in about 3 months for work trips, client meetings, or overseas travel—and can commit to regular practice.",
    outcomes: [
      "Speak more confidently in everyday and professional situations",
      "Apply clear grammatical rules in real conversations",
      "Use Spanish for business meetings, emails, and workplace talk",
      "Handle travel situations—airports, hotels, directions, and dining",
    ],
    benefits: [
      "Speaking-first intensive practice",
      "Clear focus on grammatical rules",
      "Business and workplace Spanish",
      "Travel and real-life conversation skills",
      "High-frequency vocabulary you can use fast",
      "Faster momentum with guided live classes",
    ],
    skills: CORE_TOPIC_AREAS,
    topics: [
      "Speaking practice in every class",
      "Grammatical rules made simple and usable",
      "Business and workplace Spanish",
      "Travel phrases and real-life situations",
      "High-frequency vocabulary sets",
      "Listening and response drills",
    ],
    topicDetails: [
      {
        title: "Speaking Focus",
        description:
          "Every class prioritises speaking so you build confidence to talk, ask, and reply clearly.",
      },
      {
        title: "Grammatical Rules",
        description:
          "Learn the grammar you need for accurate sentences—explained simply and practised in speech.",
      },
      {
        title: "Business Purpose",
        description:
          "Practise useful Spanish for meetings, introductions, emails, and professional conversations.",
      },
      {
        title: "Travelling Spanish",
        description:
          "Master practical phrases for airports, hotels, transport, dining, and asking for help.",
      },
      {
        title: "Vocabulary Momentum",
        description: "Build high-frequency word banks you can use immediately at work and abroad.",
      },
      {
        title: "Guided Progress",
        description: "Stay on track with clear goals across an intensive A1→B2 pathway.",
      },
    ],
    certification:
      "Contact us for details on schedules, formats, and how this intensive pathway fits your goals.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Traveller exploring a city—Spanish for business and travel",
    ctaLabel: "View Course",
    enquiryInterest: "Spanish Crash Course",
    faq: courseFaq("Spanish", "Spanish Crash Course"),
  },
  {
    id: "school",
    slug: "school-course",
    language: "Spanish",
    flag: "ES",
    title: "School Orientation Program",
    shortTitle: "School Orientation",
    levels: "Beginner → Advanced",
    levelList: ["A1", "A2", "B1", "B2"],
    levelDetails: SPANISH_LEVELS,
    overview:
      "Simple, live Spanish classes for school students. Parents can book a free demo to see how their child learns and speaks in class.",
    introduction:
      "In a free demo, your child can meet the teacher, learn first Spanish words, and try speaking in a friendly class. Then you can decide if this program is the right fit.",
    whoFor:
      "School students and parents who want clear, live Spanish classes that fit school life.",
    audienceNote: "Learn Spanish. Speak with confidence. Grow with every class.",
    outcomes: [
      "Live online classes made for school students",
      "Learn first words and start speaking early",
      "Clear steps from beginner to higher levels",
      "Helpful support for parents after the free demo",
    ],
    benefits: [
      "Live & interactive Spanish classes",
      "Expert language trainers",
      "Speaking & pronunciation practice",
      "School-focused curriculum",
      "Introduction to Spanish culture & global opportunities",
      "Structured learning from beginner to advanced levels",
    ],
    skills: CORE_TOPIC_AREAS,
    topics: [
      "Live interactive Spanish classes",
      "Speaking and pronunciation practice",
      "School-focused curriculum support",
      "Age-appropriate learning activities",
      "Culture and conversation starters",
      "Clear progress from beginner levels",
    ],
    topicDetails: [
      {
        title: "Live Online Classes",
        description:
          "Students learn live with a teacher—easy to join from home on Zoom or Google Meet.",
      },
      {
        title: "Speaking Practice",
        description:
          "Every class includes speaking, so students gain confidence to say Spanish words out loud.",
      },
      {
        title: "Friendly Teachers",
        description:
          "Trainers teach school students with patience and clear examples.",
      },
      {
        title: "School Board Friendly",
        description:
          "Suitable for CBSE, ICSE, and State Boards. Online and offline home tuition is also available.",
      },
      {
        title: "Culture & Daily Use",
        description:
          "Students learn useful everyday Spanish and a little about Spanish culture.",
      },
      {
        title: "Clear Progress",
        description:
          "Simple level steps so parents and students know what comes next.",
      },
    ],
    certification:
      "Book a free demo for your child. See the class, ask questions, and start with confidence.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "School students learning together in a bright classroom",
    ctaLabel: "View Program",
    enquiryInterest: "Spanish Classes for School Students",
    faq: [
      {
        question: "What is the School Orientation Program?",
        answer:
          "It is a live Spanish class program for school students. Classes are simple, interactive, and focused on speaking. Parents can book a free demo first.",
      },
      {
        question: "Which school boards do you support?",
        answer:
          "We support students from CBSE, ICSE, and State Boards. Spanish language online and offline home tuition is also available.",
      },
      {
        question: "What do students get in this program?",
        answer:
          "Live online classes, friendly trainers, speaking practice, school-friendly learning, and clear progress from beginner levels.",
      },
      {
        question: "Do you provide Spanish classes for school students?",
        answer:
          "Yes. Easy Spanish Academy offers live Spanish classes for school students. Book a free demo to see how it works.",
      },
      {
        question: "How can I book a free demo?",
        answer:
          "Use Book a Demo, message us on WhatsApp, or contact us. Share your child’s class, board, and goals—we will help you start.",
      },
    ],
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
    image: "/images/german-course-banner.jpg",
    imageAlt: "Learn German — speak, study, work, and settle with Easy Spanish Academy",
    ctaLabel: "View Course",
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
      "Call +91 9971-627-900, email easyspanishacademy01@gmail.com, or message us on WhatsApp. Visit us at C1, Madhuban Chowk, Pitampura, New Delhi - 110034, or use the enquiry form on our Contact page.",
  },
] as const;
