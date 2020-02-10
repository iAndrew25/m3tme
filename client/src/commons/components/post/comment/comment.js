import React from 'react';
import {View, Alert, TouchableOpacity, StyleSheet} from 'react-native';

import {INNER_MARGIN} from '../../../utils/sizes';

import HeaderNames from '../../header-names/header-names';
import SafeText from '../../safe-text/safe-text';
import Avatar from '../../avatar/avatar';

function Comment({author, content, time, handleOnLongPress}) {
	const {avatarUrl, fullName, username} = author;

	return (
		<TouchableOpacity
			style={style.wrapper}
			onLongPress={handleOnLongPress}
			activeOpacity={0.7}>
			<Avatar size="M" avatarUrl={avatarUrl} />
			<View style={style.header}>
				<HeaderNames
					fluidText={fullName}
					fixedText={username}
					leftText={time}
				/>
				<SafeText text={content} />
			</View>
		</TouchableOpacity>
	);
}

const style = StyleSheet.create({
	wrapper: {
		flexGrow: 1,
		flexDirection: 'row',
		paddingBottom: INNER_MARGIN,
	},
	header: {
		flexShrink: 1,
		paddingLeft: INNER_MARGIN,
		flexDirection: 'column',
	},
});

Comment.defaultProps = {
	handleOnLongPress: () => Alert.alert('Remove?'),
};

export default Comment;
