/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                poppins: ["var(--font-poppins)"],
            },
            keyframes: {
                slideDown: {
                    from: { height: 0, opacity: 0 },
                    to: { height: "var(--radix-collapsible-content-height)", opacity: 1 },
                },
                slideUp: {
                    from: { height: "var(--radix-collapsible-content-height)", opacity: 1 },
                    to: { height: 0, opacity: 0 },
                },
            },
            animation: {
                slideDown: "slideDown 300ms ease-out",
                slideUp: "slideUp 300ms ease-out",
            },
            colors: {
                // Purple shades
                'purple-light': '#F2E9FA',
                'purple-lighter': '#F2DEFC',
                'purple-medium': '#BF91E7',
                'purple-primary': '#7E22CE',
                'purple-hover': '#E5D3F5',
                'purple-dark': '#581890',

                // Red/Pink shade
                'red-light': '#FFE7E6',

                // Indigo/Blue
                'indigo-primary': '#5E5CE6',

                // Teal/Cyan
                'teal-bright': '#3FE0D0',
                'blue-dark': '#0040DD',
                'blue-bg': '#E6ECFC',
                'blue-hover': '#E2F7FF',
                'blue-light': '#80A0EE',
                'blue-primary': '#0040DD',

                // Green shades
                'green-bright': '#7EC000',
                'green-dark': '#248A3D',
            },

            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}