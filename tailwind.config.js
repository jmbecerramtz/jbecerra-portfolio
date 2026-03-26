/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Shared / neutral
        "purple-main": "#9b5cff",
        "purple-subtle":  "#d9b9ff",

        // Light mode tokens
        "light-bg":           "#f8f9fa",
        "light-surface":      "#ffffff",
        "light-surface-glass":"rgba(255, 255, 255, 0.7)",
        "light-text":         "#2c2c2e",
        "light-text-muted":   "#717173",

        // Dark mode tokens
        "dark-bg":            "#121214",
        "dark-bg-subtle":     "rgba(18, 18, 20, 0.5)",
        "dark-surface":       "#1c1c1e",
        "dark-surface-glass": "rgba(28, 28, 30, 0.7)",
        "dark-text":          "#f0f0f0",
        "dark-text-muted":    "#aeaeae",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "Cascadia Code",
          "Source Code Pro",
          "Monaco",
          "monospace",
        ],
      },
      backdropBlur: {
        glass: "10px",
      },
    },
  },
  plugins: [],
}
          "Cascadia Code",
          "Source Code Pro",
          "Monaco",
          "monospace",
        ],
      },
      backdropBlur: {
        glass: "10px",
      },
    },
  },
  plugins: [],
}
