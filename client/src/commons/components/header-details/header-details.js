import React from 'react';
import {StyleSheet, View} from 'react-native';

import Avatar from '../avatar/avatar';
import Text from '../text/text';

import getColor from '../../utils/colors';
import {OUTER_MARGIN} from '../../utils/sizes';

function HeaderDetails({displayName, username, avatarUrl}) {
	return (
		<View style={style.wrapper}>
			<Avatar size="M" avatarUrl={avatarUrl} />
			<View style={style.names}>
				<Text
					type="title"
					numberOfLines={1}
					ellipsizeMode="tail"
					value={displayName}
					style={style.displayName}
				/>
				<Text
					type="subtitle"
					numberOfLines={1}
					style={style.username}
					value={`@${username}`}
				/>
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		flexShrink: 1
	},
	displayName: {
		fontWeight: 'bold',
		color: getColor('white'),
	},
	username: {
		fontStyle: 'italic',
		color: getColor('white')
	},
	names: {
		flexDirection: 'column',
		paddingHorizontal: OUTER_MARGIN,
		flexShrink: 1
	}
});

export default HeaderDetails;
