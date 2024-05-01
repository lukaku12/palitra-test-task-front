/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#FF6363",
                    200: "#ff4040",
                },
                secondary: {
                    100: "#E2E2D5",
                    200: "#888883",
                    300: "#555",
                    400: "#333",
                },
            },
        },
    },
    plugins: [],
};