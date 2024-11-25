/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/****/***/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        'auth-bg': 'url(../img/auth-bg.png)',
      },
      colors: {
        primary: '#665ACF',
        't-red': '#F2383A',
        't-green': '#149D52',
        't-orange': '#F9A644',
        'primary-font': '#1F384C',
        'secondary-font': '#6F7482',
      },
    },
  },
  plugins: [],
};
