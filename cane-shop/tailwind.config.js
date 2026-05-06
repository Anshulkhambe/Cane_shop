import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Premium Earthy Color Palette
      colors: {
        // Primary: Warm Wood Brown
        primary: {
          50: '#FAF8F5',   // Ivory
          100: '#F5F0E8',  // Cream
          200: '#E8DEC9',  // Beige
          300: '#D4C4A8',  // Sand
          400: '#B8A080',  // Warm Tan
          500: '#8B6F47',  // Wood Brown (PRIMARY)
          600: '#6B5435',  // Walnut
          700: '#4A3A24',  // Dark Wood
          800: '#2F2618',  // Espresso
          900: '#1A140D',  // Nearly Black
          DEFAULT: '#8B6F47',
        },
        // Secondary: Olive/Sage Green
        secondary: {
          50: '#F7F8F5',
          100: '#E8EBE0',
          200: '#D4DAC8',
          300: '#B5BEA4',
          400: '#96A382',
          500: '#6B7C5A',  // Olive (SECONDARY)
          600: '#556344',
          700: '#3F4A32',
          800: '#2A3121',
          900: '#181D14',
          DEFAULT: '#6B7C5A',
        },
        // Accent: Warm Gold
        accent: {
          light: '#D4AF37',  // Antique Gold
          DEFAULT: '#B8960F', // Rich Gold
          dark: '#8B7109',    // Deep Gold
        },
        // Warm Neutrals (replacing cool grays)
        neutral: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
          950: '#0C0A09',
        },
      },

      // Luxury Typography
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],  // Luxury headlines
        sans: ['Inter', 'system-ui', 'sans-serif'],         // Body text
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],  // Technical
      },

      // Enhanced Font Sizes
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },

      // Glassmorphism Shadows
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-lg': '0 15px 50px 0 rgba(31, 38, 135, 0.1)',
        'luxury': '0 10px 40px rgba(139, 111, 71, 0.15)',
        'luxury-lg': '0 20px 60px rgba(139, 111, 71, 0.2)',
      },

      // Custom Animations
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },

      // Custom Backdrop Blur
      backdropBlur: {
        xs: '2px',
        '2xl': '40px',
        '3xl': '64px',
      },

      // Custom Border Radius
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
  ],
}





