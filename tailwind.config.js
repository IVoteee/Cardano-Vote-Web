/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.tsx", 
  "./pages/**/*.tsx",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./src/**/*.{js,jsx,ts,tsx}", 
  "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
],
  theme: {
    extend: {},
  },
  plugins: [
  ],
}
