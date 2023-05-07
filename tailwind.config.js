/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgLight: "#FFFFFF",
        fontLight: "#4E4949",
        secondaryLight: "#D9D9D9",
        logoBlue: "#0076DD",
        logoGreen: "#00CDE9",
      },
    },
  },
  plugins: [],
};
