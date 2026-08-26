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

/** Matches the shared lockup tagline under the brand name. */
export const BRAND_LOCKUP_TAGLINE =
  "Learn today | speak tomorrow | connect forever";

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

/** Header lockup — dark text on light UI */
const NAV = {
  src: "/esa-logo-lockup.png",
  width: 1024,
  height: 341,
  className: "h-auto w-[15.5rem] sm:w-[17.5rem] md:w-[18.5rem] lg:w-[19.5rem]",
} as const;

/** Cache-bust after regenerating navy-baked footer mark. */
const FOOTER_MARK_VERSION = "8";

export function BrandLogo({
  href,
  className,
  priority = false,
  size = "nav",
  onClick,
}: BrandLogoProps) {
  const isFooter = size === "footer";

  const mark = isFooter ? (
    /* Header-style lockup: mark + name + full single-line tagline on navy. */
    <span
      className={cn(
        "inline-flex max-w-full items-center gap-2.5 sm:gap-3",
        className,
      )}
    >
      <Image
        src={`/esa-footer-mark.png?v=${FOOTER_MARK_VERSION}`}
        alt=""
        width={789}
        height={477}
        priority={priority}
        quality={100}
        unoptimized
        className="h-10 w-auto shrink-0 object-contain object-left sm:h-11"
        aria-hidden
      />
      <span className="min-w-0 shrink">
        <span className="font-display block whitespace-nowrap text-[1.05rem] font-extrabold leading-none tracking-tight text-white sm:text-[1.15rem]">
          Easy <span className="text-esa-red">Spanish</span> Academy
        </span>
        <span className="mt-1.5 block whitespace-nowrap text-[10px] font-medium leading-none tracking-[0.01em] text-white/80 sm:text-[11px]">
          {BRAND_LOCKUP_TAGLINE}
        </span>
      </span>
    </span>
  ) : (
    <span className={cn("inline-flex shrink-0 items-center justify-center bg-transparent p-0", className)}>
      <Image
        src={NAV.src}
        alt={`Easy Spanish Academy — ${BRAND_LOCKUP_TAGLINE}`}
        width={NAV.width}
        height={NAV.height}
        priority={priority}
        quality={100}
        className={cn("object-contain object-left", NAV.className)}
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
