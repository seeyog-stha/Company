/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        Moveright: {
          "0%": { transform: "translateX(0)",opacity:0.8 },
        
          "100%": { transform: "translateX(100vw)",opacity:0.8},
        },
        Movedown:{
          "0%": { top:"-100vh"},
        
          "100%": { top:"30%"},
        }
      },
      animation: {
        Moveright: "Moveright 5s ease-in-out 1 ",
        Movedown:"Movedown 5s ease-in-out 1 ",
      },
    },
  },
  plugins: [require("daisyui")],
};
