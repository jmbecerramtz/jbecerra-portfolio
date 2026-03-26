/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'light-bg': '#f8f9fa',
        'dark-bg': '#121214',
        'light-surface': '#ffffff',
        'dark-surface': '#1c1c1e',
        'light-surface-glass': 'rgba(255, 255, 255, 0.7)',
        'dark-surface-glass': 'rgba(28, 28, 30, 0.7)',
      },
      textColor: {
        'light-text': '#2c2c2e',
        'dark-text': '#f0f0f0',
        'light-text-secondary': '#717173',
        'dark-text-secondary': '#aeaeae',
        'light-text-muted': '#717173',
        'dark-text-muted': '#aeaeae',
        'light-purple': '#9b5cff',
        'dark-purple': '#b388ff',
      },
      borderColor: {
        'light-purple': '#9b5cff',
        'dark-purple': '#b388ff',
      },
      colors: {
        'light-purple-subtle': '#d9b9ff',
        'dark-purple-subtle': '#d9b9ff',
        'purple-main': '#9b5cff',
        'purple-subtle': '#d9b9ff',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        mono: ['ui-monospace', 'Cascadia Code', 'Source Code Pro', 'Monaco', 'monospace'],
      },
      backdropBlur: {
        glass: '10px',
      },
    },
  },
  plugins: [],
}
