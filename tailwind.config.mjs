const navigationHeader = "3rem";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "hover-light": "#9FD7FF",
        "accent-light": "#4D9DE8",
        "accent-dark": "#021E2F",
        "custom-black": "#333333",
        "custom-black-2": "#292929",
      },
      backgroundColor: {
        "gray-button": "#69727d",
        "custom-black": "#021E2F",
        "rosy-button": "#c36",
        footer: "#DAECF8",
      },
      borderColor: {
        "gray-input": "#69727d",
      },
      outlineColor: {
        "dashed-button": "#FBC438",
      },
      height: {
        header: navigationHeader,
      },
      minHeight: {
        "side-nav": "60vh",
      },
      maxWidth: {
        "side-nav": "315px",
      },

      margin: {
        header: navigationHeader,
      },
      typography: {
        DEFAULT: {
          css: {
            p: {
              margin: 0,
            },
          },
        },
      },
    },
    fontFamily: {
      sans: ["Heebo"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
