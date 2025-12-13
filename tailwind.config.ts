import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#faf9f6",
        olive: "#4a5d3f",
        "dark-green": "#2d3b2a",
        "light-green": "#e8efe6",
        "accent-gold": "#d4af37",
      },
    },
  },
};

export default config;
