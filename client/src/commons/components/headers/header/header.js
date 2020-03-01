import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import Button from '../../button/button';

import getColor from '../../../utils/colors';

function Header({
	style: componentStyle,
	leftComponent,
	centerComponent,
	rightComponent,
}) {
	return (
		<View style={[style.container, componentStyle]}>
			{leftComponent}
			{centerComponent}
			{rightComponent}
		</View>
	);
}

Header.propTypes = {
	style: PropTypes.object,
	leftComponent: PropTypes.element,
	centerComponent: PropTypes.element,
	rightComponent: PropTypes.element,
};

function HeaderButton({iconName, onPress, theme}) {
	return (
		<View style={style.icon}>
			<Button
				onPress={onPress}
				theme={theme}
				iconName={iconName}
				type="icon-only"
			/>
		</View>
	);
}

HeaderButton.defaultProps = {
	theme: 'dark'
};

const style = StyleSheet.create({
	container: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: getColor('defaultPrimary'),
	},
	icon: {
		width: 50,
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	}
});

export {HeaderButton};
export default memo(Header);
