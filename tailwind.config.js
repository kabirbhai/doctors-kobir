/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  themes: [
    {
      DoctorsKobirTheme: {
        primary: "#0FCFEC",
        secondary: "#19D3AE",
        accent: "#3A4256",
        warning: "red",
      },
    },
  ],
};
