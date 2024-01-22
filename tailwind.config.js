/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#0a192f', // Dark blue
        'dark-secondary': '#112240', // Slightly lighter blue
        'dark-accent': '#7f5af0', // Vibrant purple
        'dark-text': '#ccd6f6', // Light grey for text
      }
    },
  },
  plugins: [],
}

