/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: "rgb(5, 194, 100)",
        customGreen50: "rgb(239 253 245)",
        customGreen100: "rgb(217 251 232)",
        customGreen500: "rgb(0 193 106)",
        customGreen600: "rgb(0 161 85)",
      },
    },
  },
  plugins: [],
};
