import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'pink-950': '#E6A1D7',
        'custom-green': '#1B7979',
        'pin0k-90': '#E6A5BD',   
        'custom-yellow': '#F3F33B',
       
      },
    },
  },
  plugins: [],
};

export default config;
