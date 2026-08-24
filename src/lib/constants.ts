export const SITE = {
  name: "Easy Spanish Academy",
  shortName: "ESA",
  tagline: "Learn Today, Speak Tomorrow, Connect Forever",
  instituteTagline: "Online Spanish and German Language Institute",
  description:
    "Learn Spanish and German online with structured A1 to B2 certificate courses and school-oriented programs designed to build speaking confidence.",
  phoneDisplay: "+91 9971-627-900",
  phoneHref: "tel:+919971627900",
  email: "easyspanishacademy01@gmail.com",
  emailHref: "mailto:easyspanishacademy01@gmail.com",
  whatsappHref: "https://wa.me/919971627900",
  whatsappMessage:
    "Hello! I would like to book a demo / enquire about language courses at Easy Spanish Academy.",
  youtubeHref: "https://www.youtube.com/@easyspanishacademy.official",
  instagramHref: "https://www.instagram.com/easyspanishacademy.official/",
  facebookHref: "https://www.facebook.com/share/17SLEpaXeR/",
  url: "https://easyspanishacademy.com",
  addressLine1: "C1, Madhuban Chowk, Pitampura",
  addressLine2: "New Delhi - 110034",
  addressDisplay: "C1, Madhuban Chowk, Pitampura, New Delhi - 110034",
  addressMapsHref:
    "https://www.google.com/maps/search/?api=1&query=C1+Madhuban+Chowk+Pitampura+New+Delhi+110034",
} as const;

/** Regions where learners can connect with Easy Spanish Academy (online). */
export const ACADEMY_LOCATIONS = [
  "Uttar Pradesh",
  "Delhi NCR",
  "Haryana",
  "Assam",
  "Punjab",
  "Rajasthan",
  "Gujarat",
  "Madhya Pradesh",
  "Manipur",
  "Guwahati",
  "Bihar",
  "Dehradun",
] as const;

export type CourseNavItem = {
  label: string;
  href: string;
  flag?: "ES" | "DE";
  children?: readonly { label: string; href: string }[];
};

export const COURSE_NAV: readonly CourseNavItem[] = [
  {
    label: "Spanish",
    href: "/courses/spanish",
    flag: "ES",
    children: [
      {
        label: "Certificate Course",
        href: "/courses/spanish/certificate-diploma",
      },
      {
        label: "School Oriented Course",
        href: "/courses/spanish/school-course",
      },
    ],
  },
  {
    label: "German",
    href: "/courses/german",
    flag: "DE",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Courses",
    href: "/courses",
    children: COURSE_NAV,
  },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  explore: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Why Choose Us", href: "/why-choose-us" },
    { label: "Courses", href: "/courses" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  courses: [
    { label: "Spanish Certificate", href: "/courses/spanish/certificate-diploma" },
    { label: "Spanish School Course", href: "/courses/spanish/school-course" },
    { label: "German Courses", href: "/courses/german" },
  ],
} as const;
