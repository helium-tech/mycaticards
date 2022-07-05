/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./public/**.html"
    ],
    theme: {
      borderRadius:{
        'xxl':'40px',
        'xl':'15px',
        'full':'100%'
      },
      extend: {
        fontFamily:{
          'police':['']
        }
      },
    },
    plugins: [],
  }
  