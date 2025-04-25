/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/**/*.{md,html}",
    "./*.html",
    "./*.md",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        mono: ["DM Mono", "monospace"],
        dosis: ["Dosis", "sans-serif"],
        handwriting: ["Schoolbell", "cursive"],
      },
    },
  },
  plugins: [],
};
