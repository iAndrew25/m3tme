import React from 'react';
import {View, StyleSheet} from 'react-native';

import Button from '../../button/button';

function PostFooter({
	onHeartPress,
	onCommentPress,
	heartsCount,
	commentsCount,
}) {
	return (
		<View style={style.wrapper}>
			<Button
				textStyle={style.text}
				onPress={onHeartPress}
				size="M"
				iconSize={16}
				theme="flat"
				iconName="heart-outline"
				type="icon-right"
				text={heartsCount || ''}
			/>
			<Button
				textStyle={style.text}
				onPress={onCommentPress}
				size="M"
				iconSize={16}
				theme="flat"
				iconName="message-square"
				type="icon-right"
				text={commentsCount || ''}
			/>
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		marginTop: 2,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	text: {
		fontWeight: 'normal',
		fontSize: 11,
		marginRight: -4,
	},
});

export default PostFooter;
