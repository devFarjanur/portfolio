/** @type {import('tailwindcss').Config}*/
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1536px",
        "xl": "1280px",
        "lg": "1024px",
        "sm": "640px",
        "md": "768px",
      },
      maxWidth: "100%",
    },

    screens: {
      "2xl": { max: "1536px" },
      // => @media (max-width: 1535px) { ... }

      "xl": { max: "1280px" },
      // => @media (max-width: 1279px) { ... }

      "lg": { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      "md": { max: "768px" },
      // => @media (max-width: 767px) { ... }

      "sm": { max: "640px" },
      // => @media (max-width: 639px) { ... }
      "exsm": { max: "380px" },
    },
    extend: {
      colors: {
        "text-yellow-500": "#ffc312",
      },
    },
  },
  plugins: [],
};
