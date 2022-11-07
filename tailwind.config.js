/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'backgroundgrayscale': '#35383c',
        'lightBlueSky':'#0098ff',
      },
      spacing: {
        'emojiPostSection': '2.25rem',
        'emojiMarginPostSection': '.4rem',
        'profilePicture' : '2.8rem' ,
      },
      screens: {
        //
        'miniphone': '320px',

        'phone': '470px',

        'phablet': '470px',

        'tablet': '525px',
  
        'minilaptop': '750px',

        'laptop': '1024px',
  
        'desktop': '1280px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
