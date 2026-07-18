import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Тёплый бежевый фон вместо стерильного белого.
        surface: {
          DEFAULT: "#F7F5F1",
          alt: "#EFE7DA",
          card: "#FCFAF7",
        },
        // Тёмно-графитовый текст вместо чистого чёрного.
        ink: {
          DEFAULT: "#2B3A42",
          soft: "#4A5C64",
          faint: "#6E7D84",
        },
        // Бирюзовый бренд-цвет — снят напрямую с логотипа (#16B0C8).
        teal: {
          50: "#E5F7F9",
          100: "#C3ECF1",
          300: "#6ED2DF",
          500: "#16B0C8",
          600: "#0E93A8",
          700: "#0B7A8D",
          900: "#073C47",
        },
        // Тёплый терракотовый акцент — точечно, для бейджей доверия.
        coral: {
          100: "#FBEADC",
          300: "#F0C7A2",
          400: "#E8A87C",
          600: "#B96A3C",
          700: "#9C5C34",
        },
        // Мягкий зелёный — только для галочек подтверждения/гарантии.
        success: {
          100: "#DFF0E4",
          400: "#8BC3A1",
          500: "#5FA980",
          700: "#2F6B49",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(2.75rem, 2rem + 3.2vw, 5.25rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "hero-sm": ["clamp(2rem, 1.6rem + 4vw, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
      },
      spacing: {
        section: "clamp(3rem, 2rem + 4vw, 7rem)",
      },
      boxShadow: {
        soft: "0 20px 60px -25px oklch(40% 0.05 60 / 0.35)",
        card: "0 12px 32px -16px oklch(30% 0.05 60 / 0.28)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-ring": "pulseRing 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
