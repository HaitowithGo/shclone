/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      blur: {
        lar: '80px',
      },

      colors: {
        'nw': '#FFFFFF',
        'gw': '#F8F8FF',
        'bw': '#F9F7F2',
        'lw': '#F1F1F1',
        'bk': '#000000',
        'azure': '#0B4650',
        'green': '#96FF96',
        'blue': '#9DA7FF',
        'purple': '#B46DFB',
        'yellow': '#F2FF8D',
        'red': '#FF7878',
        'orange': '#FF9268'
      },

      fontFamily: {
        'satoshi': ['"Satoshi"', 'sans-serif'],
        'satoshi-300': ['"Satoshi"', 'sans-serif', '300'],
        'satoshi-301': ['"Satoshi"', 'sans-serif', '301'],
        'satoshi-400': ['"Satoshi"', 'sans-serif', '400'],
        'satoshi-401': ['"Satoshi"', 'sans-serif', '401'],
        'satoshi-bold': ['"Satoshi"', 'sans-serif', '500'],
        'satoshi-501': ['"Satoshi"', 'sans-serif', '501'],
        'satoshi-black': ['"Satoshi"', 'sans-serif', '700'],
        'satoshi-701': ['"Satoshi"', 'sans-serif', '701'],
        'satoshi-900': ['"Satoshi"', 'sans-serif', '900'],
        'satoshi-901': ['"Satoshi"', 'sans-serif', '901'],
        'satoshi-1': ['"Satoshi"', 'sans-serif', '1'],
        'satoshi-2': ['"Satoshi"', 'sans-serif', '2'],

        'sf-display': ['SF Pro Display', 'sans-serif'],
        'sf-text': ['SF Pro Text', 'sans-serif'],
        'sf-rounded': ['SF Pro Rounded', 'sans-serif'],
      },

      cursor: {
        'white': 'url(https://raw.githubusercontent.com/HaitowithGo/sekinohaito-assets/699547d88712667cf0684ba3e0b9d39372246a54/cursol-circle-white.svg), pointer',
        'black': 'url(https://raw.githubusercontent.com/HaitowithGo/sekinohaito-assets/699547d88712667cf0684ba3e0b9d39372246a54/cursol-circle-black.svg), pointer',
      },


      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
    },
  },
  plugins: [],
}