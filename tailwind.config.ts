import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import cornbreadUI from 'cornbread-ui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				brand: {
					DEFAULT: '#3f72af',
					light: '#a6cae0',
					dark: '#244b85',
					content: '#ffffff'
				},
				accent: {
					DEFAULT: '#af3f72',
					light: '#e0a6ca',
					dark: '#85244b',
					content: '#ffffff'
				}
			}
		}
	},

	plugins: [typography, forms, containerQueries, cornbreadUI]
} satisfies Config;
