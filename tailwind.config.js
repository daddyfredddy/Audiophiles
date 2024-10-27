/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        "kalas1": "#D87D4A",
        "kalas2": "#101010",
        "kalas3": "#F1F1F1",
        "kalas4": "#FAFAFA",
        "kalas5": "#FBAF85",
        "kalas6": "#141414",
        "kalas7": "#0E0E0E",
        "kalas8": "#979797",
        "white": "#FFFFFF",
        "black": "#000000",
      }
    },
    fontFamily: {
      fonty:["manrope"]
    }
=======
        kalas: '#D87D4A',
        kalas1: '#101010',
        kalas2: '#F1F1F1',
        kalas3: '#FAFAFA',
        kalas4: '#FBAF85',
        kalas5: '#FFFFFF',
        kalas6: '#000000',
        kalas7: '#141414',
        kalas8: '#979797',
        kalas9: '#D8D8D8',
        kalas10: '#D87D4A',
        kalas11: "#121212"
      },

      fontFamily: {
        fonty:['Manrope', 'sans-serif']
      },
      
      letterSpacing: {
        big: '10px',
        small: '2px',
        smallest: '1px',
        small1: '1.29px',
        small2: '1.43px'
      },
      height: {
        big: '560px',
        medium: '493px',
        big1: '588px',
        big2: '365px'
      },
      width: {
        big: '410.23px',
        big1: '540px',
        big2: '445px'
      },
      margin: {
        big:'700px'
      }
    },
>>>>>>> 64f75de (first commit)
  },
  plugins: [],
}

