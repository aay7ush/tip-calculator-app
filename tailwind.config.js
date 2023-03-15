/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Space Mono", "monospace"],
      },
      colors: {
        "cyan-400": "hsl(172, 67%, 45%)",
        "cyan-500": "hsl(183,79%,24%)",
        "cyan-600": "hsl(183, 100%, 15%)",
        "grayish-cyan-200": "hsl(189, 41%, 97%)",
        "grayish-cyan-300": "hsl(185, 41%, 84%)",
        "grayish-cyan-400": "hsl(184, 14%, 56%)",
        "grayish-cyan-500": "hsl(186, 14%, 43%)",
      },
    },
  },
  plugins: [],
}
