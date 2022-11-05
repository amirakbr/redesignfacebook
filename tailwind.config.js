/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'backgroundgrayscale': '#35383c',
        'lightBlueSky':'#0098ff',
      },
      spacing: {
        'emojiPostSection': '2.25rem',
        'emojiMarginPostSection': '.4rem',
      },
      screens: {
        'tablet': '525px',
  
        'laptop': '1024px',
  
        'desktop': '1280px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
