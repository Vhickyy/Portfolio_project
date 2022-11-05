/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      "sm": "650px",
      "md": "968px",
      "lg":"1350px"
    },
    extend: {
      colors:{
        "mainYellow": '#fee302',
        "shade1":'#E8BB09',
        "shade":"#FFB50A",
        "darktext":"#bfbfbf"
      }
    },
  },
  plugins: [],
}
