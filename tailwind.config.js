module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-img': "url('img/hero-picture.png')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
