module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
        colors: {
            d17: {
                dark: "#212B33",
                mkt: "#EC6A06",
                dg: "#15B097",
                cnt: "#006989",
                web: {
                    "20": "#D1FF76",
                    "50": "#BEEE62",
                },
                "white": "#ffffff",
                "dark-light": "#4D6577",
                "light-gray": "#dedede",
                "light": "#f9f9f9",
            },
        },
    extend: {
        height: {
            slider: '1080px',
        },
        width: {
            blog: '960px',
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
