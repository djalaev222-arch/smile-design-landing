"use client";

import Image from "next/image";
import { motion } from "motion/react";
import CheckIcon from "@/components/icons/CheckIcon";
import StarIcon from "@/components/icons/StarIcon";
import { CLINIC } from "@/lib/constants";

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full lg:order-2 lg:mx-auto lg:max-w-none"
    >
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 hidden rounded-[3rem] bg-teal-100 opacity-70 blur-3xl animate-float lg:block"
      />

      <div className="relative aspect-[4/3] w-full overflow-hidden [mask-image:linear-gradient(to_bottom,black_48%,transparent_92%)] [-webkit-mask-image:linear-gradient(to_bottom,black_48%,transparent_92%)] lg:aspect-[3/4] lg:rounded-[2.5rem] lg:shadow-soft lg:[mask-image:linear-gradient(to_right,transparent_0%,black_50%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_50%)]">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/doctor.jpg`}
          alt="Врач-стоматолог клиники Smile Design"
          fill
          priority
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover object-top"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute -left-4 top-8 hidden items-center gap-3 rounded-2xl bg-surface-card px-4 py-3 shadow-card sm:-left-8 lg:flex"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-success-100 text-success-700">
          <CheckIcon className="h-4 w-4" />
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
        className="absolute -bottom-5 right-2 hidden items-center gap-3 rounded-2xl bg-surface-card px-4 py-3 shadow-card sm:-right-6 lg:flex"
      >
        <span className="flex items-center gap-1 font-display text-xl font-semibold text-coral-700">
          {CLINIC.trust.rating}
          <StarIcon className="h-4 w-4" />
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
