export const SITE = {
  name: "Easy Spanish Academy",
  shortName: "ESA",
  tagline: "Learn Today, Speak Tomorrow, Connect Forever",
  description:
    "Learn Spanish and German with structured courses designed to build your language skills and speaking confidence.",
  phoneDisplay: "+91 99716 27900",
  phoneHref: "tel:+919971627900",
  email: "easyspanishacademy01@gmail.com",
  emailHref: "mailto:easyspanishacademy01@gmail.com",
  whatsappHref: "https://wa.me/919971627900",
  whatsappMessage:
    "Hello! I would like to book a demo / enquire about language courses at Easy Spanish Academy.",
  url: "https://easyspanishacademy.com",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Courses",
    href: "/courses",
    children: [
      { label: "Spanish", href: "/courses/spanish", flag: "ES" as const },
      { label: "German", href: "/courses/german", flag: "DE" as const },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  explore: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  courses: [
    { label: "Spanish", href: "/courses/spanish" },
    { label: "German", href: "/courses/german" },
  ],
  support: [
    { label: "Book a Demo", href: "/book-demo" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
} as const;
