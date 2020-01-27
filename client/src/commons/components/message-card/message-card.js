import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '@ui-kitten/components';

import Avatar from '../avatar/avatar';
import HeaderNames from '../header-names/header-names';
import getColor from '../../utils/colors';

function MessageCard({person, lastMessage, time}) {
	const {fullName, username, avatarUrl} = person;

	return (
		<View style={style.wrapper}>
			<Avatar size="M" avatarUrl={avatarUrl} />
			<View style={style.middle}>
				<HeaderNames fluidText={fullName} fixedText={username} />
				<Text
					numberOfLines={1}
					ellipsisMode="tail"
					style={style.message}>
					{lastMessage}
				</Text>
			</View>
			<View style={style.time}>
				<Text style={style.timeText}>{time}</Text>
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		marginHorizontal: 8,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
		padding: 8,
	},
	middle: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		flexShrink: 1,
		marginHorizontal: 16,
	},
	time: {
		flexShrink: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
	timeText: {
		color: getColor('subtitle'),
		fontSize: 10,
	},
	message: {
		flexGrow: 1,
		color: getColor('subtitle'),
		fontSize: 11,
	},
});

export default MessageCard;
