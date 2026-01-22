/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        "2xl": "1.25rem"
      },
      boxShadow: {
        soft: "0 8px 24px -12px rgba(15, 23, 42, 0.35)",
        lift: "0 14px 32px -18px rgba(30, 41, 59, 0.45)"
      },
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        accentStrong: "rgb(var(--color-accent-strong) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["'Pretendard'", "'Inter'", "system-ui", "sans-serif"]
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem"
      }
    }
  },
  plugins: []
};
