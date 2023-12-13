/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF7F50',
        'primary-hover': '#FF956D',
        'menu': '#FFBA3B',
        'menu-hover': '#FFC156',
        'white-1': '#FFFFFF',
        'white-2': '#FAFAFA',
        'black-1': '#2A2A2A',
        'black-2': '#1F1F1F',
        'black-3': '#2E2E2E',
        'gray-1': '#444444',
        'gray-2': '#383838',
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

