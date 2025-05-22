/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./supernanny-website/src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-white',
    'text-white',
    'text-charcoal',
    'bg-bubblegum',
    'bg-skyblue',
    'bg-mint',
    'bg-lavender'
  ],
  theme: {
    extend: {
      colors: {
        'bubblegum': '#FF70B8',
        'skyblue': '#70D6FF',
        'mint': '#B4F8C8',
        'sunshine': '#FFF07C',
        'lavender': '#BFB3E1',
        'cloud': '#FFFFFF',
        'cream': '#FFFAED',
        'lightgray': '#F5F5F5',
        'charcoal': '#434343',
        'white': '#FFFFFF',
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'comic': ['Comic Sans MS', 'cursive'],
        'baloo': ['Baloo 2', 'cursive'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 