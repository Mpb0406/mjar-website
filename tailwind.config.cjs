/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "#2D2D3E",
        secondary: "#571923",
        light: "#fff",
        dark: "#0F0F1C",
        info: "#B8B8B8",
      },
    },
  },
  plugins: [],
};
