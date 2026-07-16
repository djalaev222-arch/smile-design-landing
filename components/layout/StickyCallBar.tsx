"use client";

import { motion } from "motion/react";
import PhoneIcon from "@/components/icons/PhoneIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { CLINIC } from "@/lib/constants";

export default function StickyCallBar() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.1 }}
      className="fixed inset-x-0 bottom-0 z-50 flex items-stretch gap-2 border-t border-ink/10 bg-surface-card/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-soft backdrop-blur lg:hidden"
    >
      <a
        href={CLINIC.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-teal-700 py-3.5 text-surface active:bg-teal-900"
        aria-label={`Позвонить в клинику Smile Design: ${CLINIC.phoneDisplay}`}
      >
        <PhoneIcon className="h-5 w-5" />
        <span className="font-body text-sm font-bold">Позвонить · {CLINIC.phoneDisplay}</span>
      </a>
      <a
        href={CLINIC.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-14 shrink-0 items-center justify-center rounded-full border-2 border-teal-600/40 text-teal-700 active:bg-teal-50"
        aria-label="Написать клинике Smile Design в WhatsApp"
      >
        <WhatsAppIcon className="h-5 w-5" />
      </a>
    </motion.div>
  );
}
