/** @type {import('tailwindcss').Config} */
const pxToRem = (px,base=16) => `${px/base}rem`
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
      maxWidth:{
        "minsm":pxToRem(329),
        "maxmd":pxToRem(386),
      },
      minHeight:{
        "minsm":pxToRem(502),
        "minmd":pxToRem(524)
      },
      fontSize:{
        "12px":pxToRem(12),
        "14px":pxToRem(14),
        "20px":pxToRem(20),
        "24px":pxToRem(24),
        "16px":pxToRem(16)
      }
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

