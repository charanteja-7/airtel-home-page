/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    extend: {
      colors:{
        'leftside' : 'rgb(41, 44, 49)'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(139.4deg, #bfd7ff 28.54%, #fbd3f4 104.43%)',
      },
    },
  },
  plugins: [],
}

