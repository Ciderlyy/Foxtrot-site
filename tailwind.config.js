/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Based on the 10C4I Foxtrot logo colors
        primary: '#1a1a1a',        // Dark background (like the logo's dark grey/black)
        secondary: '#2d2d2d',      // Slightly lighter dark grey
        accent: '#ffd700',          // Golden yellow (from the triangle and text)
        'accent-dark': '#e6c200',   // Darker golden yellow
        'fox-orange': '#ff8c00',    // Fox's orange fur
        'fox-brown': '#8b4513',     // Fox's brown tones
        'fox-light': '#f4a460',     // Light fox fur
        'navy-blue': '#1e3a8a',     // Dark blue from logo background
        'maroon-red': '#800020',    // Dark red from logo background
        text: '#ffffff',            // Pure white text
        'text-secondary': '#d1d5db' // Light grey text
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
