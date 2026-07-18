import type { Metadata } from "next";
import { Golos_Text, Manrope } from "next/font/google";
import SiteHeader from "@/components/layout/SiteHeader";
import ScrollRevealController from "@/components/ui/ScrollRevealController";
import "./globals.css";

const display = Golos_Text({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
});

const body = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Smile Design — Стоматология в Каспийске",
  description:
    "Здоровые зубы без страха и очередей. Лечение, протезирование и детский приём в стоматологии Smile Design, Каспийск.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${display.variable} ${body.variable}`}>
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
        <ScrollRevealController />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
