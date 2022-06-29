/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,svelte}"],
    theme: {
        extend: {
            colors: {
                primary: { 1: "#2e7aec", 2: "#47e", 3: "#5290ef" },
            },
        },
    },
    plugins: [],
};
