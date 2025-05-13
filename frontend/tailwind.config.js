/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#121212', // Slightly softer than pure black
          light: '#424242',  // More neutral gray
          dark: '#0a0a0a',   // Richer dark shade
          grey: '#2d2d2d'   // More balanced gray
        },
        secondary: {
          DEFAULT: '#3a7d0a',  // More mature green
          light: '#4d9e0f',   // Brighter but still professional
          dark: '#2d5f08',    // Deeper shade
        },
        accent: {
          DEFAULT: '#4a7d64',  // Desaturated for elegance
          light: '#5c8d76',     // Subtle light variant
          dark: '#3a6b54',      // More sophisticated dark
        },
        neutral: {
          DEFAULT: '#f5f9f6',  // Cleaner off-white
          dark: '#e8f0ea',     // Slightly darker variant
        },
        info: '#0a7d1a',       // More subdued green
        success: '#4a7d64',    // Matching accent color
        warning: '#d4a53c',    // Muted gold
        error: '#c44c4b',      // Less intense red
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}