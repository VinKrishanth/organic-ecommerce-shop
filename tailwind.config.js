module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  
    './public/index.html',         
  ],
  theme: {
    extend: {
      colors: {
        softPrimary: '#84D187', 
        Primary: '#00B207', 
        PrimaryHover: '#2C742F', 
        HardPrimary: '#56AC59', 
        HardPrimaryHover: '#2C742F', 
        Warning: '#FF8400',
        Danger: '#EA4B48',
        Gray90: '#1A1A1A',
        Gray80: '#333333',
        Gray70: '#4D4D4D',
        Gray60: '#666666',
        Gray50: '#808080',
        Gray40: '#999999',
        Gray30: '#B3B3B3',
        Gray20: '#1A1A1A',
        Gray10: '#E6E6E6',
        Gray05: '#F2F2F2',
        greenGray90: '#002603',
        greenGray80: '#173B1A',
        greenGray70: '#2B572E',
        greenGray60: '#406B42',
        greenGray50: '#618062',
        greenGray40: '#7A997C',
        greenGray30: '#96B297',
        greenGray20: '#B4CCB4',
        greenGray10: '#DAE5DA',
        greenGray05: '#EDF2EE',
        textSuccess: '#00B207',
        textBright: '#84D187',
        textSuccessDark:'#2C742F',
        textWaring: '#FF8A00',
        textError: '#EA4B48',
        textBlue: '#2388FF'
      },
    },
  },
  plugins: [],
};
