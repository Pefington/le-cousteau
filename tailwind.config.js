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
    themes: [],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
}
