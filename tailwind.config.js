/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx,js}",
    "./src/views/app/**/*.{jsx,js}"
  ],
  theme: {
    colors: {
      'aqua': '#A7F2E4',
      'pale-pink': '#F2D4C2',
      'pale-orange': '#F2D6B3',
      'orange': '#F2C48D',
      'blue': '#91CDF2'
    },
    fontFamily: {
      title: ['Wasted Vindey','sans'],
      subtitle: ['Simple Michael Regular','sans'],
      subitalic: ['Simple Michael Italic','sans'],
      paragraph: ['Standerd Regular','sans']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({
      strategy: 'class' // only generate classes
    }),
    require('@tailwindcss/container-queries'),
  ],
}

