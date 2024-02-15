/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {



    extend: {
      colors:{
        'customNormalOrange' : 'hsl(26, 100%, 55%)',
        'customPaleOrange' : '(25, 100%, 94%)',
        'customPaleOrange' : 'hsl(25, 100%, 94%)',
        'customGray' : 'hsl(219, 9%, 45%)',
        'customLightGray': 'hsl(223, 64%, 98%)'
      },
      fontFamily:{
        'np' : '"Kumbh Sans", sans-serif;'
      },
      grayscale:{
        '50': '50%'
      }
    },
  },
  plugins: [],
}

