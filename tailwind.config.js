/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themePrimaryColor: '#EFF1F3',
        themeSecondaryColor: '#272727',
      }
    },
  },
  plugins: [],
}

