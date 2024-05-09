import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        background: "rgba(255, 255, 255, 0.17)",
        lime: "rgb(176, 255, 145)",
        limeBg: "rgba(176, 255, 145, 0.17)",
        unfilled: "rgba(255, 255, 255, 0.44)",
      },
    },
  },
  plugins: [],
};
export default config;
