/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg1: "url('https://www.nifafinearts.com/images/appbg.jpg')",
        bg2: "url('https://www.nifafinearts.com/images/artboard2.png')",
        bg3: "url('https://www.nifafinearts.com/images/student-talk.jpg')",
        bg4: `url('https://wallpapercave.com/wp/wp4581479.jpg')`,
      },
      
    },
  },
  plugins: [],
}