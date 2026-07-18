import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms, applied once the element enters the viewport. */
  delay?: number;
  as?: "div" | "section";
};

/**
 * Marks a block for scroll-triggered fade-in + slide-up. The actual
 * IntersectionObserver logic lives in ScrollRevealController (mounted once
 * in the root layout) — this component just emits the data-reveal
 * attribute the CSS/JS pair look for, so it stays server-renderable.
 */
export default function ScrollReveal({
  children,
  className,
  delay = 0,
  as = "div",
}: ScrollRevealProps) {
  const Component = as;

  return (
    <Component
      data-reveal=""
      data-reveal-delay={delay > 0 ? delay : undefined}
      className={className}
    >
      {children}
    </Component>
  );
}
