/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        'custom-container': '1200px',
      },
      colors: {
        pink: {
          light: '#ff66a1',
          DEFAULT: '#fc057b', // Pink color
          dark: '#c00460',
        },
      },
    },
  },
  plugins: [daisyui],
};
