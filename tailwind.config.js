module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        courgette: ["Courgette", "cursive"],
        baskerville: ["LibreBaskerville", "serif"],
      },
      backgroundImage: {
        "lc-main": "url('../public/img/Main.webp')",
        "lc-resto": "url('../public/img/Resto.webp')",
        "lc-rooms": "url('../public/img/Rooms.webp')",
        "lc-stages": "url('../public/img/Stages.jpg')",
        "lc-services": "url('../public/img/Services.jpg')",
        "lc-activites": "url('../public/img/Activites.jpg')",
      },
    },
  },
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: false,
    prefix: "",
    darkTheme: "dark",
    themes: [
      {
        mytheme: {
          primary: "#9d174d",

          secondary: "#828DF8",

          accent: "#F471B5",

          neutral: "#f3f4f6",

          "base-100": "#1c1917",

          info: "#0CA6E9",

          success: "#2BD4BD",

          warning: "#F4C152",

          error: "#FB6F84",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
}
