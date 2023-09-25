import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background_primary: "#1b1b1e",
      
        background_secondary: "rgb(14, 14, 19)",
    },
  },
  },
  plugins: [],
} satisfies Config;
