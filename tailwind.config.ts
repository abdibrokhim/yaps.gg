import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1f40ed", // --brand-default
          faint: "#e7ebfd",   // --brand-faint
        },
        secondary: {
          darkest: "#e5e0cd", // --secondary-darkest
        },
        gray: {
          900: "#111827",
          700: "#374151",
          600: "#4b5563",
          300: "#d1d5db",
        },
        // These allow you to use your custom properties directly:
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        mono: ["SuisseIntlMono", "monospace"],
        sans: ["ABCDiatype", "Trebuchet MS", "sans-serif"],
        serif: ["Reckless", "Georgia", "serif"],
      },
      borderRadius: {
        DEFAULT: "var(--border-radius-default)",
        lg: "var(--border-radius-default)",
        md: "calc(var(--border-radius-default) - 2px)",
        sm: "calc(var(--border-radius-default) - 4px)",
      },
      borderWidth: {
        DEFAULT: "0.7px",
      },
      maxWidth: {
        "side-panel": "424px",
        widget: "384px",
      },
      width: {
        "action-button": "40px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
} satisfies Config;
