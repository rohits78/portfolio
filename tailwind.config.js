/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      // You can add custom dark mode colors here
      colors: {
        dark: {
          primary: '#1a1a2e',
          secondary: '#16213e',
          accent: '#0f3460',
        }
      }
    },
  },
  plugins: [],
}