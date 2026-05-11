import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          deep:  "#1a3a2a",
          mid:   "#2d5a3f",
          light: "#4a8c62",
          pale:  "#e8f0eb",
        },
        cream: {
          DEFAULT: "#f5f0e8",
          dark:    "#ede5d8",
        },
        gold: {
          DEFAULT: "#c9a84c",
          light:   "#e8c97a",
          pale:    "#fdf6e7",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        serif:   ["'Libre Baskerville'", "serif"],
        sans:    ["'DM Sans'", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease both",
        "fade-in": "fadeIn 0.6s ease both",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
