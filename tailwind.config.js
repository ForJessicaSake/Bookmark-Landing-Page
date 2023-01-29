/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Blue: "#5267df",
        Btntext:"#f5fbff",
        Gray: "#f7f7f7",
        Ash: "#454651",
        Heading: "#232644",
        text:"#8b8c91",
    },
    width: {
      wd: "21rem",
      wth: "29rem",
      width: "27rem",
      wdd: "36rem",
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
}