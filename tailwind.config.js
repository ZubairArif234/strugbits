/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "4.5rem",
    },
    extend: {
      backgroundImage: {
        banner: "url('/src/assets/pizza.jpg')",
      }
    },
  },
  plugins: [],
}

