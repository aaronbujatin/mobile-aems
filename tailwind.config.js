/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#ff6600', // Replace this with your desired primary color
        'active-icon': '#E8AAAD', // Replace this with your desired active icon color
      },
    },
  },
  plugins: [],
};
