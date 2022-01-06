module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "500px",
      // => @media (min-width: 640px) { ... }

      md: "600px",
      // => @media (min-width: 768px) { ... }
      md2: "680px",
      lg: "988px",
      // => @media (min-width: 1024px) { ... }

      xl: "1265px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
