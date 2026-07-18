"use client";

import { motion } from "motion/react";
import CallButton from "@/components/hero/CallButton";
import WhatsAppButton from "@/components/hero/WhatsAppButton";
import TrustBar from "@/components/hero/TrustBar";
import HeroVisual from "@/components/hero/HeroVisual";
import { CLINIC } from "@/lib/constants";

const headlineReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface pb-20 lg:pb-32 lg:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 hidden h-72 w-72 rounded-full bg-teal-100 opacity-60 blur-3xl lg:block"
      />

      <div className="relative mx-auto max-w-7xl lg:px-12">
        <div className="grid items-center gap-0 lg:grid-cols-[1.1fr,0.9fr] lg:gap-8">
          <HeroVisual />

          <div className="relative z-10 -mt-16 px-6 sm:px-8 lg:order-1 lg:mt-0 lg:px-0">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 font-body text-sm font-medium text-teal-700"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
              Стоматология в {CLINIC.city}
            </motion.span>

            <h1 className="font-display text-hero-sm font-semibold text-ink lg:text-hero">
              {["Здоровые зубы"].map((line, i) => (
                <motion.span
                  key={line}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={headlineReveal}
                  className="block"
                >
                  {line}
                </motion.span>
              ))}
              <motion.span
                custom={1}
                initial="hidden"
                animate="visible"
                variants={headlineReveal}
                className="block"
              >
                <span className="text-teal-600">без страха</span> и очередей
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 max-w-xl font-body text-base text-ink-soft sm:text-lg lg:text-xl"
            >
              Лечение, протезирование и детский приём в одной клинике —
              с гарантией на все виды работ и понятной ценой до начала лечения.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <CallButton />
              <WhatsAppButton />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-8 lg:mt-12"
            >
              <TrustBar />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
