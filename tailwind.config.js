/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        951: "951px",
        102: "102px",
        1440: "1440px",
        60: "60px",
        136: "136px",
        56: "56px",
        881: "881px",
        200: "200px",
        460: "460px",
        327: "327px",
        31: "31px",
        426: "426px",
        94: "94px",
      },
      colors: {
        customBlue: "#0052FE",
      },
    },
  },
  plugins: [],
};
