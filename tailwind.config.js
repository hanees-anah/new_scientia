/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Official Scientia Logo Colors: #00448C (Royal Sapphire Blue) & #F0A400 (Golden Amber)
          primary: '#00448C', // Exact Logo Royal Blue
          'primary-hover': '#003570', // Deep Navy Blue
          'primary-light': '#0854A8', // Bright Sapphire
          accent: '#F0A400', // Exact Logo Golden Amber
          'accent-hover': '#D99400', // Deep Gold
          'accent-light': '#FFBA24', // Warm Sunshine Amber
          tint: '#EFF6FF', // Soft airy sky blue tint
          'tint-soft': '#DBEAFE', // Blue 100
          'accent-tint': '#FFFBEB', // Amber 50
          'accent-tint-soft': '#FEF3C7', // Amber 100
          navy: '#002855', // Deep Royal Charcoal
          'navy-dark': '#001833',
          'navy-light': '#003875',
          blue: '#00448C', // Exact Logo Royal Blue
          'blue-hover': '#003570',
          'blue-light': '#0854A8',
          gold: '#F0A400',
          lavender: '#EFF6FF',
          'lavender-soft': '#DBEAFE',
          bg: '#F8FAFC', // Ultra-light porcelain white canvas
          charcoal: '#0F172A', // Slate 900
          muted: '#475569', // Slate 600
          border: '#E2E8F0', // Clean architectural border
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 40, 85, 0.04), 0 1px 2px -1px rgba(0, 40, 85, 0.04)',
        'card': '0 4px 20px -2px rgba(0, 40, 85, 0.05), 0 2px 6px -1px rgba(0, 40, 85, 0.02)',
        'card-hover': '0 20px 35px -8px rgba(0, 68, 140, 0.12), 0 8px 16px -4px rgba(0, 40, 85, 0.04)',
        'glow-blue': '0 0 30px -5px rgba(0, 68, 140, 0.35)',
        'glow-gold': '0 0 30px -5px rgba(240, 164, 0, 0.35)',
        'glow-accent': '0 0 30px -5px rgba(240, 164, 0, 0.35)',
        'glow-subtle': '0 0 45px -10px rgba(0, 68, 140, 0.12)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'wavy-dot': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '25%': { transform: 'translateY(-10px)' },
          '75%': { transform: 'translateY(4px)' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'pulse-subtle': 'pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 25s linear infinite',
        'wavy-dot': 'wavy-dot 1.2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
