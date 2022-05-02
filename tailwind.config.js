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
          primary: "#803",
          // "primary-focus": "#3ABFF8",
          // "primary-content": "#FFF",

          secondary: "#828DF8",
          // "secondary-focus": "#828DF8",
          // "secondary-content": "#828DF8",

          accent: "#F471B5",
          // "accent-focus": "#F471B5",
          // "accent-content": "#F471B5",

          neutral: "#e7e5e4",
          // "neutral-focus": "#1D283A",
          // "neutral-content": "#803",

          "base-100": "#FFF",
          // "base-200": "#0F1729",
          // "base-300": "#0F1729",
          "base-content": "#803",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
