module.exports = {
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var"],
      },
      colors: {
        primary: {
          blue: "#53aec7",
          bluest: "#182048",
          pink: "#d01c8e",
          lightblue: "#747A99",
        },
        secondary: {
          blue: "#3497FD",
        },
        dark: "#454f63",
        light: "#ebecf0",
        lightest: "#f5f6fa",
        purple: "#701EFF",
        positive: "#701EFF",
        negative: "#701EFF",
        warning: "#701EFF",
        info: "#701EFF",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  purge: {
    content: [
      "./*.html",
      "./resources/**/*.html",
      "./resources/**/*.js",
      "./resources/**/*.jsx",
      "./resources/**/*.ts",
      "./resources/**/*.tsx",
      "./resources/**/*.php",
      "./resources/**/*.vue",
      "./resources/**/*.twig",
      "./vendor/wireui/wireui/resources/**/*.blade.php",
      "./vendor/wireui/wireui/ts/**/*.ts",
      "./vendor/wireui/wireui/src/View/**/*.php",
    ],
    options: {
      defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
      whitelistPatterns: [/-active$/, /-enter$/, /-leave-to$/, /show$/],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
