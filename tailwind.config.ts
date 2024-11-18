import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
 
  ],
  theme: {
    extend: {
      fontFamily: {
        'line-seed-sans': ['"LINE Seed Sans TH"', 'sans-serif'],
      },
      colors: {
        'Bg': '#F8F8F8',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
],
};
export default config;
