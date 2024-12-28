import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["emerald"],
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'rae-card': "#C7DDC7",
        'rae-font': "#3F5038",
        'rae-button': "#4E765F",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
} satisfies Config;
