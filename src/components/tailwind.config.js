/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "variable-collection-black": "var(--variable-collection-black)",
        "variable-collection-blanco": "var(--variable-collection-blanco)",
        "variable-collection-color": "var(--variable-collection-color)",
        "variable-collection-green": "var(--variable-collection-green)",
        "variable-collection-grey": "var(--variable-collection-grey)",
        "variable-collection-red": "var(--variable-collection-red)",
        "variable-collection-yellow": "var(--variable-collection-yellow)",
      },
    },
  },
  plugins: [],
};