/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				lato: ["Lato", "sans-serif"],
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
