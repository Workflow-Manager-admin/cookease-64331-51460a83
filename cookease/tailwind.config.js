module.exports = {
  // Use JIT mode for rapid development & small purged builds
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      // Optionally, you can extend tailwind theme with project-specific customizations here
      colors: {
        'kavia-orange': '#E87A41',
        'kavia-dark': '#1A1A1A'
      }
    }
  },
  plugins: [],
};
