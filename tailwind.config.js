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
      'size1':'20px',
    },
    extend: {
      margin: {
        '50':'200px',
      }
    },
  },
  plugins: [],
}
