import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import SiteHeader from "@/components/layout/SiteHeader";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
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
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
