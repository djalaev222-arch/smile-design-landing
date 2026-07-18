"use client";

import { motion } from "motion/react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { CLINIC } from "@/lib/constants";

export default function WhatsAppButton({ className }: { className?: string }) {
  return (
    <motion.a
      href={CLINIC.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`flex items-center justify-center gap-3 rounded-full border-2 border-teal-600/40 bg-surface-card px-6 py-3.5 text-teal-700 shadow-card transition-colors hover:border-teal-600 hover:bg-teal-50 ${className ?? ""}`}
      aria-label="Написать клинике Smile Design в WhatsApp"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-50">
        <WhatsAppIcon className="h-4 w-4" />
      </span>
      <span className="flex flex-col items-start leading-tight">
        <span className="font-body text-sm font-bold tracking-tight">Написать</span>
        <span className="font-body text-xs font-medium text-teal-700/80">в WhatsApp</span>
      </span>
    </motion.a>
  );
}
