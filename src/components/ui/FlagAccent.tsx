import Image from "next/image";
import { cn } from "@/lib/utils";

type FlagAccentProps = {
  country: "ES" | "DE";
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "h-3.5 w-[1.3125rem]",
  md: "h-4 w-6",
  lg: "h-5 w-[1.875rem]",
} as const;

const FLAG_SRC = {
  ES: "/flags/es.svg",
  DE: "/flags/de.svg",
} as const;

function GermanFlagFallback({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 5 3"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect width="5" height="1" fill="#000000" />
      <rect y="1" width="5" height="1" fill="#DD0000" />
      <rect y="2" width="5" height="1" fill="#FFCE00" />
    </svg>
  );
}

export function FlagAccent({ country, className, size = "sm" }: FlagAccentProps) {
  const label = country === "ES" ? "Spain" : "Germany";

  return (
    <span
      className={cn(
        "esa-flag relative inline-flex shrink-0 overflow-hidden rounded-[2px] shadow-sm ring-1 ring-black/10",
        sizeClasses[size],
        className,
      )}
      role="img"
      aria-label={`${label} flag`}
      title={label}
    >
      {country === "ES" ? (
        <Image
          src={FLAG_SRC.ES}
          alt=""
          fill
          className="object-cover object-left"
          sizes="30px"
          unoptimized
        />
      ) : (
        <GermanFlagFallback className="block h-full w-full" />
      )}
    </span>
  );
}
