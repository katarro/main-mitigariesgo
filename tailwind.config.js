/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        // Paleta corporativa principal
        corporate: {
          // Azul principal - #19476E
          "blue-primary": "#19476E",
          "blue-primary-light": "#235A85",
          "blue-primary-dark": "#0F3A5A",

          // Azul secundario - #113149
          "blue-secondary": "#113149",
          "blue-secondary-light": "#1A4A6B",
          "blue-secondary-dark": "#0A1F30",

          // Naranja/Dorado - #F09F34
          "orange-primary": "#F09F34",
          "orange-primary-light": "#F4B355",
          "orange-primary-dark": "#E8881A",

          // Color adicional sugerido - Verde esmeralda complementario
          "green-accent": "#2D7D67",
          "green-accent-light": "#3A9B7E",
          "green-accent-dark": "#1F5B4A",

          // Nuevo color azul claro - #61AAFA
          "blue-light": "#61AAFA",
          "blue-light-light": "#7BBCFB",
          "blue-light-dark": "#4A98E8",
        },

        // Variaciones extendidas para mejor usabilidad
        primary: {
          50: "#F0F7FF",
          100: "#E0EFFF",
          200: "#B8DCFF",
          300: "#78C2FF",
          400: "#3AA5FF",
          500: "#19476E", // Color principal
          600: "#154069",
          700: "#113149", // Color secundario
          800: "#0A1F30",
          900: "#051119",
        },

        accent: {
          50: "#FFF9E6",
          100: "#FFF2CC",
          200: "#FFE699",
          300: "#FFD966",
          400: "#F4B355",
          500: "#F09F34", // Color principal naranja
          600: "#E8881A",
          700: "#CC7000",
          800: "#A65C00",
          900: "#804700",
        },

        success: {
          50: "#E8F5F2",
          100: "#D1EBE5",
          200: "#A3D7CB",
          300: "#75C3B1",
          400: "#52A693",
          500: "#2D7D67", // Verde complementario
          600: "#1F5B4A",
          700: "#164238",
          800: "#0D2A25",
          900: "#051512",
        },

        info: {
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#61AAFA", // Nuevo color azul claro
          600: "#4A98E8",
          700: "#3B82D6",
          800: "#2563EB",
          900: "#1D4ED8",
        },
      },

      // Configuración de spacing y sizing manteniendo SOLID
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },

      // Shadows corporativas
      boxShadow: {
        corporate: "0 4px 14px 0 rgba(25, 71, 110, 0.15)",
        "corporate-lg": "0 10px 25px -3px rgba(25, 71, 110, 0.2)",
        accent: "0 4px 14px 0 rgba(240, 159, 52, 0.25)",
      },

      // Gradientes corporativos
      backgroundImage: {
        "corporate-gradient":
          "linear-gradient(135deg, #19476E 0%, #113149 100%)",
        "accent-gradient": "linear-gradient(135deg, #F09F34 0%, #E8881A 100%)",
        "hero-gradient":
          "linear-gradient(135deg, #19476E 0%, #2D7D67 50%, #F09F34 100%)",
        "info-gradient": "linear-gradient(135deg, #61AAFA 0%, #4A98E8 100%)",
      },
    },
  },
  plugins: [],
};
