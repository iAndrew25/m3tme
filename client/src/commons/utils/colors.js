const themes = {
	white: {
		primary: '#3F3F3F',
		secondary: '#5B5A62',
		subtitle: '#939393',
		border: '#D7CABD',
		background: '#ECEDEA',
		white: '#FFFFFF',
	},
	orange: {
		darkPrimary: '#E64A19',
		defaultPrimary: '#FF5722',
		lightPrimary: '#FFCCBC',

		primaryText: '#212121',
		secondaryText: '#757575',

		background: '#FAFAFA',
		darkBackground: '#212121',

		iconPrimary: '#FFFFFF',

		accent: '#536DFE',
		divider: '#EEEEEE',

		white: '#FFFFFF',
		modalBackground: '#00000080',
	},
};

export default color => themes.orange[color];
