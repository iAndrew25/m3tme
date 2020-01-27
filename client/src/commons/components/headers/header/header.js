import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

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

const style = StyleSheet.create({
	container: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: getColor('primary'),
	},
});

Header.propTypes = {
	style: PropTypes.object,
	leftComponent: PropTypes.element,
	centerComponent: PropTypes.element,
	rightComponent: PropTypes.element,
};

export default memo(Header);
