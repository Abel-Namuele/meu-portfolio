/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'custom-bg': '#000e46',
        'secondary': '#000e462a',
      },
      colors:{
        'custom': "#849cfa"
      }
    },
  },
  plugins: [],
}

