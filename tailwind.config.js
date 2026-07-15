/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          light: '#1b3254',
          DEFAULT: '#0B1F3A',
          dark: '#050f1d',
        },
        steel: {
          light: '#707c8d',
          DEFAULT: '#5B6573',
          dark: '#464f5b',
        },
        brandorange: {
          light: '#ff8c3a',
          DEFAULT: '#F97316',
          dark: '#c2410c',
        },
        lightgray: '#f3f4f6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
