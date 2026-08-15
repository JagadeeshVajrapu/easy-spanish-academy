export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Spanish" | "German" | "Learning Tips";
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  /** Editable body outline — replace with full article content later */
  outline: string[];
  status: "draft-template";
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-start-learning-spanish",
    title: "How to Start Learning Spanish",
    excerpt:
      "A practical starter guide for beginners who want clarity, confidence, and a simple first week of Spanish practice.",
    category: "Spanish",
    date: "2026-03-01",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Notebook and study materials for starting Spanish",
    outline: [
      "Why Spanish is a strong language to begin with",
      "Set one clear beginner goal for your first week",
      "Build a short daily speaking and listening habit",
      "What to practise first: greetings, sounds, and useful phrases",
      "When to join a structured course for faster progress",
    ],
    status: "draft-template",
  },
  {
    slug: "spanish-a1-beginner-guide",
    title: "Spanish A1 Beginner Guide",
    excerpt:
      "What A1 Spanish looks like, what you should focus on, and how to build confidence from the first lessons.",
    category: "Spanish",
    date: "2026-02-20",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Student studying beginner Spanish notes",
    outline: [
      "What A1 Spanish means in practical terms",
      "Core skills: speaking, listening, reading, and writing at A1",
      "Useful beginner topics and vocabulary themes",
      "Common challenges and how to stay consistent",
      "How Easy Spanish Academy supports A1 learners",
    ],
    status: "draft-template",
  },
  {
    slug: "spanish-vs-german-which-language",
    title: "Spanish vs German: Which Language Should You Learn?",
    excerpt:
      "A clear comparison to help you choose based on goals, interests, and how you like to learn—not hype.",
    category: "Learning Tips",
    date: "2026-02-10",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Language books suggesting a choice between Spanish and German",
    outline: [
      "Compare goals: travel, study, career, culture, or connection",
      "Learning feel: rhythm, pronunciation, and early speaking wins",
      "Where each language can take you",
      "Can you learn both over time?",
      "How to decide with guidance from the academy",
    ],
    status: "draft-template",
  },
  {
    slug: "common-spanish-words-for-beginners",
    title: "Common Spanish Words for Beginners",
    excerpt:
      "High-value beginner words and phrases that help you start communicating sooner—with room to expand the list later.",
    category: "Spanish",
    date: "2026-01-28",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Travel journal suggesting useful beginner Spanish words",
    outline: [
      "Greetings and polite expressions",
      "Everyday nouns and verbs beginners use most",
      "Question words that unlock conversations",
      "How to practise new words by speaking them aloud",
      "Editable word list section for future content updates",
    ],
    status: "draft-template",
  },
  {
    slug: "german-a1-beginner-guide",
    title: "German A1 Beginner Guide",
    excerpt:
      "A friendly overview of German A1 foundations—pronunciation, basic structures, and practical first steps.",
    category: "German",
    date: "2026-01-15",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "European architecture suggesting German language learning",
    outline: [
      "What to expect at German A1",
      "Sounds and pronunciation habits to start early",
      "Core grammar ideas without overwhelm",
      "Listening and speaking practice for beginners",
      "How a structured A1–B2 pathway supports long-term growth",
    ],
    status: "draft-template",
  },
  {
    slug: "why-speaking-practice-matters",
    title: "Why Speaking Practice Matters",
    excerpt:
      "Why conversation practice accelerates confidence—and how to make speaking a regular part of your learning journey.",
    category: "Learning Tips",
    date: "2026-01-05",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Learners practising conversation together",
    outline: [
      "The gap between knowing words and using them",
      "How speaking improves listening and memory",
      "Simple speaking drills you can repeat daily",
      "Why guided practice feels safer than practising alone",
      "How Easy Spanish Academy keeps speaking central",
    ],
    status: "draft-template",
  },
];
