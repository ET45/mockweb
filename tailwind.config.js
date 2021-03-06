/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      rs: "85.875rem",
      rd: "24rem",
    },
    fontFamily: {
      sans: ["sans-serif"],
    },
    fontSize: {
      vtiny: ".700rem",
      bvtiny: ".800rem",
      tiny: ".875rem",
      btiny: ".950rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      dropShadow: {
        vxl: "0rem 0rem 15rem rgba(0, 0, 0, 100)",
      },
      spacing: {
        84: "21rem",
        88: "22rem",
        92: "23rem",
        96: "24rem",
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        120: "30rem",
        160: "40rem",
        168: "42rem",
        180: "45rem",
        200: "50rem",
        400: "100rem",
      },
      margin: {
        50: "12.5rem",
      },
      borderRadius: {
        mdm: "0.25rem",
      },
    },
  },
  plugins: [],
};
