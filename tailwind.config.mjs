/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'

export default {
  content: ['./src/**/*.{astro,tsx}'],
  plugins: [typography, daisyui],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        'catppuccin-macchiato': {
          primary: '#8aadf4', // blue
          secondary: '#f5bde6', // pink
          accent: '#8bd5ca', // teal
          neutral: '#181926', // crust
          'base-100': '#24273a', // base
          info: '#7dc4e4', // sapphire
          success: '#a6da95', // green
          warning: '#eed49f', // yellow
          error: '#ed8796', // red
        },
      },
    ],
  },
}
