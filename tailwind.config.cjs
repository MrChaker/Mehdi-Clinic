/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,svelte}"],
    theme: {
        extend: {
            colors: {
                primary: { 1: "#CEDDF9", 2: "#4488EE", 3: "#306BC5" },
                light: { 1: "#F7F7FF" },
                dark: { 1: "#484444", 2: "#242424" },
            },
            fontFamily: {
                main: "Inter, sans-serif",
            },
        },

        boxShadow: {
            blueMD: "0 0 20px #4488EE",
            blueSM: "0 0 16px #CEDDF9",
            blueLG: "0 0 24px #306BC5",
        },
        dropShadow: {
            white: "0 0px 10px #5559CE50",
        },
        screens: {
            mb: "390px",
            sm: "640px",

            md: "888px",

            lg: "1064px",

            xl: "1240px",

            "2xl": "1360px",
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#4488EE",

                    secondary: "#60dbaa",

                    accent: "#e5cc87",

                    neutral: "#261C30",

                    "base-100": "#ECEDEE",

                    info: "#8199F8",

                    success: "#19A99D",

                    warning: "#A86C05",

                    error: "#FA2E3C",
                },
            },
        ],
    },

    plugins: [require("daisyui")],
};
