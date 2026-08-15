export type LearnerReview = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: 5 | 4;
};

/** Sample learner-style reviews for the moving strip (illustrative UX content). */
export const LEARNER_REVIEWS: LearnerReview[] = [
  {
    id: "r1",
    name: "Ananya Sharma",
    role: "Spanish A1 learner",
    quote:
      "Classes feel clear and friendly. I finally started speaking simple Spanish without freezing up.",
    rating: 5,
  },
  {
    id: "r2",
    name: "Rahul Mehta",
    role: "German beginner",
    quote:
      "The lessons are structured and practical. Pronunciation tips helped me a lot in the first weeks.",
    rating: 5,
  },
  {
    id: "r3",
    name: "Priya Nair",
    role: "School program parent",
    quote:
      "My daughter’s confidence in Spanish class improved. The teachers explain patiently and keep practice consistent.",
    rating: 5,
  },
  {
    id: "r4",
    name: "Vikram Singh",
    role: "Spanish crash course",
    quote:
      "Focused practice every session. I could already use everyday phrases for travel within a short time.",
    rating: 5,
  },
  {
    id: "r5",
    name: "Sneha Reddy",
    role: "Working professional",
    quote:
      "Online timings worked with my job. Speaking practice is the best part — not just grammar drills.",
    rating: 5,
  },
  {
    id: "r6",
    name: "Arjun Patel",
    role: "German A1",
    quote:
      "Very supportive teaching style. I always know what to revise before the next class.",
    rating: 4,
  },
  {
    id: "r7",
    name: "Meera Kapoor",
    role: "Spanish certificate pathway",
    quote:
      "From greetings to short conversations — steady progress. The academy feels professional and warm.",
    rating: 5,
  },
  {
    id: "r8",
    name: "Karan Joshi",
    role: "Adult learner",
    quote:
      "I tried apps before, but live guidance made a real difference. Highly recommend for beginners.",
    rating: 5,
  },
];
