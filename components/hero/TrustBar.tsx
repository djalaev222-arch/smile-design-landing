"use client";

import { useEffect, useRef } from "react";
import StarIcon from "@/components/icons/StarIcon";
import { CLINIC } from "@/lib/constants";

const items = [
  {
    value: CLINIC.trust.yearsInBusiness,
    label: "лет",
    srLabel: "лет клинике",
    hasStar: false,
  },
  {
    value: CLINIC.trust.doctorsCount,
    label: "врачей",
    srLabel: "врачей в штате",
    hasStar: false,
  },
  {
    value: CLINIC.trust.rating,
    label: "рейтинг",
    srLabel: `рейтинг ${CLINIC.trust.rating} из 5, ${CLINIC.trust.reviewsCount} отзывов`,
    hasStar: true,
  },
];

// "10+" -> { target: 10, suffix: "+", decimals: 0 }, "4.9" -> { target: 4.9, suffix: "", decimals: 1 }
function parseCountable(raw: string) {
  const match = raw.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, numeric, suffix] = match;
  const decimals = numeric.includes(".") ? numeric.split(".")[1].length : 0;
  return { target: parseFloat(numeric), suffix, decimals };
}

const COUNT_DURATION_MS = 1300;
// Starts once the hero's own fade-in-up wrapper (delay 650ms + 600ms
// duration, see Hero.tsx) has finished revealing this block.
const COUNT_START_DELAY_MS = 1300;
const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

export default function TrustBar() {
  const numberRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const parsed = items.map((item) => parseCountable(item.value));

    // Reset to zero for the count-up — the SSR-rendered final values stay
    // in place until this runs, so no-JS visitors still see correct numbers.
    numberRefs.current.forEach((el, i) => {
      const info = parsed[i];
      if (!el || !info) return;
      el.textContent = info.decimals
        ? (0).toFixed(info.decimals) + info.suffix
        : `0${info.suffix}`;
    });

    let rafId = 0;
    let startTime: number | null = null;

    const tick = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / COUNT_DURATION_MS, 1);
      const eased = easeOutExpo(progress);

      numberRefs.current.forEach((el, i) => {
        const info = parsed[i];
        if (!el || !info) return;
        el.textContent = `${(info.target * eased).toFixed(info.decimals)}${info.suffix}`;
      });

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    const timeoutId = window.setTimeout(() => {
      rafId = requestAnimationFrame(tick);
    }, COUNT_START_DELAY_MS);

    return () => {
      window.clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <dl className="flex flex-nowrap items-center justify-between gap-x-3 border-t border-ink/10 pt-5 sm:justify-start sm:gap-x-5 lg:gap-x-8 lg:pt-6">
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center gap-3 sm:gap-5 lg:gap-8">
          {index > 0 && (
            <span aria-hidden="true" className="h-6 w-px shrink-0 bg-ink/10 sm:h-8" />
          )}
          <div className="flex items-center gap-1.5">
            <dt className="sr-only">{item.srLabel}</dt>
            <dd className="flex items-center gap-1 font-display text-lg font-semibold leading-none text-teal-600 sm:text-xl lg:text-2xl">
              <span
                ref={(el) => {
                  numberRefs.current[index] = el;
                }}
              >
                {item.value}
              </span>
              {item.hasStar && <StarIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
            </dd>
            <span className="font-body text-xs leading-none text-ink-faint sm:text-sm">{item.label}</span>
          </div>
        </div>
      ))}
    </dl>
  );
}
