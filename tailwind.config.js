/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          '"JetBrains Mono"',
          "Menlo",
          "Monaco",
          '"Courier New"',
          "monospace",
        ],
        fira: ['"Fira Code"', "monospace"],
      },
      colors: {
        terminal: {
          bg: "#1e1e1e",
          text: "#f8f8f2",
          prompt: "#50fa7b",
          command: "#8be9fd",
          output: "#f1fa8c",
          error: "#ff5555",
        },
        editor: {
          bg: "#282a36",
          line: "#44475a",
          selection: "#44475a",
          comment: "#6272a4",
          keyword: "#ff79c6",
          function: "#50fa7b",
          variable: "#f8f8f2",
          string: "#f1fa8c",
          number: "#bd93f9",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
