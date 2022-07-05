/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans':['sans-serif']
    },
    fontSize: {
      tiny: ".875rem",
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
      margin: {
        '50':'12.5rem',
      }
    },
  },
  plugins: [],
}
