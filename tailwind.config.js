/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], theme: {

    extend: {
      fontFamily: {
        mono2: ['Rokkitt', 'monospace'],
        sans2: ['Mulish', 'sans-serif'],
        sans3: ['Bai Jamjuree', 'sans-serif'],
        sans4: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata'],

      },
      colors: {
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
      },
      letterSpacing: {
        widest: '.3em',
      },

    },
  },
  plugins: [],
}

