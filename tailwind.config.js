/** @type {import('tailwindcss').Config} */

// Fonts

// Colors
const background = '#F5F5F5'
const offWhite = '#FBF2EA'
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
    extend: {
      colors: {
        background,
        offWhite,
        main: sonomaSunset,
        secondary: ripeMelon,
        blue: dreamyBlue,
        yellow: screamingConfetti,
      },
    },
  },
  plugins: [],
}
