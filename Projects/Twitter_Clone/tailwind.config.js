/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./js/app.js"],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ["Roboto", "sans-serif"],
      },

      fontSize: {
        xs: "13px",
        base: "15px",
        lg: "19px",
        xl: "20px",
      },

      colors: {
        brandColor: "#1DA1F2",
        brandHoverColor: "#1A91DA",
        bgColor: "#15202B",
        textColor: "#E1E8ED",
        borderColor: "#2F3336",
        lightGray: "#6E767D",
        darkGray: "#2D3741",
        iconHoverColor: "#162D40",
      },
    },
  },
  plugins: [],
};
