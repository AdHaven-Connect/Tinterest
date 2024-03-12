/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js,jsx}"],
  theme: {
    container: {
      padding: '32px',
      center: true
    },
    screens: {
      mobile: {'min': '319.99px', 'max': '759.99px'},
      tablet: {'min': '759.99px','max': '1199.99px'},
      desktop: {'min': '1199.99px'}
    },
    extend: {
      colors: {
        'grey': '#7D7D7D',
        'cloud': '#3B82F6'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

