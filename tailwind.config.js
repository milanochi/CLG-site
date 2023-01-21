/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '760px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        bronzeThick:  '#B97B1B',
        bronzeLight: '#CA8F34',
        lightGray: '#ADABAB'

      },
    },
  },
  plugins: [(require('@tailwindcss/forms'))],
}
