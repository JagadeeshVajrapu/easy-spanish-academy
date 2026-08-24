export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Spanish Language" | "German Language" | "Learning Tips";
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  /** SEO / content keywords for the guide */
  keywords: string[];
  /** Editable body outline — replace with full article content later */
  outline: string[];
  status: "draft-template";
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "spanish-vs-german-which-language-2026",
    title: "Spanish vs German: Which Language Should You Learn in 2026?",
    excerpt:
      "Compare Spanish and German for career, travel, and study goals—so you can choose the right online foreign language course in India.",
    category: "Learning Tips",
    date: "2026-03-15",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Language books suggesting a choice between Spanish and German",
    keywords: [
      "Spanish vs German",
      "learn Spanish online",
      "learn German online",
      "foreign language courses in India",
    ],
    outline: [
      "Spanish vs German: how to decide based on your goals",
      "Career, travel, and study abroad opportunities for each language",
      "Learning feel: pronunciation, early speaking wins, and consistency",
      "Why online Spanish and German classes work well for Indian learners",
      "How Easy Spanish Academy helps you choose and start confidently",
    ],
    status: "draft-template",
  },
  {
    slug: "why-learning-spanish-boosts-career-and-travel",
    title:
      "Why Learning Spanish Can Boost Your Career and Travel Opportunities",
    excerpt:
      "See how a Spanish language course can open career paths, travel ease, and global connections—especially with Spanish classes online in India.",
    category: "Spanish Language",
    date: "2026-03-10",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Travel and career inspiration for Spanish learners",
    keywords: [
      "Spanish language course",
      "Spanish classes online",
      "learn Spanish in India",
      "Spanish language benefits",
    ],
    outline: [
      "Spanish language benefits for careers and global roles",
      "Travel opportunities across Spanish-speaking countries",
      "Why learn Spanish in India through structured online classes",
      "Practical skills you build beyond grammar memorization",
      "How to start with a Spanish language course at Easy Spanish Academy",
    ],
    status: "draft-template",
  },
  {
    slug: "german-a1-for-beginners-complete-guide",
    title:
      "German A1 for Beginners: Complete Guide to Starting Your German Learning Journey",
    excerpt:
      "A clear German A1 course overview for beginners—what to expect, how online German classes work, and how to start learning German online in India.",
    category: "German Language",
    date: "2026-03-05",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "European streetscape suggesting German language learning",
    keywords: [
      "German A1 course",
      "German classes online",
      "learn German online",
      "German language course India",
    ],
    outline: [
      "What a German A1 course covers for true beginners",
      "Pronunciation, vocabulary, and basic conversation foundations",
      "How German classes online keep learning flexible and consistent",
      "Study tips for a German language course in India",
      "Next steps after A1 on the A2–B2 pathway",
    ],
    status: "draft-template",
  },
  {
    slug: "best-online-spanish-german-classes-india",
    title:
      "Best Online Spanish & German Classes in India: What Should You Look For?",
    excerpt:
      "A practical checklist for choosing online Spanish and German classes in India—live teaching, materials, batches, and real learner support.",
    category: "Learning Tips",
    date: "2026-02-28",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Students learning languages online together",
    keywords: [
      "online Spanish classes India",
      "online German classes India",
      "foreign language classes online",
      "language academy India",
    ],
    outline: [
      "What makes strong online Spanish classes in India",
      "What to expect from quality online German classes",
      "Live sessions, recordings, study PDFs, and trainer support",
      "Weekday and weekend flexibility for foreign language classes online",
      "How to evaluate a language academy in India before you enrol",
    ],
    status: "draft-template",
  },
  {
    slug: "why-learn-foreign-language-online",
    title:
      "Why Learn a Foreign Language Online? Benefits of Online Spanish & German Classes",
    excerpt:
      "Discover the benefits of online language classes—flexible timing, live practice, and structured Spanish and German courses online across India.",
    category: "Learning Tips",
    date: "2026-02-20",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Laptop and notebook for online language learning",
    keywords: [
      "online language classes",
      "Spanish classes online",
      "German classes online",
      "foreign language courses online India",
    ],
    outline: [
      "Why online language classes suit students and working professionals",
      "Benefits of Spanish classes online and German classes online",
      "Live Zoom/Google Meet learning with doubt-clearing support",
      "Access to recordings, study PDFs, and guided practice",
      "How foreign language courses online in India fit around your schedule",
    ],
    status: "draft-template",
  },
];
