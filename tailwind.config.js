module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
       },
       colors: {
        glennOrange: '#C04830',
        glennNavy: '#191F2E',
        glennGrey: '#9CA1A0',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
