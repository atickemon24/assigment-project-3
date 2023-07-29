/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      spacing: {
        '290px': '290px',
        '90px' :'90px',
        '100px' :'100px',
        '300px' :'300px',
  
      },
      opacity: {
        '67': '.67',
      }
    },
  },
  plugins: [],
}
