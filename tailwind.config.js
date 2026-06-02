/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf8f1',
          100: '#f5ecd7',
          200: '#ecd9ab',
          300: '#e0c074',
          400: '#d4a94c',
          500: '#c79434',
          600: '#b07d2a',
          700: '#8f6224',
          800: '#764f24',
          900: '#634322',
        },
        ink: {
          DEFAULT: '#0c0c0d',
          soft: '#1a1a1c',
          muted: '#3a3a3e',
        },
        cream: '#faf7f0',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['Barlow', 'Impact', 'sans-serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.28em',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(120deg, #b07d2a 0%, #e0c074 30%, #f5ecd7 50%, #e0c074 70%, #b07d2a 100%)',
        'gold-sheen': 'linear-gradient(135deg, #8f6224 0%, #d4a94c 45%, #f5ecd7 55%, #c79434 100%)',
      },
      boxShadow: {
        luxe: '0 30px 60px -25px rgba(12, 12, 13, 0.45)',
        gold: '0 18px 40px -18px rgba(176, 125, 42, 0.55)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease forwards',
        shimmer: 'shimmer 6s linear infinite',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        marquee: 'marquee 8s linear infinite',
      },
    },
  },
  plugins: [],
}
