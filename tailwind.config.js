/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        // center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        default: "#1f1f38",
        holy: "#fafafa",
        "holy-blur": "#f2f2f2",
        // dark: "#1e293b",
        "dark-scy": "#293462",
      },
      boxShadow: {
        // "3xl": "0 -5px 10px rgba(0, 0, 0, 0.1)",
        "3xl": "0 5px 15px 0 rgb(0 0 0 / 8%)",
      },
      backgroundColor: {
        // "dark-violet": "#293462",
      },
    },
  },
  plugins: [],
};
