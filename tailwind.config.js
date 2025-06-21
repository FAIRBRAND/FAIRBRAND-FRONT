/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#171c5e',
        'antique-gold': '#b28c1c',
        'golden-beige': '#e5d49e',
        'off-white': '#f0f2f5',
      },
      fontFamily: {
        'title': ['"Montserrat Alternates"', 'sans-serif'],
        'body': ['"Open Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
