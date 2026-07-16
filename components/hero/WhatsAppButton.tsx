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
      className={`flex items-center gap-3 rounded-full border-2 border-teal-600/40 bg-surface-card px-6 py-4 text-teal-700 shadow-card transition-colors hover:border-teal-600 hover:bg-teal-50 ${className ?? ""}`}
      aria-label="Написать клинике Smile Design в WhatsApp"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="font-body text-base font-semibold">Написать в WhatsApp</span>
    </motion.a>
  );
}
