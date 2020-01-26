import React, {memo} from 'react';
import {Text, StyleSheet} from 'react-native';

import Header from '../header/header';
import Button from '../../button/button';

import getColor from '../../../utils/colors';
import {OUTER_MARGIN} from '../../../utils/sizes';

function BackHeader({title, onPress, testID, children}) {
	const renderChildren = () => {
		if (children) return children;
		if (title) return <Text style={style.titleStyle}>{title}</Text>;
	};

	return (
		<Header
			style={style.header}
			leftComponent={
				<Button 
					onPress={onPress} 
					style={style.backIcon} 
					theme="dark" 
					iconName="arrow-back-outline" 
					type="icon-only" />
			}
			centerComponent={renderChildren()}
		/>
	);
}

const style = StyleSheet.create({
	header: {
		paddingRight: OUTER_MARGIN
	},
	backIcon: {
		width: 50,
		height: 50,
		flexGrow: 0,
		flexShrink: 1
	},
	titleStyle: {
		color: getColor('white'),
		flexGrow: 1,
		flexShrink: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		textAlign: 'left',
		fontSize: 16,
		lineHeight: 24,
		paddingRight: 30
	}
});

export default memo(BackHeader);
