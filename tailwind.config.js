/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F4C75",   // bleu pétrole
        secondary: "#F59E0B", // orange maîtrisé
      },
    },
  },
  plugins: [],
};
