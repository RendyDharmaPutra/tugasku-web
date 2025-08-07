import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        primary: {
          accent: {
            DEFAULT: "#E5B800",
            dark: "#E5B800",
          },
          text: {
            DEFAULT: "#1E1E1E",
            dark: "#EAEAEA",
          },
          background: {
            DEFAULT: "#F7F7F7",
            dark: "#252525",
          },
        },
        secondary: {
          accent: {
            DEFAULT: "#C49A00",
            dark: "#B89400",
          },
          text: {
            DEFAULT: "#3C3C3C",
            dark: "#B0B0B0",
          },
          background: {
            DEFAULT: "#EAEAEA",
            dark: "#333333",
          },
        },
        tertiary: {
          accent: {
            DEFAULT: "#D1B75B",
            dark: "#A68D42",
          },
          text: {
            DEFAULT: "#5A5A5A",
            dark: "#B5B5B5",
          },
          background: {
            DEFAULT: "#D9D9D9",
            dark: "#3F3F3F",
          },
        },
        border: {
          DEFAULT: "#C0C0C0",
          dark: "#777777",
        },
        success: {
          DEFAULT: "#27AE60",
          dark: "#2ECC71",
        },
        danger: {
          DEFAULT: "#D72638",
          dark: "#FF3B30",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
