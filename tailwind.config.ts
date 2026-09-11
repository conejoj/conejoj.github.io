import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0B0F14",
          900: "#10161D",
          800: "#1A222C",
          700: "#232D39",
        },
        ink: "#12181F",
        cream: "#F7F5EF",
        stone: {
          100: "#EFEBE3",
          200: "#E4DFD4",
          300: "#DAD5C9",
        },
        paper: "#F5F3EE",
        accent: {
          DEFAULT: "#33625F",
          bright: "#5C9490",
          deep: "#20403E",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      maxWidth: {
        content: "1320px",
      },
      letterSpacing: {
        tightest: "-0.04em",
        wideish: "0.08em",
        widest2: "0.18em",
      },
      transitionTimingFunction: {
        studio: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 0.9s ease both",
        marquee: "marquee 32s linear infinite",
        "spin-slow": "spin 70s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(18,24,31,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(18,24,31,0.06) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(245,243,238,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,243,238,0.06) 1px, transparent 1px)",
        "dot-dark":
          "radial-gradient(circle, rgba(245,243,238,0.14) 1px, transparent 1px)",
        "dot-light":
          "radial-gradient(circle, rgba(18,24,31,0.16) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
