/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        blue: '#02B8CF',
        orange: '#F26B35',
        'teal': "#0593A5",
        'teal-dark': "#0F4C59",
        'abode-dark': "#151616",
        'blue-light': '#0593A5',
        'green-light': '#D4F0F3',
        'abode-white': '#EDFCFF'
    },
  },
  plugins: [],
}
}
