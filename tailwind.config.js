module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          blue: "#3E4096",
          gray: "#777879",
          placeHolder: "#C4C4C4",
        },
        secondary: {
          input: " #C4C4C429",
          blue: "#E5E5E5",
          yellow: "#FFCC2966",
          black: "#484848",
          gray: "#3E409633",
        },
        tetiary: {
          gray: "#6A6A6A",
          yellow: "#FFCC29",
          brown: "#E1E1E1",
        },
      },
      gridTemplateColumns: {
        maincolumns: "19.25rem repeat(8, minmax(0, 1fr))",
      },
      fontFamily: {
        Montserrat: ["Montserrat"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
