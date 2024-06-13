const config = require('config/tailwind.config')

module.exports = config({
  content: [
    './../../packages/common/**/*.{ts,tsx}',
    './../../packages/ui/**/*.{tsx,ts,js}',
    './pages/**/*.{tsx,mdx}',
    './components/**/*.tsx',
    './layouts/**/*.tsx',
    './src/**/*.{ts,tsx,mdx}',
    './docs/**/*.{tsx,mdx}',
  ],
  plugins: [
    function ({ addUtilities, addVariant }) {
      addUtilities({
        // prose (tailwind typography) helpers
        // useful for removing margins in prose styled sections
        '.prose--remove-p-margin p': {
          margin: '0',
        },
      })
    },
  ],
  theme: {
    extend: {
      keyframes: {
        'animate-mask': {
          "0%": {WebkitMaskPosition: "0 0"},
          "100%": {WebkitMaskPosition: "1000px 1000px"}
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      animation: {
        'animate-mask': 'animate-mask 60s linear infinite',
      },
    },
  },
})
