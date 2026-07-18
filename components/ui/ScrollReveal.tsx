"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  as = "div",
}: ScrollRevealProps) {
  const Component = motion[as];

  return (
    <Component
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
