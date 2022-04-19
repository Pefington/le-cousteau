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
      colors: {
        "lc-red": "#990022",
      },
    },
  },
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: false,
    prefix: "",
    darkTheme: "dark",
    themes: [
      {
        mytheme: {
          primary: "#770022",
          secondary: "#D75050",
          accent: "#D59B6C",
          neutral: "#e7e5e4",
          "base-100": "#F2F2F2",
          info: "#42AEBD",
          success: "#489380",
          warning: "#EB8014",
          error: "#E01A2E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
