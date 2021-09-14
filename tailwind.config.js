module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        25: '6.25rem'
      }
    },
  },
  variants: {
    extend: {
      brightness: ['hover', 'group-hover'],
      scale: ['hover', 'group-hover'],
    },
  },
  plugins: [],
}
