/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js,ts,jsx,tsx}", // Include all files in src folder
  "./index.html",
  "./src/pages/*.{html}",
];
export const theme = {
  container: {
    padding: {
      DEFAULT: "0",
      sm: "0",
      lg: "0",
      xl: "0",
      "2xl": "0",
    },
  },

  extend: {
    keyframes: {
      slideUp: {
        "0%": { transform: "translateY(100%)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      slideDown: {
        "0%": { transform: "translateY(0)", opacity: "1" },
        "100%": { transform: "translateY(-100%)", opacity: "0" },
      },
    },
    animation: {
      slideUp: "slideUp 0.5s ease-out",
      slideDown: "slideDown 0.5s ease-in",
    },
    fontSize: {
      header: "70px", // Custom size for headers
      subheader: "38px", // Custom size for subheaders
      base: "14px", // Base size
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    colors: {
      primary: "#333333",
      secondary: "#ffffff",
      accent: "#612727",
    },
    fontFamily: {
      sans: ["Quattrocento", "serif"],
      body: ["Quattrocento", "serif"], // Default body font
      heading: ["Quattrocento", "serif"], // Default heading font
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2560px",
    },
    height: {
      header: "400px",
      card: "260px",
      button: "80px",
      1601: "601px",
    },
    width: {
      card: "260px",
      button: "288px",
    },
    maxHeight: {
      header: "584",
    },
  },
};
export const plugins = [
  require("@tailwindcss/forms"),
  require("@tailwindcss/typography"),
  require("@tailwindcss/aspect-ratio"),
];
