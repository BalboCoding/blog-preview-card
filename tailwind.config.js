/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        customYellow:"hsl(47, 88%, 63%)",
        customWhite: "hsl(0, 0%, 100%)",
        customGray500: "hsl(0, 0%, 42%)",
        customGray950: "hsl(0, 0%, 7%)",
      },
      fontFamily:{
        sans: ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'body': {
          margin: '0',
          padding: '0',
          'box-sizing': 'border-box',
        },
      });
    },
  ],
}

