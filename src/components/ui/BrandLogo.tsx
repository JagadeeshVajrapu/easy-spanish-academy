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
          "font-display block whitespace-nowrap text-base font-extrabold tracking-tight sm:text-[1.125rem] lg:text-[1.2rem] xl:text-[1.3rem]",
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
            "mt-0.5 block text-[10px] font-semibold tracking-[0.01em] sm:text-[11px]",
            // Keep tagline out of the crowded nav row; footer can show it.
            isLight
              ? "hidden text-esa-red"
              : "whitespace-normal text-esa-gold sm:whitespace-nowrap",
          )}
          title={SITE.instituteTagline}
        >
          {SITE.instituteTagline}
        </span>
      ) : null}
    </span>
  );
}

/** Nav mark is landscape ~900×507 (aspect 1.775). */
const NAV = {
  src: "/esa-mark.png",
  width: 900,
  height: 507,
  className: "h-9 w-auto sm:h-10 md:h-11 max-w-[6.5rem] sm:max-w-[7.25rem] md:max-w-[7.75rem]",
} as const;

const FOOTER = {
  src: "/esa-mark.png",
  width: 900,
  height: 507,
  className: "h-9 w-auto max-w-[5.75rem] sm:h-10 sm:max-w-[6.5rem]",
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
        "inline-flex shrink-0 items-center justify-center overflow-hidden transition duration-300",
        size === "nav" && "rounded-lg bg-transparent p-0",
        size === "footer" &&
          "rounded-xl bg-white p-1.5 shadow-esa-soft ring-1 ring-esa-gold/30 sm:p-2",
        className,
      )}
    >
      <Image
        src={config.src}
        alt={size === "nav" ? "" : "Easy Spanish Academy"}
        width={config.width}
        height={config.height}
        priority={priority}
        className={cn("object-contain object-center", config.className)}
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
