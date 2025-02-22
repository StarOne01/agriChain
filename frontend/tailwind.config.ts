
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00B251", // green
        secondary: "#F8B32B", // yellow
        accent:"#262626", // black
        graycol:"#959CA3", // gray
        reddis:"#F72A37" // RED
      },
      fontFamily:{
        sans: "var(--font-geist-sans)", 
        inter: "var(--font-inter)",
        mono: "var(--font-geist-mono)",
        manrope: "var(--font-manrope)"
      },
      backgroundImage: {
        bannerimg:"url('https://static.vecteezy.com/system/resources/previews/031/696/054/non_2x/sprawling-agricultural-farm-featuring-fields-of-crops-ai-generated-photo.jpg)"
      }
    },
  },
  plugins: [],
} satisfies Config;
