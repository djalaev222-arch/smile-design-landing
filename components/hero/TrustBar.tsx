"use client";

import { motion } from "motion/react";
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

export default function TrustBar() {
  return (
    <dl className="flex flex-nowrap items-center justify-between gap-x-3 border-t border-ink/10 pt-5 sm:justify-start sm:gap-x-5 lg:gap-x-8 lg:pt-6">
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center gap-3 sm:gap-5 lg:gap-8">
          {index > 0 && (
            <span aria-hidden="true" className="h-6 w-px shrink-0 bg-ink/10 sm:h-8" />
          )}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.45,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-center gap-1.5"
          >
            <dt className="sr-only">{item.srLabel}</dt>
            <dd className="flex items-center gap-1 font-display text-lg font-semibold leading-none text-coral-700 sm:text-xl lg:text-2xl">
              {item.value}
              {item.hasStar && <StarIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
            </dd>
            <span className="font-body text-xs leading-none text-ink-faint sm:text-sm">{item.label}</span>
          </motion.div>
        </div>
      ))}
    </dl>
  );
}
