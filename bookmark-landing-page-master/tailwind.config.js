/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./js/animation.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
