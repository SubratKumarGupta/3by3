/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dark-gradint-1": "url('/img/dark_backround.svg')",
      },
      boxShadow: {
        t: `inset 0px 13px 10px 7px `,
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
