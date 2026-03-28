/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#11071F', 
        'nav-bg': '#1A0B2E',
        'neon-accent': '#00f3ff', 
      },
      fontFamily: {
        'tech': ['Preahvihear', 'sans-serif']
      }
    },
  },
  plugins: [],
}