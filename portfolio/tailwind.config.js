/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        head: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        dark: {
          900: "#0a0a0f",
          800: "#13131a",
          700: "#1c1c28",
          600: "#252535",
        },
        accent: {
          purple: "#7c6dfa",
          light: "#a78bfa",
          green: "#06d6a0",
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease both",
        pulse2: "pulse2 2s ease infinite",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: "translateY(24px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        pulse2: {
          "0%,100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.6, transform: "scale(0.85)" },
        },
        blink: {
          "0%,100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
