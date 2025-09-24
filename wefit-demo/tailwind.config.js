/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2D7FF9',
        'energy-green': '#2ECC71',
        'bold-red': '#E74C3C',
        'dark-charcoal': '#1C1C1E',
        'cool-gray': '#A0A0A0',
        'light-white': '#F9FAFB'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'code': ['Source Code Pro', 'monospace']
      }
    },
  },
  plugins: [],
}
