/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '480px',
        'extrasm': '320px',
        'md': '760px', 
        'lg': '990px', 
        'xl': '1280px', 
        'custom': '1600px', 
      },
      colors: {
          primary: '#FFFFFF',
          secondary: '#EA002A',
          tertiary: '#DFEFFF4D',
          theme: '#F1F3F6ff',
          paragraphcolor :'#0e4658'
      },
    },
  },
  plugins: [],
}