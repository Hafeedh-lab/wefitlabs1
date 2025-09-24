import defaultTheme from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2D7FF9',
        'energy-green': '#2ECC71',
        'bold-red': '#E74C3C',
        'dark-charcoal': '#1C1C1E',
        'cool-gray': '#A0A0A0',
        'light-white': '#F9FAFB',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        mono: ['"Source Code Pro"', ...defaultTheme.fontFamily.mono],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 20% 20%, rgba(45, 127, 249, 0.35) 0, transparent 45%), radial-gradient(circle at 80% 30%, rgba(46, 204, 113, 0.25) 0, transparent 40%), radial-gradient(circle at 50% 80%, rgba(45, 127, 249, 0.2) 0, transparent 55%)',
      },
      boxShadow: {
        card: '0 20px 60px -25px rgba(12, 20, 38, 0.45)',
        'card-hover': '0 30px 70px -25px rgba(12, 20, 38, 0.65)',
      },
    },
  },
  plugins: [typography],
}
