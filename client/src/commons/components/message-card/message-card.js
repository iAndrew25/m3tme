import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Layout, Avatar} from '@ui-kitten/components';


import HeaderNames from '../header-names/header-names';
import getColor from '../../utils/colors';

function MessageCard({person, lastMessage, time}) {
	const {fullName, username, avatarUrl} = person;

	return (
		<View style={style.wrapper}>
			<Avatar
				shape="round"
				style={style.avatar}
				source={{uri: avatarUrl}}
			/>
			<View style={style.middle}>
				<HeaderNames fluidText={fullName} fixedText={username} />
				<Text numberOfLines={1} ellipsisMode="tail">{lastMessage}</Text>
			</View>
			<View style={style.time}>
				<Text>{time}</Text>
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
	},
	middle: {
		flexDirection: 'column',
		flexGrow: 1
	},
	time: {
		flexShrink: 0,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default MessageCard;
