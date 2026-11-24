/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#080312', 
        'nav-bg': '#120726',
        'neon-accent': '#00f3ff', 
        'purple-primary': '#a855f7',
        'purple-glow': '#9333ea',
        'purple-dark': '#0d0318',
        'card-bg': '#11071F',
      },
      fontFamily: {
        'sans': ['"Be Vietnam Pro"', 'sans-serif'], 
        'mono': ['"Space Mono"', 'monospace'],
        'tech': ['Preahvihear', 'sans-serif']
      }
    },
  },
  plugins: [],
}
