"use client";

import { useEffect } from "react";

/**
 * Activates every [data-reveal] element on the page: adds .is-visible once
 * it scrolls into view (IntersectionObserver, unobserved after firing so
 * the reveal never repeats on reverse scroll). Mounted once in the root
 * layout — individual sections just need the data-reveal attribute
 * (see components/ui/ScrollReveal.tsx), no per-section client code.
 */
export default function ScrollRevealController() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (elements.length === 0) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          const delay = target.dataset.revealDelay;
          if (delay) {
            target.style.transitionDelay = `${delay}ms`;
          }
          target.classList.add("is-visible");
          observer.unobserve(target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
