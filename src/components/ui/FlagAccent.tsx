import Image from "next/image";
import { cn } from "@/lib/utils";

type FlagAccentProps = {
  country: "ES" | "DE";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

const sizeClasses = {
  sm: "h-4 w-6",
  md: "h-5 w-[1.875rem]",
  lg: "h-7 w-[2.625rem]",
  xl: "h-9 w-[3.375rem] sm:h-10 sm:w-[3.75rem]",
} as const;

const FLAG_SRC = {
  ES: "/flags/es.png",
  DE: "/flags/de.svg",
} as const;

export function FlagAccent({ country, className, size = "sm" }: FlagAccentProps) {
  const label = country === "ES" ? "Spain" : "Germany";

  return (
    <span
      className={cn(
        "esa-flag relative inline-flex shrink-0 overflow-hidden rounded-[3px] shadow-sm ring-1 ring-black/15",
        sizeClasses[size],
        className,
      )}
      role="img"
      aria-label={`${label} flag`}
      title={label}
    >
      <Image
        src={FLAG_SRC[country]}
        alt=""
        fill
        className="object-cover object-left"
        sizes="64px"
        unoptimized
      />
    </span>
  );
}
