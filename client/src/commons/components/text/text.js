import React from 'react';
import ReactNative from 'react-native';

import getColor from '../../utils/colors';

function Text({value, type, theme, style: componentStyle, ...rest}) {
	return (
		<ReactNative.Text {...rest} style={[style[theme], style[type], componentStyle]}>{value}</ReactNative.Text>
	);
}

Text.defaultProps = {
	theme: 'dark',
	type: 'paragraph'
};

const style = ReactNative.StyleSheet.create({
	paragraph: {
		fontSize: 12
	},
	subtitle: {
		fontSize: 11,
		color: getColor('subtitle'),
	},
	title: {
		fontSize: 13
	},
	h3: {
		fontSize: 15
		fontWeight: 'bold'
	},
	dark: {
		color: getColor('primary')
	},
	light: {
		color: getColor('white')
	}
});

export default Text;
