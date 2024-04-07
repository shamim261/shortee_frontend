/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,jsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#5A4AE3',
                hover: '#5041d1',
                secondary : '#efefef',
            },
        },
    },
    plugins: [],
    darkMode: 'class',
};

