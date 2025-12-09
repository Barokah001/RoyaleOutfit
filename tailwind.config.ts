/** @type {import('tailwindcss').Config} */
module.exports = {
  // Use the 'class' strategy for dark mode (if needed later)
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // --- CUSTOM FASHION STORE COLORS ---
        "nigerian-olive": "#556B2F", // Your Primary Olive Green
        "light-green-50": "#F7FDF7", // Your Off-White / Very Light Green

        // --- SHADCN BASE COLORS (THEMED) ---
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "var(--light-green-50)", // Set background to light-green-50
        foreground: "hsl(var(--foreground))", // Default text color

        primary: {
          DEFAULT: "var(--nigerian-olive)", // Primary color for buttons/accents
          foreground: "hsl(var(--primary-foreground))", // White text on olive
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        // ... (rest of Shadcn colors: destructive, muted, accent, popover, card)
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        // standard Shadcn keyframes
      },
      animation: {
        // standard Shadcn animations
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
