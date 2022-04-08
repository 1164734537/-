module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {
      colors: {
        main: {
          nav:'#303133'
        }
      },
    },
    minWidth: {
      '1/4': '25%'
    }
  },
  plugins: [],
}
