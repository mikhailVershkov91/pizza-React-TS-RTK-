/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		screens: {
			lg: { max: "992px" },
			md: { max: "768px" },
			sm: { max: "480px" },
		},
		extend: {
			height: {
				88: "88%",
			},
		},
	},
	plugins: [],
};
