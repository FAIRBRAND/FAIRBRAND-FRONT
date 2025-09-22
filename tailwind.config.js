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
        primary: "var(--color-primary)",
        "antique-gold": "var(--color-antique-gold)",
        "golden-beige": "var(--color-golden-beige)",
        "off-white": "var(--color-off-white)",
        "brand-blue": "var(--color-brand-blue)",
      },
      fontFamily: {
        title: ['"Montserrat Alternates"', "sans-serif"],
        body: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
