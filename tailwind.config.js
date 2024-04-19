/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "sm-max": { max: "640px" },
        // => @media (max-width: 640px) { ... }
      },
      keyframes: {
        navLinkFade: {
          "0%": {
            opacity: 0,
            transform: "translateX(50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },
      },
      animation: {
        navLinkFade: "navLinkFade 1s ease",
      },
    },
  },
  plugins: [],
};
