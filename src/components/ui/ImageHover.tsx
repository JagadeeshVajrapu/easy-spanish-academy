"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { motion as motionTokens } from "@/lib/design-tokens";

type ImageHoverProps = {
  children: React.ReactNode;
  className?: string;
};

/** Subtle image zoom on hover — use inside a relative overflow-hidden frame. */
export function ImageHover({ children, className }: ImageHoverProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={cn("absolute inset-0", className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("absolute inset-0", className)}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: motionTokens.duration.slow, ease: motionTokens.easeOut }}
    >
      {children}
    </motion.div>
  );
}
