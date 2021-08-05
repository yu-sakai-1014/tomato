const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
      '3xl': '1700px',
    },
  },
  variants: {},
  plugins: [],
}