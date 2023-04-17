/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily : {
      nunito : ['Nunito Sans', 'sans-serif'],
      sans : ['Source Sans Pro', 'sans-serif'],
    },
    backgroundImage: {
      'movie-detail-bg': "url('/src/assets/images/movie-bg.png')",
    }
  },
  plugins: [],
}
