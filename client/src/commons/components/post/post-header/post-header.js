import React from 'react';
import {ScrollView, View, Image, StyleSheet} from 'react-native';
import {
	Avatar,
	Text,
	Layout,
	Button,
	TopNavigation,
	Icon,
	List,
	Card,
} from '@ui-kitten/components';

import {INNER_MARGIN, OUTER_MARGIN} from '../../../utils/sizes';

import HeaderNames from '../../header-names/header-names';

import getColor from '../../../utils/colors';

function PostHeader({author, time}) {
	const {avatarUrl, fullName, username} = author;

	return (
		<View style={style.wrapper}>
			<Avatar shape="round" size="small" source={{uri: avatarUrl}} />
			<View style={style.text}>
				<HeaderNames fluidText={fullName} fixedText={username} />
				<Text category="c2" style={style.time}>
					{time}
				</Text>
			</View>
			<View style={style.more}>
				<Icon
					name="more-vertical-outline"
					width={16}
					height={16}
					fill={getColor('primary')}
				/>
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		flex: 1,
		paddingBottom: INNER_MARGIN,
		flexDirection: 'row',
		alignItems: 'center',
	},
	text: {
		flexGrow: 1,
		flexShrink: 1,
		paddingLeft: INNER_MARGIN,
	},
	more: {
		flexGrow: 0,
	},
	time: {
		color: getColor('subtitle'),
	},
});

export default PostHeader;
