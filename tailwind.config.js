const colors = require('tailwindcss/colors') // TO IMPORT LIME

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#f2930d",
        text: "#464139",
        muted: {
          text: "#6d655a",
          bg: "#e8e6e3"
        },
        secondary: {
          100: "#e2e2d5",
          200: "#888883",
        },
        dark: {
          bgPrimary: "#1f2937",
          bgSecondary: "#111827"
        },
        lime: colors.lime,
        orange: colors.orange
      },
      fontFamily: {
        nuni: ["Nunito"]
      }
    },
  },
  variants: {
    extend: {
      translate: ['group-hover']
    },
  },
  plugins: [],
}
