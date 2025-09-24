import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
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
        sans: ['"Poppins"', 'sans-serif'],
        mono: ['"Source Code Pro"', 'monospace']
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0,0,0,0.1)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.15)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
