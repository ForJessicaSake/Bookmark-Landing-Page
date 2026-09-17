/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Blue: "#5267df",
        Btntext: "#f5fbff",
        Gray: "#f7f7f7",
        Ash: "#454651",
        Heading: "#232644",
        text: "#8b8c91",
        down: "#5266df",
        downBtn: "#f85a57",
        downText: "#e9f3fc",
        Footer: "#242946",
      },
      width: {
        wd: "22rem",
        wdh: "23rem",
        HeroBtn: "26rem",
        wth: "29rem",
        width: "26rem",
        Extensionwidth: "34rem",
        Downwidth: "32rem",
        wdd: "36rem",
        Featureswidth: "44rem",
      },
      height: {
        hd: "25rem",
      },
      fontFamily: {
        font: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
