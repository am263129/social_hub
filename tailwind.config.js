module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        app: {
          primary: {
            DEFAULT: '#102331'
          },
          white:{
            DEFAULT: '#F3F2EF'
          },
          gray:{
            DEFAULT: '#E0E0E0',
            light: '#666666'
          },
          yellow:{
            dark: '#915907'
          },
          blue:{
            DEFAULT: '#0A66C2'
          }
        }
      },
      spacing: {
        2.5: '10px',
        3.5: '15px',
        7.4: '30px',
        7.5: '31px',
        17: '68px'
      }
    },
  },
  plugins: [],
}
