/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Inclui todas as páginas
    "./src/**/*.{js,ts,jsx,tsx}", // Inclui todos os componentes
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#ffffff",
        dark: "#111827",
      },
      fontFamily: {
        sans: ["GeistMonoVF", "sans-serif"], // Nome das suas fontes
      },
      spacing: {
        "3rem": "3rem",
        "5rem": "5rem",
        "10rem": "10rem",
      },
    },
  },
  plugins: [],
};
