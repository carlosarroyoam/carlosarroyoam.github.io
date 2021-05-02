/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
	theme: {
		extend: {
			fontFamily: {
				display: ['Montserrat', 'system-ui', 'sans-serif'],
				body: ['Poppins', 'system-ui', 'sans-serif']
			},
			colors: {
				primary: '#3182ce',
				background: '#eeeeee',
				surface: {
					default: '#d8d8d8',
					secondary: '#ffffff',
					header: '#37474f'
				}
			},
			container: {
				center: true,
				padding: '1rem'
			}
		}
	},
	variants: {},
	plugins: [],
	purge: {
		// Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'components/**/*.vue',
			'layouts/**/*.vue',
			'pages/**/*.vue',
			'plugins/**/*.js',
			'nuxt.config.js'
		]
	},
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
	}
};
