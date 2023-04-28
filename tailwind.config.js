/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
		extend: {
		  colors: {
        'light-blue': '#E6ECF5',
        'dark-blue': '#07469C',
        'blue': '#0099E1',
        'white': '#FFFFFF',
        'dark-pink': '#EF3061',
        'dark-gray': '#333333',
        'gray': '#757575',
        'light-gray': '#F2F2F2',
        'black': '#000000' 
		},
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1280px',
    },
    fontFamily:{
      'nunito': ['nunito'],
      'mulish' : ['mulish'],
    }
  },
  plugins: [],
  }
});


