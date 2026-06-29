/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '992px',
    },
    extend: {
      screens: {
        'xl': '1024px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#915eff',
        secondary: '#00d4ff',
        dark: '#050816',
      },
    },
  },
  plugins: [],
}
