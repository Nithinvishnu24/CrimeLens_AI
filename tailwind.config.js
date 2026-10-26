/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        forensic: {
          950: '#0A0C10',
          900: '#11141B',
          850: '#161A23',
          800: '#1C2230',
          750: '#232A3B',
          700: '#2C3549',
          600: '#3D4963',
          500: '#526182',
          400: '#7E8CA8',
          300: '#A4B1CC',
          200: '#CBD5E1',
          100: '#E2E8F0',
          50: '#F8FAFC',
        },
        amber: {
          450: '#F59E0B',
          550: '#D97706',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Cascadia Code', 'Consolas', 'Courier New', 'monospace'],
      }
    },
  },
  plugins: [],
}
