/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
      },
      backgroundImage: {
        'sec2-bgimage': "url('/public/Images/feature-section-2BG.png')",
        'coresec-bgimage': "url('/public/Images/core-features-sectionBg.png')",
        'corefeaturesec-image' : "url(/public/Images/core-features-sectionBg.svg)",
        'cta-image' : "url(/public/Images/CTABg.svg)",
        'box2-img' : "url('/public/Images/instant-settlement-bg.svg')",
        'box2hover-img' : "url('/public/Images/instant-settlement-bghover.svg')",
        'box3hover-img' : "url('/public/Images/upi-autopay-hoverbg.svg')",
        // 'box4-img' : "url('/public/Images/magic-checkout-bg.svg)')",
        // 'box4hover-img' : "url('/public/Images/magic-checkout-hoverbg.svg)')",
        'box5-img' : "url('/public/Images/payment-button-bg.svg')",
        'box5hover-img' : "url('/public/Images/payment-button-hoverbg.svg')",
        'box6-img' : "url('/public/Images/instantsettlement-bg.svg')",
        'box6hover-img' : "url('/public/Images/instantsettlement-hoverbg.svg')",
        // 'box7-img' : "url('/public/Images/instant-settlement-bg.svg')",
        // 'box7hover-img' : "url('/public/Images/instant-settlement-bghover.svg')",

      },
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },
    },
  },

  plugins: [],
}

