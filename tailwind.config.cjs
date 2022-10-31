/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dark-gradint-1": "url('/img/dark_backround.svg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
