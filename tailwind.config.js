/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blueviolet: "#9747ff",
        white: "#fff",
        darkslategray: "#34614d",
        steelblue: {
          "100": "#006699",
          "200": "#045b81",
        },
        darksalmon: "#f8a18d",
        black: "#000",
        dimgray: "#525c60",
        whitesmoke: "#f8f8f8",
      },
      spacing: {},
      fontFamily: {
        "josefin-sans": "'Josefin Sans'",
      },
      borderRadius: {
        "8xs": "5px",
        "40xl-6": "59.6px",
        "21xl": "40px",
        mid: "17px",
      },
    },
    fontSize: {
      "176xl": "195px",
      "125xl": "144px",
      "160xl": "179px",
      "17xl": "36px",
      "112xl": "131px",
      "31xl": "50px",
      "101xl": "120px",
      "6xl": "25px",
      "5xl": "24px",
      "59xl": "78px",
      "11xl": "30px",
      "131xl": "150px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
