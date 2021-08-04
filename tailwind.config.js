const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
    },
  },
  variants: {},
  plugins: [],
}