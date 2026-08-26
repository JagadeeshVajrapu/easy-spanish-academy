import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

type BrandLogoProps = {
  href?: string;
  className?: string;
  priority?: boolean;
  size?: "nav" | "footer";
  onClick?: () => void;
};

type BrandWordmarkProps = {
  /** `light` = dark text on white nav; `dark` = light text on navy footer */
  tone?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
};

/** Creative brand name + optional single-line institute tagline. */
export function BrandWordmark({
  tone = "light",
  showTagline = true,
  className,
}: BrandWordmarkProps) {
  const isLight = tone === "light";

  return (
    <span className={cn("min-w-0 leading-tight", className)}>
      <span
        className={cn(
          "font-display block whitespace-nowrap text-[1.05rem] font-extrabold tracking-tight sm:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem]",
          isLight ? "text-esa-navy" : "text-white",
        )}
      >
        Easy{" "}
        <span className={isLight ? "text-esa-red" : "text-esa-gold"}>Spanish</span>{" "}
        Academy
      </span>
      {showTagline ? (
        <span
          className={cn(
            "mt-0.5 block max-w-full text-[10px] font-semibold leading-snug tracking-[0.01em] sm:text-[11px]",
            isLight ? "hidden text-esa-red" : "whitespace-normal text-esa-gold",
          )}
          title={SITE.instituteTagline}
        >
          {SITE.instituteTagline}
        </span>
      ) : null}
    </span>
  );
}

/**
 * Balanced lockup size — full tagline readable, no overlap with nav.
 * (~previous “good” size before it grew into the menu)
 */
const NAV = {
  src: "/esa-logo-lockup.png",
  width: 1024,
  height: 341,
  className: "h-auto w-[15.5rem] sm:w-[17.5rem] md:w-[18.5rem] lg:w-[19.5rem]",
} as const;

const FOOTER = {
  src: "/esa-logo-lockup.png",
  width: 1024,
  height: 341,
  className: "h-auto w-[16.5rem] sm:w-[18.5rem]",
} as const;

export function BrandLogo({
  href,
  className,
  priority = false,
  size = "nav",
  onClick,
}: BrandLogoProps) {
  const config = size === "footer" ? FOOTER : NAV;

  const mark = (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center bg-transparent p-0",
        size === "footer" && "rounded-xl bg-white/95 px-2 py-1.5",
        className,
      )}
    >
      <Image
        src={config.src}
        alt="Easy Spanish Academy — Learn today, speak tomorrow, connect forever"
        width={config.width}
        height={config.height}
        priority={priority}
        className={cn("object-contain object-left", config.className)}
      />
    </span>
  );

  if (!href) return mark;

  return (
    <Link href={href} onClick={onClick} className="focus-esa shrink-0">
      {mark}
    </Link>
  );
}
