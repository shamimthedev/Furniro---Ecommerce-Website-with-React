/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins']
      },
      maxWidth: {
        1286: '1286px',
        643: '643px',
      },
      backgroundImage: {
        heroImg: "url('./src/assets/images/hero-background.png')",
      },
      colors: {
        primary: '#B88E2F',
        heroColor: '#FFF3E3',
        333: '#333333',
        666: '#666666',
        A3A3: '#3A3A3A',
        8989: '#898989',
        B0B0: '#B0B0B0',
        6161: '#616161',
        F9F9: '#9F9F9F',
        redBadge: '#E97171',
        greenBadge: '#2EC1AC',
        productBg: '#F4F5F7',
        promotionBg: '#FCF8F3'
      },
    },
  },
  plugins: [],
}

