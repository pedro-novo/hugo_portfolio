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
    screen: {
      xs: "220px",
    },
  },
  plugins: [],
};
