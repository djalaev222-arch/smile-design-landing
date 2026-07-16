"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import PhoneIcon from "@/components/icons/PhoneIcon";
import MenuIcon from "@/components/icons/MenuIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import { CLINIC, NAV_LINKS } from "@/lib/constants";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname !== "/") return;
    event.preventDefault();
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 sm:px-8 lg:px-12">
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2.5">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo.png`}
            alt="Smile Design"
            width={689}
            height={741}
            className="h-10 w-auto"
            priority
          />
          <span className="font-display text-xl font-bold tracking-tight text-ink">
            Smile Design
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Основная навигация">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-base font-semibold text-ink-soft transition-colors hover:text-teal-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CLINIC.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-teal-700 px-5 py-2.5 text-surface transition-colors hover:bg-teal-900 lg:flex"
            aria-label={`Позвонить в клинику Smile Design: ${CLINIC.phoneDisplay}`}
          >
            <PhoneIcon className="h-4 w-4" />
            <span className="font-body text-base font-bold">{CLINIC.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-ink/10 bg-surface lg:hidden"
            aria-label="Мобильная навигация"
          >
            <div className="flex flex-col gap-1 px-6 py-4 sm:px-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg px-2 py-2.5 font-body text-lg font-semibold text-ink-soft transition-colors hover:bg-surface-alt hover:text-teal-700"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={CLINIC.phoneHref}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-teal-700 py-3 text-surface"
              >
                <PhoneIcon className="h-4 w-4" />
                <span className="font-body text-sm font-bold">
                  Позвонить · {CLINIC.phoneDisplay}
                </span>
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
