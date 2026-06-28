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
        'navy': {
          '950': '#0a0e27',
          '900': '#0f1535',
        },
        'cyan': {
          '300': '#06b6d4',
          '400': '#06b6d4',
          '500': '#06b6d4',
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.5)',
        'glow-cyan-lg': '0 0 40px rgba(6, 182, 212, 0.8)',
      },
    },
  },
  plugins: [],
}
export default config
