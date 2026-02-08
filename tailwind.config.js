/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'industrial-gray': '#1e293b', // Slate 800
      'electric-blue': '#3b82f6',   // Blue 500 (Accent)
      'clean-white': '#f8fafc',    // Slate 50
    },
    },
  },
  plugins: [],
}

