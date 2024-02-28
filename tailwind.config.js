
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backdropFilter: {
        blur10: 'blur(10px)',
      },
      colors: {
        'custom-purple': '#9354ed', // replace with your exact color code
        'custom-pink': '#f80288', // replace with your exact color code
      },
      borderRadius: {
        'extra-large': '2rem', // or whatever value gives you the desired effect
      },
      borderWidth: {
        '6': '6px', // for a thick border
      },

    },
  },
  plugins: [
    addVariablesForColors,
    require('tailwind-scrollbar'),
  ],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
