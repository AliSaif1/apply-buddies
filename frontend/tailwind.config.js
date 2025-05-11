/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3A5A78', // Deep academic blue
          light: '#4B6B8A',
          dark: '#2A4A68',
        },
        secondary: {
          DEFAULT: '#E9B44C', // Golden opportunity
          light: '#FAC55D',
          dark: '#D8A33B',
        },
        accent: {
          DEFAULT: '#5B9279', // Growth green
          light: '#6CA38A',
          dark: '#4A8168',
        },
        neutral: {
          DEFAULT: '#F5F7FA', // Light background
          dark: '#E1E4E8',
        },
        info: '#4C8BF5',
        success: '#5B9279',
        warning: '#E9B44C',
        error: '#E15554',
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