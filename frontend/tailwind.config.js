/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/****/***/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        'auth-bg': 'url(../public/auth-bg.png)',
      },
      colors: {
        "primary" : "#665ACF",
        "t-red": "#F2383A",
        "t-green": "#149D52",
        "t-orange": "#F9A644",
        'primary-font':"#1F384C",
      }
    },
  },
  plugins: [],
};
