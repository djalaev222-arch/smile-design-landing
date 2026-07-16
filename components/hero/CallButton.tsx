"use client";

import { motion } from "motion/react";
import PhoneIcon from "@/components/icons/PhoneIcon";
import { CLINIC } from "@/lib/constants";

export default function CallButton({ className }: { className?: string }) {
  return (
    <motion.a
      href={CLINIC.phoneHref}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`group relative flex items-center gap-4 overflow-hidden rounded-full bg-teal-700 px-7 py-4 text-surface shadow-soft transition-colors hover:bg-teal-900 ${className ?? ""}`}
      aria-label={`Позвонить в клинику Smile Design: ${CLINIC.phoneDisplay}`}
    >
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface/20">
        <span className="absolute inset-0 rounded-full border border-surface/60 animate-pulse-ring" />
        <PhoneIcon className="h-5 w-5 text-surface" />
      </span>
      <span className="flex flex-col items-start leading-tight">
        <span className="font-body text-base font-bold tracking-tight">
          Позвонить
        </span>
        <span className="font-body text-sm font-medium text-surface/90">
          {CLINIC.phoneDisplay}
        </span>
      </span>
    </motion.a>
  );
}
