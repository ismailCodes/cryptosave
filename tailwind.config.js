module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playFair: ["Playfair Display", "serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
    plugins: [],
  },
};
