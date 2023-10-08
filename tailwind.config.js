/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        Moveright: {
          "0%": { transform: "translateX(0)",opacity:1 },
        
          "100%": { transform: "translateX(100vw)",opacity:1},
        },
        Movedown:{
          "0%": { transform: "translateY(-100vh)"},
        
          "100%": { transform: "translateY(28%)"},
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
