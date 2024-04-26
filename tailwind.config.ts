import type { Config } from "tailwindcss";
const {fontFamily} = require("tailwindcss/defaultTheme")

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#73675A',
        secondary: '#F2DCE4',
        tertiary: {
          dark: '#F26B5E',
          light: '#F2785C'
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
