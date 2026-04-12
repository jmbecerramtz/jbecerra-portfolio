/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      //Unified Semantic Color System
      colors: {
        // Backgrounds
        bg: {
          DEFAULT: '#f8f9fa',
          dark: '#121214',
        },

        // Surfaces
        surface: {
          DEFAULT: '#ffffff',
          dark: '#1c1c1e',
          glass: 'rgba(255, 255, 255, 0.7)',
          glassDark: 'rgba(28, 28, 30, 0.7)',
        },

        // Text
        text: {
          primary: '#2c2c2e',
          secondary: '#717173',
          muted: '#717173',
          inverse: '#f0f0f0',
          inverseSecondary: '#aeaeae',
        },

        // Brand (Purple system)
      primary: {
  DEFAULT: 'rgb(155 92 255)',
  light: 'rgb(179 136 255)',
  subtle: 'rgb(217 185 255)',
},

        // Borders
        border: {
          DEFAULT: 'rgba(0,0,0,0.08)',
          dark: 'rgba(255,255,255,0.1)',
        },
      },

      //Typography (Apple-like)
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'sans-serif'
        ],
        mono: [
          'ui-monospace',
          'Cascadia Code',
          'Source Code Pro',
          'Monaco',
          'monospace'
        ],
      },

      //Glass blur
      backdropBlur: {
        glass: '10px',
      },

      //Shadows (depth)
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.08)',
        soft: '0 4px 20px rgba(0, 0, 0, 0.05)',
      },

      //Smooth transitions
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};