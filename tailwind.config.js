module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        petrol: "#003d66",
        turquiose: "#99dbbd",
        elegantGreen: "#005c4d",
        sunnyYellow: "#ffe885",
        blushingPink: "#ff9e91",
        deepAubergine: "#5e1c47",
        black: "#1c1c1c",
        white: "#ffffff",
        gray: "#808080",
      },
      backgroundImage: (theme) => ({
        "confetti-background": "url(./images/stampix-bg.jpeg)",
      }),
    },
    screens: {
      xxxl: { min: "2040px" },
      // => @media (min-width: 2040px) { ... }

      xxl: { max: "2040px" },
      // => @media (max-width: 2040px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      minxl: { min: "1025px" },
      // => @media (min-width: 1025px) { ... }

      minlg: { min: "769px" },
      // => @media (max-width: 769px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      minmd: { min: "640px" },
      // => @media (min-width: 640px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 768px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  variants: {
    extend: {
      inset: ["responsive", "hover"],
    },
  },
  plugins: [],
};
