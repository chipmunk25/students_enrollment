/** @type {import('tailwindcss').Config} */
const safeListFile = "safelist.txt";

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./safelist.txt"],
  theme: {
    extend: {
      colors: {
        blac: "#343434",
        error: "rgb(196, 49, 75)",
        active: "#e5e5e3",
        darkactive: "#636362",
        grey: {
          50: "#F8F9FA",
          100: "#F0F3F5",
          200: "#EAEDEF",
          300: "#DEE2E6",
          400: "#CFD4D9",
          500: "#ACB5BD",
          600: "#858E96",
          700: "#485056",
          800: "#343A3F",
          900: "#21252A",
        },
      },
    },
  },
  plugins: [
    // If your application does not require multiple theme selection,
    // you can replace {color} to your theme color value
    // this can drastically reduces the size of the output css file
    // e.g 'text-{colors}' --> 'text-emerald'
    require("tailwind-safelist-generator")({
      path: safeListFile,
      patterns: [
        "text-{colors}",
        "bg-{colors}",
        "dark:bg-{colors}",
        "dark:hover:bg-{colors}",
        "dark:active:bg-{colors}",
        "hover:text-{colors}",
        "hover:bg-{colors}",
        "active:bg-{colors}",
        "ring-{colors}",
        "hover:ring-{colors}",
        "focus:ring-{colors}",
        "focus-within:ring-{colors}",
        "border-{colors}",
        "focus:border-{colors}",
        "focus-within:border-{colors}",
        "dark:text-{colors}",
        "dark:hover:text-{colors}",
        "h-{height}",
        "w-{width}",
      ],
    }),
    require("@tailwindcss/forms"),
  ],
};
