/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      White: "hsl(0, 0%, 100%)",
      Paleblue:"hsl(225, 100%, 94%)",
      Brightblue: "hsl(245, 75%, 52%)",
      Verypaleblue: "hsl(225, 100%, 98%)",
      Desaturatedblue: "hsl(224, 23%, 55%)",
      Darkblue: "hsl(223, 47%, 23%)",
      blue: "hsl(228, 45%, 44%)",
    },
    screens: {
      sm: {'max': '375px'},
      // => @media (max-width: 375px) { ... }

      lg: {'max': '1440px'},
      // => @media (max-width: 1440px) { ... }
    },
    fontFamily: {
      RedHats: ["Red Hat Display", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "Pattern-desktop": "url('../images/pattern-background-desktop.svg')",
        "Pattern-mobile": "url('../images/pattern-background-mobile.svg')",
      },
    },
  },
  plugins: [],
}
