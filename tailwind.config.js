const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        landing: "url('/landing4.gif')",
        landing2: "url('/landing3.gif')",
      },
      fontSize: {
        'responsive-sm': 'clamp(40px, -8.4225352113px + 8.0845070423vw, 200px)',
        'responsive-lg':
          'clamp(60px, -10.4225352113px + 22.0845070423vw, 260px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
