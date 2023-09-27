const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
				groovyWendy: ['groovyWendy', 'cursive']
			},
			fontSize: {
				sm: '0.9rem',
				base: '1rem',
				xl: '1.25rem',
				'2xl': '1.563rem',
				'3xl': '1.953rem',
				'4xl': '2.441rem',
				'5xl': '3.052rem'
			},
			colors: {
				'aubergine-dark': '#212642',
				aubergine: '#6D688D',
				midnight: '#195ED9',
				'midnight-light': '#4AB4D6',
				light: '#EBEBEC'
			}
		}
	},
	plugins: [],
	purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.svelte']
};
