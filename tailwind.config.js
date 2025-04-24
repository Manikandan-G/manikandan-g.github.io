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
    extend: {},
  },
  plugins: [],
};
