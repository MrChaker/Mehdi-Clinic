/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,svelte}"],
    theme: {
        extend: {
            colors: {
                primary: { 1: "#CEDDF9", 2: "#146FF7", 3: "rgb(51, 59, 174)" },
                light: { 1: "#F7F7FF" },
                dark: { 1: "#242424" },
            },
            fontFamily: {
                main: "Inter, sans-serif",
            },
        },
        boxShadow: {
            blueMD: "0 0 20px #146FF7",
            blueSM: "0 0 16px #CEDDF9",
            blueLG: "0 0 24px rgb(51, 59, 174)",
        },
        dropShadow: {
            white: "0 0px 10px #5559CE50",
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#2552ce",

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
