import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  href?: string;
  className?: string;
  priority?: boolean;
  size?: "nav" | "footer";
  onClick?: () => void;
};

/** Nav mark is landscape ~900×507 (aspect 1.775). */
const NAV = {
  src: "/esa-mark.png",
  width: 900,
  height: 507,
  className: "h-9 w-auto sm:h-10 md:h-11 max-w-[6.5rem] sm:max-w-[7.25rem] md:max-w-[8rem]",
} as const;

const FOOTER = {
  src: "/esa-mark.png",
  width: 900,
  height: 507,
  className: "h-auto w-[7.5rem] sm:w-[8.5rem]",
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
          "rounded-xl bg-white p-1.5 shadow-esa-soft ring-1 ring-white/20 sm:p-2",
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
