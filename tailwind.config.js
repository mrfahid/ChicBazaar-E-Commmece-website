/** @type {import('tailwindcss').Config} */
const {
  default: react
} = require('@vitejs/plugin-react-swc');
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1D4ED8', // Adjust this color to your primary color #FEA928
          light: '#60A5FA', // Optional: lighter shade
          dark: '#1E40AF', // Optional: darker shade
        },
        secondary: {
          DEFAULT: '#D97706', // Adjust this color to your secondary color
          light: '#FBBF24', // Optional: lighter shade
          dark: '#B45309', // Optional: darker shade
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    react(),
  ],
};