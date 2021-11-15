const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  darkMode: "class", // or 'media' or 'class'
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      colors: {
        teal: colors.teal,
        yellow: colors.yellow,
      },
    },
  },
  plugins: [],
};
