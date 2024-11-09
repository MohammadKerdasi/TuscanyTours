/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      'multibackground': "url('/Rectangle 51.png')",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orangeText : "rgba(250, 139, 2, 1)",
        grayText : '#333333',
        
      },
    },
  },
  plugins: [],
};
