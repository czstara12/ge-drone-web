module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: {
          100: '#e0f0ff',
          200: '#b3d9ff',
          300: '#66b3ff',
          400: '#3399ff',
          500: '#0080ff',
          600: '#0066cc',
          700: '#004d99',
          800: '#003366',
          900: '#001a33',
        },
        dark: {
          50: '#e8eaf0',
          100: '#c5c8d6',
          200: '#9da2b8',
          300: '#757c9a',
          400: '#575f85',
          500: '#384171',
          600: '#2a3060',
          700: '#1a1f45',
          800: '#0f1230',
          900: '#070a1a',
        },
        accent: {
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, #070a1a 0%, #0f1230 50%, #1a1f45 100%)',
        'card-gradient':
          'linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(56,189,248,0.04) 100%)',
      },
      boxShadow: {
        glow: '0 0 20px rgba(0,128,255,0.3)',
        'glow-sm': '0 0 10px rgba(0,128,255,0.2)',
      },
    },
  },
  plugins: [],
};
