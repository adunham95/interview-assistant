import plugin from 'tailwindcss/plugin';
import components from './components.js';
import themeData from './theme.js';

const TailwindUiKitPlugin = plugin.withOptions(
	() => {
		return ({ addComponents }) => {
			addComponents(components);
		};
	},
	() => {
		return {
			// The theme's color palette can be extended with our generated colorPalette.
			theme: { extend: { colors: themeData } }
		};
	}
);

export default TailwindUiKitPlugin;
