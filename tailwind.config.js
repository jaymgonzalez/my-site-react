module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-img': "url('img/hero-picture.png')",
      })
    },
    inset: {
      lefty: '49.8%'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
