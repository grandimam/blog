import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      fontSize: {
        'xs': ['0.875rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'base': ['1.125rem', { lineHeight: '1.7' }],
        'lg': ['1.25rem', { lineHeight: '1.4' }],
        'xl': ['1.5rem', { lineHeight: '1.3' }],
        '2xl': ['1.875rem', { lineHeight: '1.2' }],
        '3xl': ['2.25rem', { lineHeight: '1.2' }],
      },
      maxWidth: {
        'reading': '65ch',
      }
    },
  },
  plugins: [],
};
export default config;