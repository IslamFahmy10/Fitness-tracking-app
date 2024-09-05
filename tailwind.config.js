/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#2D2424',
        'primary-light': '#5C3D2E',
        'accent': '#B85C38',
        'background': '#E0C097',
        'primary-dark-opacity': 'rgba(92, 61, 46, 0.5)',
      },
  },
  plugins: [],
}
}

