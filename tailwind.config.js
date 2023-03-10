/** @type {import('tailwindcss').Config} */

// Colors
const background = '#F9F3EA'
const offWhite = '#FBF2EA'
const dark = '#6F3B47'
const ripeMelon = '#FDB2A6'
const sonomaSunset = '#F57A73'
const screamingConfetti = '#E8EC7A'
const dreamyBlue = '#9FAED4'

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-futura-passata)'],
    },
    fontSize: {
      sm: ['14px', '16px'],
      base: ['16px', '20px'],
      lg: ['20px', '20px'],
      xl: ['30px', '30px'],
      '2xl': ['40px', '40px'],
      '3xl': ['50px', '50px'],
      '4xl': ['70px', '70px'],
      '5xl': ['90px', '90px'],
      '6xl': ['110px', '110px'],
      '7xl': ['130px', '130px'],
      '8xl': ['150px', '130px'],
    },
    extend: {
      maxWidth: {
        site: '1300px',
      },
      colors: {
        background,
        offWhite,
        black: dark,
        main: sonomaSunset,
        secondary: ripeMelon,
        blue: dreamyBlue,
        yellow: screamingConfetti,
      },
    },
  },
  plugins: [],
}
