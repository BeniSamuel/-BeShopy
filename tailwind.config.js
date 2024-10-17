/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto Slab"', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        rufina: ['"Rufina"', 'serif']
      }
    },
  },
  plugins: [],
}

