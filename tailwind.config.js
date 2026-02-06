/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mono': {
          50: '#fafafa',    
          100: '#f5f5f5',   
          200: '#e5e5e5',   
          300: '#d4d4d4',   
          400: '#a3a3a3',   
          500: '#737373',   
          600: '#525252',   
          700: '#404040',   
          800: '#262626',   
          900: '#171717',   
          950: '#0a0a0a',   
        },
        'black': '#000000',
        'white': '#ffffff',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'instrument': ['Instrument Sans', 'sans-serif'],
        'mono': ['Inter'],
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}