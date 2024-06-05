/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1440px',
      },
      fontFamily: {
        'abayia': [ "Abhaya Libre", 'serif'],
       
      },
      colors: {
        'comon': '#60E1CB',
      },
    },
  },
  plugins: [],
}
