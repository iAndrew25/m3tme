import React, {memo} from 'react';
import {StyleSheet} from 'react-native';

import Text from '../../text/text';
import Header from '../header/header';
import Button from '../../button/button';

import {OUTER_MARGIN} from '../../../utils/sizes';

function BackHeader({title, onPress, children}) {
	const renderChildren = () => {
		if (children) {
			return children;
		}
		if (title) {
			return <Text type="h2" theme="light" value={title} />;
		}
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
					type="icon-only"
				/>
			}
			centerComponent={renderChildren()}
		/>
	);
}

const style = StyleSheet.create({
	header: {
		paddingRight: OUTER_MARGIN,
	},
	backIcon: {
		width: 50,
		height: 50,
		flexGrow: 0,
		flexShrink: 1,
	},
});

export default memo(BackHeader);
