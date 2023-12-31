import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#D4D4D4",
        secondary: "#512B81",
        bgPrimary: "#1A1A1A",
        bgSecondary: "#282828",
      },
      fontFamily: {
        shadow: ["'Shadows Into Light'", "curvsive"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
