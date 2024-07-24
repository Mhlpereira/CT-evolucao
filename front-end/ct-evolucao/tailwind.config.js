/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primeira': '#F5F7F8',
        'segunda': '#F4CE14',
        'terceira': '#379777',
        'quarta': '#45474B'
      },
      backgroundImage: {
        pattern: 'url(/logo-fenix.svg)'
      }
    },

  },
  plugins: [],
}