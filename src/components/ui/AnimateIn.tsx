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
  up: { y: 18, x: 0 },
  down: { y: -18, x: 0 },
  left: { y: 0, x: 18 },
  right: { y: 0, x: -18 },
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
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: motionTokens.duration.base,
        delay,
        ease: motionTokens.easeOut,
      }}
    >
      {children}
    </motion.div>
  );
}
