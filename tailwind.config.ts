import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-sora)", "var(--font-manrope)", "ui-sans-serif"],
      },
      colors: {
        ink: {
          900: "#0F1C2E",
          800: "#16263B",
          700: "#1E3048",
          600: "#2B3F5C",
        },
        slateblue: {
          50: "#F5F7FB",
          100: "#EEF2F8",
          200: "#E3E9F4",
          300: "#D0D9EA",
          400: "#A9B7D1",
          500: "#7A90B3",
          600: "#587099",
          700: "#3F577E",
          800: "#2B3F63",
          900: "#1F2F4B",
        },
        brand: {
          500: "#1E5EFF",
          600: "#174AD1",
          700: "#133EAE",
        },
        emerald: {
          500: "#18B76A",
          600: "#119455",
        },
        amber: {
          500: "#F7B500",
          600: "#D08E00",
        },
        rose: {
          500: "#F24E4E",
          600: "#D83A3A",
        },
      },
      boxShadow: {
        card: "0 12px 30px rgba(15, 28, 46, 0.08)",
        subtle: "0 1px 2px rgba(15, 28, 46, 0.08)",
      },
      borderRadius: {
        xl: "18px",
      },
    },
  },
  plugins: [],
};

export default config;
