/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/assets/stylesheets/**/*.{html,css, md}",
    "./public/src/**/*.{html,css}",
    "./public/*.{html,css}",
    "./public/assets/**/*.{html,css}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
