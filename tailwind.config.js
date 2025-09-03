import { colors } from "./src/assets/styles/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontFamily: {
        "poppins-light": ["Poppins_300Light"],   
        "poppins":       ["Poppins_400Regular"], 
        "poppins-italic":       ["Poppins_400Regular_Italic"], 
        "poppins-semibold": ["Poppins_600SemiBold"],
        "poppins-semibold-italic": ["Poppins_600SemiBold_Italic"],
        "poppins-bold":  ["Poppins_700Bold"], 
      },
    },
  },
  plugins: [],
};
