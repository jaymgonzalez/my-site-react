module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-picture': "url('img/hero-picture.jpg')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
