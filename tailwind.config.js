/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // For React projects
    "./pages/**/*.{js,jsx,ts,tsx}", // For Next.js projects
    "./components/**/*.{js,jsx,ts,tsx}", // For Next.js components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
