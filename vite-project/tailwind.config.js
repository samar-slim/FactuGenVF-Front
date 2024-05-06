/** @type {import('tailwindcss').Config} */
export default {
  content: {
    
        files :[ './src/**/*.vue',
        "./node_modules/flowbite/**/*.js"
      
      ],
      

  },
 
  theme: {
    extend: {
      colors: {
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
<<<<<<< HEAD
=======
        
        
          "primaryColor": "#007bff",
     
>>>>>>> f53c9e6ac6a7bbc9c72eeaa0ac161d0988572462
      },
    },
  },
  plugins: [
    
    require('flowbite/plugin')({
      charts: true,
  }),
     
    ],
    
}

