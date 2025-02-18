/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: "#0e1117",
        lighttext: "#dae0e6",
        linktextlight: "#E6EDF3",
        lightbg: "#fafafa",
        darktext: "#0e1117",
        linktextdark: "#444444",
        navbardark: "#212124",
        navbarlight: "#e4e5f1",
        redtext: "red"
      },
    },
  },
  plugins: [],
};