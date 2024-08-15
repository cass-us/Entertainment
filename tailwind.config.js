/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': {
          200: '#D9D9D9',
          600: '#D9D9D9',
        },
      },
    },
  },
  
  plugins: [],
}