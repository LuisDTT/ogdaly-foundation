import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: '#280f15',
				secondary: '#8d4a54',
				'shadow-color': '#0000002f',
				transparentWhiteColor: '#ffffff6f'
			}
		}
	},
	plugins: []
} satisfies Config
