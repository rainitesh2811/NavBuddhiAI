module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
  extend: {
    fontFamily: {
      space: ['"Space Grotesk"', 'sans-serif'],
    },
  },
},
  plugins: [
    require("tw-animate-css")
  ],
};
