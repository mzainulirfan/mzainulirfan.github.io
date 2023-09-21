/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
      },
      colors: {
        "black-222": "#222222",
        "gray-222": "#6B7177",
      },
    },
  },
  plugins: [],
};
