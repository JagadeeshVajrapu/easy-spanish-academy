"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { motion as motionTokens } from "@/lib/design-tokens";

type StaggerGroupProps = {
  children: React.ReactNode;
  className?: string;
};

export function StaggerGroup({ children, className }: StaggerGroupProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: Math.min(motionTokens.stagger, 0.05),
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
};

export function StaggerItem({ children, className }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0.01, y: 10 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: Math.min(motionTokens.duration.base, 0.28),
            ease: motionTokens.easeOut,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
