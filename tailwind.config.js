/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './pages/**/*.{html,js}',
    "./src/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#181818',
        'orange': '#ff4a17',
      }
    },
  },
  plugins: [ ]
}

