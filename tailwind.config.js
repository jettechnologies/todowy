/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      "size-400": ["14px", "1.4em"],
      "size-500": ["16px", "1.4em"],
      "size-600": ["22px", "1.4em"],
      "size-700": ["2.5rem", "1.4em"],
      "size-800": ["3.5rem", "1.6em"],
    },
    fontFamily: {
      'roboto': ['"Roboto"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

