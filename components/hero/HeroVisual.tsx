"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CLINIC } from "@/lib/constants";

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
      className="relative mx-auto w-full max-w-sm lg:max-w-none"
    >
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-[3rem] bg-teal-100 blur-3xl opacity-70 animate-float"
      />

      <div
        className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-soft [mask-image:linear-gradient(to_right,transparent_0%,black_38%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_38%)]"
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/doctor.jpg`}
          alt="Врач-стоматолог клиники Smile Design"
          fill
          priority
          sizes="(min-width: 1024px) 40vw, 90vw"
          className="object-cover"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute -left-4 top-8 flex items-center gap-3 rounded-2xl bg-surface-card px-4 py-3 shadow-card sm:-left-8"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-success-100 text-success-700">
          ✓
        </span>
        <div className="leading-tight">
          <p className="font-body text-sm font-bold text-ink">Без боли</p>
          <p className="font-body text-xs text-ink-faint">современная анестезия</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute -bottom-5 right-2 flex items-center gap-3 rounded-2xl bg-surface-card px-4 py-3 shadow-card sm:-right-6"
      >
        <span className="font-display text-xl font-semibold text-coral-700">
          {CLINIC.trust.rating} ★
        </span>
        <div className="leading-tight">
          <p className="font-body text-xs text-ink-faint">
            {CLINIC.trust.reviewsCount} отзывов
          </p>
          <p className="font-body text-xs text-ink-faint">Яндекс.Карты</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
