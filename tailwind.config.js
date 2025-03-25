/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FE0300',
        'secondary': '#FE6766',
        'background': '#F4E6D6',
        'text': '#560121',
        'highlight': '#F1B474',
        'off-white': '#F9F9F9',
        'dark-bg': '#410118',
        'light-bg': '#FFFFFF',
        'accent-light': '#FFDEE9',
        'accent-dark': '#3D0000',
        'soft-gray': '#E0E0E0',
        'custom-red': '#CF0404',
        'submit' : '#730e33',
        'custom-blue': '#2542A6',
        'white': '#FFFFFF',
        'manjal-lite': '#FFC07B',
        'facebook': '#0964fe',
        'twitter': '#000000',
        'instagram': '#E1306C',
        'linkedin': '#0077B5',
        'youtube': '#FF0000',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      },
      transitionProperty: {
        'opacity': 'opacity',
      },
      transitionDuration: {
        '1000': '1000ms',
      },
    },
  },
  plugins: [],
};