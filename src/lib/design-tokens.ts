/**
 * Easy Spanish Academy — Design Tokens
 * Single source of truth for brand values mirrored in globals.css
 * Change colors here AND in :root CSS variables to keep them aligned.
 */

export const colors = {
  primary: {
    DEFAULT: "#C8102E",
    dark: "#9E0C24",
    soft: "#F8E8EB",
  },
  secondary: {
    DEFAULT: "#152238",
    soft: "#24324A",
    muted: "#3A4A63",
  },
  accent: {
    DEFAULT: "#C9A227",
    soft: "#F7F0D8",
    deep: "#A8861A",
  },
  neutral: {
    bg: "#F7F8FA",
    surface: "#FFFFFF",
    muted: "#5B6575",
    border: "#E4E7EE",
    soft: "#EEF0F4",
  },
} as const;

export const radii = {
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.75rem",
} as const;

export const shadows = {
  soft: "0 10px 30px -18px rgb(21 34 56 / 0.28)",
  card: "0 14px 40px -24px rgb(21 34 56 / 0.35)",
  lift: "0 18px 48px -22px rgb(21 34 56 / 0.4)",
} as const;

export const motion = {
  easeOut: [0.22, 1, 0.36, 1] as const,
  duration: {
    fast: 0.2,
    base: 0.45,
    slow: 0.65,
  },
  stagger: 0.08,
} as const;

export const typography = {
  hero: "font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
  section: "font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl",
  subheading: "font-display text-xl font-semibold leading-snug tracking-tight sm:text-2xl",
  cardTitle: "font-display text-lg font-semibold leading-snug tracking-tight sm:text-xl",
  body: "text-base leading-relaxed text-esa-muted sm:text-lg",
  bodySm: "text-sm leading-relaxed text-esa-muted sm:text-base",
  label:
    "text-xs font-semibold uppercase tracking-[0.18em]",
  button: "text-sm font-semibold tracking-tight sm:text-base",
  courseMeta: "text-sm font-medium text-esa-muted",
} as const;
