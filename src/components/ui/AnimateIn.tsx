"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { motion as motionTokens } from "@/lib/design-tokens";

type AnimateInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  /** fade | fade-up (default via direction) */
  variant?: "fade" | "fade-up";
};

const offsets = {
  up: { y: 10, x: 0 },
  down: { y: -10, x: 0 },
  left: { y: 0, x: 10 },
  right: { y: 0, x: -10 },
  none: { y: 0, x: 0 },
};

export function AnimateIn({
  children,
  className,
  delay = 0,
  direction = "up",
  variant,
}: AnimateInProps) {
  const reduceMotion = useReducedMotion();
  const resolvedDirection = variant === "fade" ? "none" : direction;
  const offset = offsets[resolvedDirection];

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0.01, ...offset }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: Math.min(motionTokens.duration.base, 0.28),
        delay: Math.min(delay, 0.08),
        ease: motionTokens.easeOut,
      }}
    >
      {children}
    </motion.div>
  );
}
