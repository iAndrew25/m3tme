import React from 'react';
import ReactNative from 'react-native';

import getColor from '../../utils/colors';

function Text({value, type, theme, style: componentStyle, ...rest}) {
	return (
		<ReactNative.Text
			{...rest}
			style={[style[theme], style[type], componentStyle]}>
			{value}
		</ReactNative.Text>
	);
}

Text.defaultProps = {
	theme: 'dark',
	type: 'paragraph',
};

const style = ReactNative.StyleSheet.create({
	paragraph: {
		fontSize: 12,
	},
	subtitle: {
		fontSize: 10,
		color: getColor('secondaryText'),
	},
	title: {
		fontSize: 13,
	},
	h3: {
		fontSize: 15,
		letterSpacing: 0.5,
		fontWeight: 'bold'
	},
	h4: {
		fontSize: 16,
		letterSpacing: 0.5,
		fontWeight: 'bold'
	},
	dark: {
		color: getColor('primaryText'),
	},
	light: {
		color: getColor('white'),
	},
});

export default Text;
