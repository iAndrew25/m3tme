import React, {Fragment} from 'react';
import {ScrollView, TouchableOpacity, Image, View, StyleSheet} from 'react-native';
import {Avatar, Text, Layout, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import {OUTER_MARGIN, INNER_MARGIN} from '../../utils/sizes';

import getColor from '../../utils/colors';

function Button({children, text, theme, type, size, iconName, iconSize, textStyle, style: componentStyle, }) {

	const buttonTheme = theme === 'dark' ? {
		button: style.dark,
		text: style.lightText,
		icon: getColor('white')
	} : {
		button: style.light,
		text: style.darkText,
		icon: getColor('primary')
	};

	switch(type) {
		case 'icon-only':
			return (
				<TouchableOpacity style={[style.wrapper, style[size], buttonTheme.button, style.iconOnly, componentStyle]} activeOpacity={0.7}>
					<Icon name={iconName} width={iconSize} height={iconSize} fill={buttonTheme.icon} />
				</TouchableOpacity>
			);

		case 'icon-left':
			return (
				<TouchableOpacity style={[style.wrapper, style[size], style.wraperWithIcon, buttonTheme.button, componentStyle]} activeOpacity={0.7}>
					<Icon name={iconName} width={iconSize} height={iconSize} fill={buttonTheme.icon} style={style.iconLeft} />
					<Text style={[style.text, buttonTheme.text, textStyle]}>{text}</Text>
				</TouchableOpacity>
			);

		case 'icon-right':
			return (
				<TouchableOpacity style={[style.wrapper, style[size], style.wraperWithIcon, buttonTheme.button, componentStyle]} activeOpacity={0.7}>
					<Text style={[style.text, buttonTheme.text, textStyle]}>{text}</Text>
					<Icon name={iconName} width={iconSize} height={iconSize} fill={buttonTheme.icon} style={style.iconRight} />
				</TouchableOpacity>
			);

		default:
			return (
				<TouchableOpacity style={[style.wrapper, style[size], componentStyle]} activeOpacity={0.7}>
					{children}
				</TouchableOpacity>
			);
	}
}

Button.defaultProps = {
	theme: 'dark',
	iconSize: 20,
	size: 'L',
	textStyle: {},
	style: {}
}

const style = StyleSheet.create({
	wrapper: {
		borderRadius: 4,
		justifyContent: 'center', 
		alignItems: 'center'
	},
	L: {
		paddingVertical: OUTER_MARGIN,
		paddingHorizontal: OUTER_MARGIN,
	},
	M: {
		paddingVertical: INNER_MARGIN,
		paddingHorizontal: INNER_MARGIN,
	},
	S: {
		paddingVertical: 4,
		paddingHorizontal: 4,
	},
	wraperWithIcon: {
		flexDirection: 'row'
	},
	text: {
		fontWeight: 'bold'
	},
	iconLeft: {
		marginRight: INNER_MARGIN
	},
	iconRight: {
		marginLeft: INNER_MARGIN
	},
	iconOnly: {
		padding: INNER_MARGIN
	},
	light: {
		backgroundColor: getColor('white')
	},
	dark: {
		backgroundColor: getColor('primary')
	},
	lightText: {
		color: getColor('white')
	},
	darkText: {
		color: getColor('primary')
	}
});

export default Button;