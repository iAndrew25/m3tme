import React, {memo} from 'react';
import {StyleSheet} from 'react-native';

import Text from '../../text/text';
import Header from '../header/header';
import Button from '../../button/button';

import getColor from '../../../utils/colors';
import {OUTER_MARGIN} from '../../../utils/sizes';

function MenuHeader({title, onPress, iconName, children}) {
	const renderChildren = () => {
		if (children) {
			return children;
		}
		if (title) {
			return <Text type="h2" style={style.text} theme="light" value={title} />;
		}
	};

	return (
		<Header
			style={style.header}
			leftComponent={renderChildren()}
			rightComponent={
				<Button
					style={style.icon}
					theme="dark"
					iconName={iconName}
					type="icon-only"
					onPress={onPress}
				/>
			}
		/>
	);
}

const style = StyleSheet.create({
	header: {
		paddingLeft: OUTER_MARGIN,
	},
	text: {
		flex: 1
	},
	icon: {
		width: 50,
		height: 50,
		flexGrow: 0,
		flexShrink: 1,
	}
});

export default memo(MenuHeader);
