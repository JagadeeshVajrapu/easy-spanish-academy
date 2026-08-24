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

function SpanishFlag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 750 500"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect width="750" height="125" fill="#AA151B" />
      <rect y="125" width="750" height="250" fill="#F1BF00" />
      <rect y="375" width="750" height="125" fill="#AA151B" />
      {/* Simplified coat of arms */}
      <g transform="translate(195, 170)">
        {/* Shield */}
        <path
          d="M0 0h60v40c0 20-30 35-30 35S0 60 0 40z"
          fill="#AA151B"
          stroke="#F1BF00"
          strokeWidth="4"
        />
        {/* Quartered shield */}
        <rect x="4" y="4" width="25" height="19" fill="#C8B100" />
        <rect x="31" y="4" width="25" height="19" fill="#AA151B" />
        <rect x="4" y="25" width="25" height="19" fill="#AA151B" />
        <rect x="31" y="25" width="25" height="19" fill="#C8B100" />
        {/* Crown */}
        <rect x="15" y="-14" width="30" height="12" fill="#C8B100" rx="2" />
        <rect x="18" y="-18" width="5" height="6" fill="#C8B100" />
        <rect x="27" y="-18" width="5" height="6" fill="#C8B100" />
        <rect x="37" y="-18" width="5" height="6" fill="#C8B100" />
        {/* Pillars */}
        <rect x="-16" y="4" width="6" height="56" fill="#C8B100" />
        <rect x="70" y="4" width="6" height="56" fill="#C8B100" />
      </g>
    </svg>
  );
}

function GermanFlag({ className }: { className?: string }) {
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
  const Flag = country === "ES" ? SpanishFlag : GermanFlag;

  return (
    <span
      className={cn(
        "esa-flag inline-flex shrink-0 overflow-hidden rounded-[2px] shadow-sm ring-1 ring-black/10",
        sizeClasses[size],
        className,
      )}
      role="img"
      aria-label={`${label} flag`}
      title={label}
    >
      <Flag className="block h-full w-full" />
    </span>
  );
}
