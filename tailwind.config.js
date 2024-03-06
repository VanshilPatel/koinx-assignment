/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '951': '951px',
        '102': '102px',
        '1440' : '1440px',
        '60' : '60px',
        '136' : '136px'
      },
    },
  },
  plugins: [],
}
