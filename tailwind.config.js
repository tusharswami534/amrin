/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#70ff00',
        dark: '#161616',
        light: '#e0e0e0',
        'dark-gray': '#828282',
        'light-gray': '#f2f2f2',
        'medium-gray':'#4f4f4f',
      },
      fontSize:{
        xsm: '26px',
        medium: '33px',
        xxxl: '50px',
        xxl:'49px'
      },
      lineHeight: {
        xl: '33px',
        xxl:'91px',
      },
      screens: {
        lg: '1025px',
        md: '770px',
        xsm:'435px',
      },
      maxWidth: {
        xxl: '1200px',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        courier: ['Courier-prime', 'sans-serif'],
      }
    },
  },
  plugins: [],
};