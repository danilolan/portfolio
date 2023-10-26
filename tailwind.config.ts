import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      dark: "#0C0C0C",
      grey: "#2B2B2B",
      white: "#BDBDBD"

    },
    extend: {
      backgroundImage: {
        'default': 'url(public/static/images/background.webp'
      }
    },
  },
  plugins: [],
}
export default config
