import { cn } from "@/lib/utils";

type FlagAccentProps = {
  country: "ES" | "DE";
  className?: string;
  size?: "sm" | "md";
};

export function FlagAccent({ country, className, size = "sm" }: FlagAccentProps) {
  const label = country === "ES" ? "Spain" : "Germany";
  const sizeClass = size === "sm" ? "h-4 w-6" : "h-5 w-8";

  return (
    <span
      className={cn(
        "inline-flex overflow-hidden rounded-[3px] shadow-sm ring-1 ring-black/10",
        sizeClass,
        className,
      )}
      role="img"
      aria-label={`${label} flag`}
      title={label}
    >
      {country === "ES" ? (
        <span className="flex h-full w-full flex-col">
          <span className="h-[25%] bg-[#AA151B]" />
          <span className="h-[50%] bg-[#F1BF00]" />
          <span className="h-[25%] bg-[#AA151B]" />
        </span>
      ) : (
        <span className="flex h-full w-full flex-col">
          <span className="h-1/3 bg-[#000000]" />
          <span className="h-1/3 bg-[#DD0000]" />
          <span className="h-1/3 bg-[#FFCE00]" />
        </span>
      )}
    </span>
  );
}
