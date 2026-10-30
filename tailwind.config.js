/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        velvet: {
          50: '#f8f6ff',
          100: '#f1ecfe',
          200: '#e5dcfe',
          300: '#d2bffc',
          400: '#b896fa',
          500: '#9e6bf5',
          600: '#8945ed',
          700: '#7530d9',
          800: '#6127b5',
          900: '#221544',
          950: '#0d0722',
          cosmos: '#080514'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      boxShadow: {
        'glass-sm': '0 4px 20px -2px rgba(168, 85, 247, 0.08)',
        'glass-md': '0 8px 30px -4px rgba(147, 51, 234, 0.15)',
        'glass-glow': '0 0 35px -5px rgba(168, 85, 247, 0.25)',
        'glass-purple': '0 8px 32px 0 rgba(31, 15, 68, 0.37)',
      }
    },
  },
  plugins: [],
}
