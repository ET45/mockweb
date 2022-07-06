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
      vtiny: ".700rem",
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
      spacing: {
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '112': '28rem',
        '120': '30rem',
        '160': '40rem',
        '168': '42rem', 
        '180': '45rem',
        '200': '50rem',
        
      },
      margin: {
        '50':'12.5rem',
      }
    },
  },
  plugins: [],
}
