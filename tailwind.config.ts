import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ulysseInsideBlue: '#4ecdc4',
        ulysseInsideGray: '#292f36',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

export default config
