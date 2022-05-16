const darkTheme = require("shiki/themes/github-dark-dimmed.json");
const lightTheme = require("shiki/themes/github-light.json");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: [
        "Avenir",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    extend: {
      colors: {
        dark: "#171717",
        black: "#000000",
        white: "#FFFFFF",
        "code-background": lightTheme.colors["editor.background"],
        "code-bar-background": lightTheme.colors["titleBar.inactiveBackground"],
        "code-dark-background": darkTheme.colors["editor.background"],
        "code-dark-bar-background":
          darkTheme.colors["titleBar.inactiveBackground"],
        text: "#334155",
        "text-dark": "#C2CFE1",
        divider: "#4E5D72",
        "divider-dark": "#514e5b",
        primary: "#C854FF",
        button: "#94A3B8",
        "button-dark": "#20272C",
        icon: "#BFBFBF",
        search: "#F4F6F8",
      },
      lineHeight: {
        content: "28px",
      },
      borderWidth: {
        button: "1.8px",
      },
      screens: {
        lg: "1120px",
        md: "940px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
