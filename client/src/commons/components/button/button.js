import React, {Fragment} from 'react';
import {
	ScrollView,
	TouchableOpacity,
	Image,
	View,
	StyleSheet,
	Text
} from 'react-native';
import {
	Icon,
} from '@ui-kitten/components';

import {INNER_MARGIN, BUTTON_SIZES} from '../../utils/sizes';

import getColor from '../../utils/colors';

const getThemeStyle = theme => {
	switch (theme) {
		case 'dark':
			return {
				button: style.dark,
				text: style.lightText,
				icon: getColor('white'),
			};

		case 'light':
			return {
				button: style.light,
				text: style.darkText,
				icon: getColor('primary'),
			};

		case 'flat':
			return {
				button: {},
				text: {},
				icon: getColor('primary'),
			};
	}
};

function Button({
	children,
	text,
	theme,
	type,
	size,
	onPress,
	iconName,
	iconSize,
	textStyle,
	style: componentStyle,
}) {
	const buttonTheme = getThemeStyle(theme);

	switch (type) {
		case 'icon-only':
			return (
				<TouchableOpacity
					onPress={onPress}
					style={[
						style.wrapper,
						BUTTON_SIZES[size],
						buttonTheme.button,
						style.iconOnly,
						componentStyle,
					]}
					activeOpacity={0.7}>
					<Icon
						name={iconName}
						width={iconSize}
						height={iconSize}
						fill={buttonTheme.icon}
					/>
				</TouchableOpacity>
			);

		case 'icon-left':
			return (
				<TouchableOpacity
					onPress={onPress}
					style={[
						style.wrapper,
						BUTTON_SIZES[size],
						style.wraperWithIcon,
						buttonTheme.button,
						componentStyle,
					]}
					activeOpacity={0.7}>
					<Icon
						name={iconName}
						width={iconSize}
						height={iconSize}
						fill={buttonTheme.icon}
						style={style.iconLeft}
					/>
					<Text style={[style.text, buttonTheme.text, textStyle]}>
						{text}
					</Text>
				</TouchableOpacity>
			);

		case 'icon-right':
			return (
				<TouchableOpacity
					onPress={onPress}
					style={[
						style.wrapper,
						BUTTON_SIZES[size],
						style.wraperWithIcon,
						buttonTheme.button,
						componentStyle,
					]}
					activeOpacity={0.7}>
					<Text style={[style.text, buttonTheme.text, textStyle]}>
						{text}
					</Text>
					<Icon
						name={iconName}
						width={iconSize}
						height={iconSize}
						fill={buttonTheme.icon}
						style={style.iconRight}
					/>
				</TouchableOpacity>
			);

		default:
			return (
				<TouchableOpacity
					onPress={onPress}
					style={[style.wrapper, BUTTON_SIZES[size], componentStyle]}
					activeOpacity={0.7}>
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
	style: {},
};

const style = StyleSheet.create({
	wrapper: {
		borderRadius: 4,
		justifyContent: 'center',
		alignItems: 'center',
	},
	wraperWithIcon: {
		flexDirection: 'row',
	},
	text: {
		fontWeight: 'bold',
	},
	iconLeft: {
		marginRight: INNER_MARGIN,
	},
	iconRight: {
		marginLeft: INNER_MARGIN,
	},
	iconOnly: {
		padding: INNER_MARGIN,
	},
	light: {
		backgroundColor: getColor('white'),
	},
	dark: {
		backgroundColor: getColor('primary'),
	},
	lightText: {
		color: getColor('white'),
	},
	darkText: {
		color: getColor('primary'),
	},
});

export default Button;
