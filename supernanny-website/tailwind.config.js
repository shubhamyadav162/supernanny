/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF70B8', // Bubblegum Pink
        secondary: '#70D6FF', // Sky Blue
        mint: '#B4F8C8', // Mint Green
        sunshine: '#FFF07C', // Sunshine Yellow
        lavender: '#BFB3E1', // Lavender Purple
        charcoal: '#434343', // Text color
        softcream: '#FFFAED', // Secondary background
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'baloo': ['"Baloo 2"', 'cursive'],
      },
      animation: {
        'gradient': 'gradient 3s ease infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 4s linear infinite',
        'particle-1': 'particle1 2s ease-in-out infinite',
        'particle-2': 'particle2 2.5s ease-in-out infinite',
        'particle-3': 'particle3 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        shimmer: {
          '0%': { 'background-position': '-100% 0' },
          '100%': { 'background-position': '200% 0' },
        },
        particle1: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '0'
          },
          '10%': {
            opacity: '1'
          },
          '90%': {
            opacity: '0'
          },
          '50%': {
            transform: 'translate(7px, -10px) scale(0)',
          }
        },
        particle2: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '0'
          },
          '10%': {
            opacity: '1'
          },
          '90%': {
            opacity: '0'
          },
          '50%': {
            transform: 'translate(-10px, -8px) scale(0)',
          }
        },
        particle3: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '0'
          },
          '10%': {
            opacity: '1'
          },
          '90%': {
            opacity: '0'
          },
          '50%': {
            transform: 'translate(5px, -15px) scale(0)',
          }
        },
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      perspective: {
        '500': '500px',
      },
    },
  },
  plugins: [],
}; 