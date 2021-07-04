const colors = require('tailwindcss/colors')
const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			colors: {
				sky: colors.sky,
				cyan: colors.cyan,
				prime: "#f5aa64",
			},

			transitionProperty: {
				'height': 'height'
			}

		},
	},
	plugins: [],
};

module.exports = config