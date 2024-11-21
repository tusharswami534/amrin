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
       
      },
      lineHeight: {
        '120': '120%',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Pacifico: ["Pacifico", 'cursive'],
      }
    },
  },
  plugins: [],
};