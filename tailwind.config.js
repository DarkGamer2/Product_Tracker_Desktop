/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["oswald", "system-ui"],
        bebasNeue:["Bebas Neue", "system-ui"],
      },
      colors: {
        purple: "#7b00ff",

        white: "#e4ebe5",
        red: "#e91e63",
        blue: "#035efc",
        smokeWhite: "#cfcdcc",
        black: "#000000",
        darkGray: "#363232",
        darkGrayAlt: "#4a4545",
        darkGrayAlt2: "#6b6a6a",
        pink: "#fc03d3",
      },
    },
  },
  plugins: [],
};
