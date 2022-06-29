/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,svelte}"],
    theme: {
        extend: {
            colors: {
                primary: { 1: "#CEDDF9", 2: "#146FF7", 3: "rgb(51, 59, 174)" },
                light: { 1: "#F7F7FF" },
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
    plugins: [],
};
