import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "gold";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-esa-red text-white shadow-esa-soft hover:bg-esa-red-dark hover:shadow-esa-card active:bg-esa-red-dark",
  secondary:
    "bg-esa-navy text-white shadow-esa-soft hover:bg-esa-navy-soft hover:shadow-esa-card active:bg-esa-navy-soft",
  outline:
    "border border-esa-border bg-white/90 text-esa-navy hover:border-esa-navy/30 hover:bg-white hover:shadow-esa-soft",
  ghost: "bg-transparent text-esa-navy hover:bg-esa-navy/5",
  gold: "bg-esa-gold text-esa-navy shadow-esa-soft hover:bg-esa-gold-deep hover:text-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 rounded-xl px-4 text-sm",
  md: "min-h-11 rounded-xl px-5 text-sm sm:text-base",
  lg: "min-h-12 rounded-xl px-5 text-base sm:min-h-14 sm:px-7",
};

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    "btn-interactive inline-flex items-center justify-center gap-2 font-semibold tracking-tight focus-esa disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, target, rel, onClick } = props;
    return (
      <Link href={href} className={classes} target={target} rel={rel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
