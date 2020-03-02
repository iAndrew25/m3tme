import React from 'react';
import {StyleSheet, View} from 'react-native';

import Text from '../text/text';
import Avatar from '../avatar/avatar';
import HeaderNames from '../header-names/header-names';

import {INNER_MARGIN, OUTER_MARGIN} from '../../utils/sizes';
import getColor from '../../utils/colors';

function MessageCard({person, lastMessage, time}) {
	const {fullName, username, avatarUrl} = person;

	return (
		<View style={style.wrapper}>
			<Avatar size="L" avatarUrl={avatarUrl} />
			<View style={style.middle}>
				<HeaderNames fluidText={fullName} fixedText={username} />
				<Text
					numberOfLines={1}
					ellipsisMode="tail"
					style={style.message}
					value={lastMessage}
				/>
			</View>
			<View style={style.time}>
				<Text style={style.timeText} value={time} />
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: getColor('white'),
		marginBottom: INNER_MARGIN,
		alignItems: 'center',
		flexDirection: 'row',
		padding: OUTER_MARGIN,
		elevation: 1,
	},
	middle: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		flexShrink: 1,
		marginHorizontal: OUTER_MARGIN,
	},
	time: {
		flexShrink: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
	timeText: {
		color: getColor('secondaryText'),
		fontSize: 10,
	},
	message: {
		color: getColor('secondaryText'),
	},
});

export default MessageCard;
