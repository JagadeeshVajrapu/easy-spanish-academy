export const SITE = {
  name: "Easy Spanish Academy",
  shortName: "ESA",
  tagline: "Learn Today, Speak Tomorrow, Connect Forever",
  description:
    "A modern language academy offering Spanish and German courses designed to help you speak with confidence and connect across cultures.",
  phoneDisplay: "9971-62-7900",
  phoneHref: "tel:+919971627900",
  email: "easyspanishacademy01@gmail.com",
  emailHref: "mailto:easyspanishacademy01@gmail.com",
  whatsappHref: "https://wa.me/919971627900",
  whatsappMessage: "Hello! I would like to know more about your language courses.",
  url: "https://easyspanishacademy.com",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Courses",
    href: "/spanish-courses",
    children: [
      { label: "Spanish Courses", href: "/spanish-courses", flag: "ES" as const },
      { label: "German Courses", href: "/german-courses", flag: "DE" as const },
    ],
  },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  explore: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Why Choose Us", href: "/why-choose-us" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
  ],
  courses: [
    { label: "Spanish Courses", href: "/spanish-courses" },
    { label: "German Courses", href: "/german-courses" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
} as const;
