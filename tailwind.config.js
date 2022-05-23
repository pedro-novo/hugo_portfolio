const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        270: "270deg",
      },
    },
    screens: {
      xs: "550px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
