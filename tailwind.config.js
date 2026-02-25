/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      /* ===== FUTURISTIC COLOR SYSTEM (EDTECH STYLE) ===== */
      colors: {
        primary: "#0f766e",     // main teal
        secondary: "#14b8a6",   // light teal
        accent: "#0ea5a4",      // soft accent
        dark: "#0f172a",        // dark text
        glass: "rgba(255,255,255,0.65)",
      },

      /* ===== GRADIENT BACKGROUNDS ===== */
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to bottom, #ecfeff, #ffffff, #f0fdfa)",
        "teal-gradient":
          "linear-gradient(135deg, #14b8a6, #0f766e)",
        "soft-gradient":
          "linear-gradient(to right, #f0fdfa, #ecfeff)",
      },

      /* ===== PREMIUM SHADOWS (SOFT FUTURISTIC) ===== */
      boxShadow: {
        soft: "0 8px 30px rgba(0, 0, 0, 0.05)",
        glow: "0 10px 40px rgba(20, 184, 166, 0.25)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.08)",
        card: "0 4px 20px rgba(0,0,0,0.06)",
      },

      /* ===== GLASSMORPHISM SUPPORT ===== */
      backdropBlur: {
        xs: "2px",
      },

      /* ===== BORDER RADIUS (MODERN UI) ===== */
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },

      /* ===== ANIMATIONS (SMOOTH & FUTURISTIC) ===== */
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out",
        float: "float 4s ease-in-out infinite",
      },

      /* ===== FONT (MODERN LOOK) ===== */
      fontFamily: {
        // include the Figma/Poppins font first, fall back to Inter and system
        sans: ["Poppins", "Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};