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
		lightPrimary:'#FFCCBC',
		iconPrimary: '#FFFFFF',
		accent: '#536DFE',
		primaryText: '#212121',
		secondaryText: '#757575',
		divider: '#EEEEEE',
		background: '#FAFAFA',
		white: '#FFFFFF'
	}
};

export default color => themes.orange[color];
