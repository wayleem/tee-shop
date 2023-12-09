/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        light: {
          '.text-unfocus': { color: '#323232' },
          '.text-readable': { color: '#000' },

          'base-content': '#000', // default text color
          'base-100': '#f7faff',
          'base-200': '#d9dee3',
          'base-300': '#818c96',
        },
      },
      {
        dark: {
          '.text-inactive': { color: '#434445' },
          '.text-readable': { color: '#fefefe' },

          'base-content': '#000', // default text-color
          'base-100': '#133c55',
          'base-200': '#545d64',
          'base-300': '#818c96',
        },
      },
    ],
  },
  theme: {
    fontFamily: {
      nav: ['Inter', 'sans-serif'],
      title: ['Lato', 'sans-serif'],
      header: ['Noto Sans', 'sans-serif'],
      body: ['Roboto', 'serif'],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
  },
  plugins: [require('daisyui')],
}
