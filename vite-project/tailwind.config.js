/** @type {import('tailwindcss').Config} */
export default {
  content: {
    
        files :[ './src/**/*.vue',
        "./node_modules/flowbite/**/*.js"
      
      ],
      

  },
 
  theme: {
    fontFamily:{
      'body':['"Poppins"']
    },
    extend: {
      colors: {
        "theme-primary": "#5368DF",
        "theme-secondary": "#FA5757",
        "theme-grayish-blue": "#9194A1",
        "theme-dark-blue": "rgb(37, 43, 70)",
        "theme-dark-blue-tp": "rgba(37, 43, 70, 0.9)",
        lightBlue: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        "tx-blue": "#00CBB8",
      },
    },
  },
  plugins: [
    
    require('flowbite/plugin')({
      charts: true,
      
  }),
     
    ],
    
}

