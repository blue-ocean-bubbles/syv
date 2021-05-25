module.exports = {
  darkMode: false, // or 'media' or 'class',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
      },
    },
    minWidth: {
      '1/6': '16.6666667%',
    },
    maxWidth: {
      '1/6': '16.6666667%',
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
