/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        fluidSmall: "repeat(auto-fit, minmax(10rem, 1fr))",
        fluid: "repeat(auto-fit, minmax(20rem, 1fr))",
        fluidMedium: "repeat(auto-fit, minmax(15rem, 1fr))",
        fluidLarge: "repeat(auto-fit, minmax(25rem, 1fr))",
      },
    },
    colors: {
      primary: "#009EC5",
      secondary: "#454545",
      black: "#000000",
      white: "#ffffff",
      lightgray: "#F4F4F6",
      pink: "#EB3F75",
      lowWhite: "#EEEEEE",
      lightBlue: "#F5FCFF",
    },
    screens: {
      md: { max: "1024px" },
      tab: { max: "768px" },
      sm: { max: "500px" },
    },
    keyframes: {
      "open-menu": {
        "0%": { transform: "scale(0)" },
        "80%": { transform: "scale(1.1)" },
        "0%": { transform: "scale(1)" },
      },
      fadeIn: {
        from: {
          opacity: "0",
          transform: "translate3d(0, -20%, 0)",
        },
        to: {
          opacity: "1",
          transform: "translate3d(0, 0, 0)",
        },
      },
      spinY: {
        "0%": {
          transform: "rotateY(0deg)",
        },
        "100%": {
          transform: "rotateY(360deg)",
        },
      },
    },
    animation: {
      "open-menu": "open-menu 0.5s ease-in-out forwards",
      fadeIn: "fadeIn .95s ease-in-out 0s 1 normal none running",
      spinY: "spinY 8s linear infinite",
    },
  },

  plugins: [],
};
