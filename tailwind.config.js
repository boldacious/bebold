// tailwind.config.js
module.exports = {
  darkMode: 'class', // ← THIS LINE is required for your `dark:` classes to work
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
