import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'lilita': ['Lilita One', 'sans-serif'],
        'lora': ['Lato', 'sans-serif']
      },
      
      container: {
        center: true,
        padding: "15px",
      },

      colors: {
        bluvee: "#40C9FF",
        pinkee: "#E81CFF"
      }
    },
  },
  plugins: [],
}
export default config
