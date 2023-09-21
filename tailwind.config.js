/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "grey-201": "#3D3D3D",
        "grey-202": "#100F0F",
      },
    },
  },
  plugins: [],
};
