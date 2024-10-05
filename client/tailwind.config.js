module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Point Tailwind to your React files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
