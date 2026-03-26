/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode palette
        'light-bg': '#f8f9fa',
        'light-surface': '#ffffff',
        'light-surface-glass': 'rgba(255, 255, 255, 0.7)',
        'light-text': '#2c2c2e',
        'light-text-secondary': '#717173',
        'light-purple': '#9b5cff',
        'light-purple-subtle': '#d9b9ff',
        
        // Dark mode palette
        'dark-bg': '#121214',
        'dark-bg-50': 'rgba(18, 18, 20, 0.5)',
        'dark-surface': '#1c1c1e',
        'dark-surface-glass': 'rgba(28, 28, 30, 0.7)',
        'dark-text': '#f0f0f0',
        'dark-text-secondary': '#aeaeae',
        'dark-purple': '#b388ff',
        'dark-purple-subtle': '#d9b9ff',
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
