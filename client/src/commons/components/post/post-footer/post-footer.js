import React from 'react';
import {ScrollView, View, Image, StyleSheet} from 'react-native';
import {
	Avatar,
	Text,
	Layout,
	TopNavigation,
	Icon,
	List,
	Card,
} from '@ui-kitten/components';

import {INNER_MARGIN, OUTER_MARGIN} from '../../../utils/sizes';

import getColor from '../../../utils/colors';

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
				iconSize={14}
				theme="light"
				iconName="heart"
				type="icon-right"
				text={heartsCount || ''}
			/>
			<Button
				textStyle={style.text}
				onPress={onCommentPress}
				size="M"
				iconSize={14}
				theme="light"
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
