/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom':'#71baa6',
      },
      boxShadow: {
        'allside': '0_2px 100px rgba(0, 0, 0, 0.1),0_-2px_100px_rgba(0, 0, 0, 0.1),2px_0_100px_rgba(0, 0, 0, 0.1),-2px_0_100px_rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

