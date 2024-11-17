import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      primary: "#2B251E",
      secondary: "#F2DAB4",
      third: "#DECFBE",
    },
    extend: {
      fontFamily: {
        'sans': ['"Platypi"', ...defaultTheme.fontFamily.sans],
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [],
};
