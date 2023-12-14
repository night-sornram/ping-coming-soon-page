import type { Config } from 'tailwindcss'

const { colors : defaultColors } = require("tailwindcss/defaultTheme")

const colors = {
  ...defaultColors,
  ...{
    "custom" : {
      "100" : "hsl(223, 87%, 63%)",
      "200" : "hsl(223, 100%, 88%)",
      "300" : "hsl(354, 100%, 66%)",
      "400" : "hsl(0, 0%, 59%)",
      "500" : "hsl(209, 33%, 12%)"
    }
  }
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : colors,
    },
  },
  plugins: [],
}
export default config
