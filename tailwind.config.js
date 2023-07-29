/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      spacing: {

        '100px' :'100px',
        '300px' :'300px',
        '53px' :'53px',
        '214px' :'214px',
        
      },
      opacity: {
        '67': '.67',
      },
      width: {
        '32': '2rem',
      },
      colors: {
        'bg-first': '#F85559a',
        'regal-blue': '#243c5a',
        'regal-blue': '#243c5a',
        'regal-blue': '#243c5a',
        'regal-blue': '#243c5a',
      },
      screens: {
        'mobile': '640px',
        // => @media (min-width: 340px) { ... }
  
        'tablet': '1024px',
        // => @media (min-width: 640px) { ... }
  
    },
  },

},
  plugins: [],
}

