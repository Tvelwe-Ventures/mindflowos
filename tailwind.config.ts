import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        butler: ['Butler', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%": { transform: "translate(0px, 0px)" },
          "25%": { transform: "translate(-5px, 0px)" },
          "75%": { transform: "translate(5px, 0px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        "border-glow": {
          "0%": {
            "border-color": "rgba(147, 51, 234, 0.5)",
            "box-shadow": "0 0 20px rgba(147, 51, 234, 0.3)",
            "filter": "brightness(1)"
          },
          "25%": {
            "border-color": "rgba(79, 70, 229, 0.5)",
            "box-shadow": "20px 0 30px rgba(79, 70, 229, 0.4)",
            "filter": "brightness(1.2)"
          },
          "50%": {
            "border-color": "rgba(147, 51, 234, 0.5)",
            "box-shadow": "0 20px 30px rgba(147, 51, 234, 0.3)",
            "filter": "brightness(1)"
          },
          "75%": {
            "border-color": "rgba(79, 70, 229, 0.5)",
            "box-shadow": "-20px 0 30px rgba(79, 70, 229, 0.4)",
            "filter": "brightness(1.2)"
          },
          "100%": {
            "border-color": "rgba(147, 51, 234, 0.5)",
            "box-shadow": "0 0 20px rgba(147, 51, 234, 0.3)",
            "filter": "brightness(1)"
          }
        },
        "device-border": {
          "0%": { 
            "border-image": "linear-gradient(to right, #8B5CF6, #D946EF) 1",
            "box-shadow": "0 0 20px rgba(139, 92, 246, 0.3)"
          },
          "25%": {
            "border-image": "linear-gradient(to bottom, #D946EF, #0EA5E9) 1",
            "box-shadow": "0 0 20px rgba(217, 70, 239, 0.3)"
          },
          "50%": {
            "border-image": "linear-gradient(to left, #0EA5E9, #8B5CF6) 1",
            "box-shadow": "0 0 20px rgba(14, 165, 233, 0.3)"
          },
          "75%": {
            "border-image": "linear-gradient(to top, #8B5CF6, #D946EF) 1",
            "box-shadow": "0 0 20px rgba(139, 92, 246, 0.3)"
          },
          "100%": {
            "border-image": "linear-gradient(to right, #8B5CF6, #D946EF) 1",
            "box-shadow": "0 0 20px rgba(139, 92, 246, 0.3)"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 8s ease-in-out infinite",
        "fade-up": "fade-up 0.5s ease-out forwards",
        blob: "blob 7s infinite",
        "border-glow": "border-glow 4s ease-in-out infinite",
        "device-border": "device-border 8s linear infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;