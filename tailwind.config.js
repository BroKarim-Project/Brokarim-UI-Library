import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        greenBrutal: '#d8ff4b',
      },
      // fontFamily: {
      //   oswald: ['Oswald', 'sans-serif'],
      // },
    },
  },
  plugins: [],
};
