"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import PhoneIcon from "@/components/icons/PhoneIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import MenuIcon from "@/components/icons/MenuIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import { CLINIC, NAV_LINKS } from "@/lib/constants";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname !== "/") return;
    event.preventDefault();
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-surface/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 sm:px-8 lg:px-12">
          <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2.5">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo.png`}
              alt="Smile Design"
              width={621}
              height={482}
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
              href={CLINIC.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-11 w-11 items-center justify-center rounded-full border-2 border-teal-600/40 text-teal-700 transition-colors hover:border-teal-600 hover:bg-teal-50 lg:flex"
              aria-label="Написать клинике Smile Design в WhatsApp"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>

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
      </header>

      {/* Rendered as a sibling of <header>, not inside it — <header> has
          backdrop-blur, which (like transform/filter/will-change) creates a
          new containing block for position:fixed descendants. Nested here,
          the drawer would size/position itself against the header's own
          box instead of the viewport. */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
            className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm lg:hidden"
          />
        )}
        {isMenuOpen && (
          <motion.nav
            key="mobile-menu-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 z-40 flex w-full max-w-xs flex-col gap-1 overflow-y-auto bg-surface p-6 pt-24 shadow-soft lg:hidden"
            aria-label="Мобильная навигация"
          >
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
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
