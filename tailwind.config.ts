import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0c",
        "ink-soft": "#161618",
        stone: {
          DEFAULT: "#f3eee6",
          deep: "#e8e0d4",
        },
        ember: {
          DEFAULT: "#e85d04",
          bright: "#ff7a1a",
          muted: "rgba(232, 93, 4, 0.15)",
        },
        mist: "#9a948a",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        lift: "0 20px 40px -20px rgba(11, 11, 12, 0.25)",
        soft: "0 8px 30px rgba(11, 11, 12, 0.08)",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
