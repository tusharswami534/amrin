/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'soft-blue': '#7477FF',
        'black-pearl' : '#0F172A',
      'tealish-blue' : '#1E293B'
      },
      fontSize:{
        '4xl' : '35px',
        '7xl' : '75px'
      },
      lineHeight: {
        '120': '120%',
        '150': '150%',
        '180': '180%',
        '200': '200%',
        '225': '225%',
      },
      screens: {
        lg : '992px',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Pacifico: ["Pacifico", 'cursive'],
      }
    },
  },
  plugins: [],
};