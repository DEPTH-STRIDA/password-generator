/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#EB1B1A',
        'red-header': '#F01C1B',
        'primary-white': '#E2E2E2',
        'primary-green': '#55B718',
        'primary-gray': '#444444',
        'primary-black': '#1C1C1C',
      },
      fontFamily: {
        'Troika': ['Troika', 'sans-serif'],
        'Cattedrale': ['Cattedrale', 'sans-serif'],
        'Cydre': ['Cydre', 'sans-serif'],
      },
      boxShadow: {},
    },
    screens: {},
  },
  plugins: [],
};
