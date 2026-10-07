/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          900: "#1e3a8a",
        },
        ink: "#0F172A",
        cream: "#FAFAF7",
        gold: "#C9A961",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ['"Instrument Serif"', "serif"],
      },
    },
  },
  plugins: [],
};