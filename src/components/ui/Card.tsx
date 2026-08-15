import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  id?: string;
};

export function Card({ children, className, hover = true, id }: CardProps) {
  return (
    <div
      id={id}
      className={cn(
        "min-w-0 rounded-2xl border border-esa-border bg-esa-surface p-5 shadow-esa-soft sm:p-6 md:p-7",
        hover &&
          "group/card transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out hover:-translate-y-2 hover:border-esa-red/30 hover:bg-white hover:shadow-esa-lift",
        className,
      )}
    >
      {children}
    </div>
  );
}
