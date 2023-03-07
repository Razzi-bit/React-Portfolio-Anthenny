/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      main: "#4F5664",
      detailsColor: "#61DAFB",
      detailsColor2: "#16819E",
      grayDeatils: "#919191",
      mainText: "#fff",
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
      Mono: ["'PT Mono', monospace"],
    },
    screens: {
      sm: "640px",
      tablet: "900px",
      md: "1024px",
      lg: "1280px",
    },
  },
  plugins: [],
};
