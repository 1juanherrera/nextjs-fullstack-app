/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
		extend: {
		  colors: {
        'light-blue': '#E6ECF5',
        'dark-bue': '#07469C',
        'blue': '#0099E1',
        'white': '#FFFFFF',
        'dark-pink': '#EF3061',
        'dark-gray': '#333333',
        'gray': '#757575',
        'ligth-gray': '#F2F2F2'
		},
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
  },
  plugins: [],
  }
};


