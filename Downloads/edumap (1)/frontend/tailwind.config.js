/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-background",
    "text-foreground",
    "bg-card",
    "text-card-foreground",
    "bg-primary",
    "text-primary",
    "border-border",
    "bg-secondary",
    "text-muted-foreground",
  ],
  theme: {
    extend: {
      colors: {
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",

        card: "oklch(var(--card))",
        "card-foreground": "oklch(var(--card-foreground))",

        primary: "oklch(var(--primary))",
        "primary-foreground": "oklch(var(--primary-foreground))",

        secondary: "oklch(var(--secondary))",
        "secondary-foreground": "oklch(var(--secondary-foreground))",

        muted: "oklch(var(--muted))",
        "muted-foreground": "oklch(var(--muted-foreground))",

        accent: "oklch(var(--accent))",
        "accent-foreground": "oklch(var(--accent-foreground))",

        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
}