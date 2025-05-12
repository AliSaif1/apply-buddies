/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000', // Black
          light: '#4d4d4d',
          dark: '#1a1a1a',
          grey: '#2e2e2e'
        },
        secondary: {
          DEFAULT: '#8dfd05', // shiny green
          light: '#b7ff66',
          dark: '#4c7300',
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