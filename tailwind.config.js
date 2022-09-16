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
				90: "90%",
				88: "88%",
				70: "70%",
				50: "50%",
			},
			width: {
				80: "80%",
				65: "65%",
				40: "40%",
			},
		},
	},
	plugins: [],
};
