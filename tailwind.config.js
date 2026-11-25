/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#09090F',
        'nav-bg': '#0D0E16',
        'card-bg': '#11121A',
        'neon-accent': '#38BDF8',
        'purple-primary': '#818CF8',
        'purple-glow': '#6366F1',
        'purple-dark': '#0D0E16',
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
