import React from 'react';
import {ScrollView, View, Alert, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import {INNER_MARGIN, OUTER_MARGIN} from '../../../../utils/sizes';

import HeaderNames from '../../../header-names/header-names';
import SafeText from '../../../safe-text/safe-text';

function Comment({pictureUrl, name, username, timestamp, comment, handleOnLongPress}) {
	return (
		<TouchableOpacity style={style.wrapper} onLongPress={handleOnLongPress} activeOpacity={0.7}>
			<Avatar shape='round' size="tiny" source={{uri: pictureUrl}} />
			<View style={style.header}>
				<HeaderNames fluidText={name} fixedText={username} leftText={timestamp} />
				<SafeText text={comment} />
			</View>
		</TouchableOpacity>
	);
}

const style = StyleSheet.create({
	wrapper: {
		flexGrow: 1,
		flexDirection: 'row',
		paddingBottom: INNER_MARGIN
	},
	header: {
		flexShrink: 1,
		paddingLeft: INNER_MARGIN,
		flexDirection: 'column',
	}
});

Comment.defaultProps = {
	handleOnLongPress: () => Alert.alert('Remove?'),
	pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1024px-Firefox_logo%2C_2019.svg.png',
	name: 'Mozilla Firefox',
	username: 'mozillaFirefox',
	timestamp: '2h',
	comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis magni iusto, modi nulla! Mollitia enim, libero! Adipisci ad consequuntur, tenetur dolore provident velit officia magni ipsam nam quaerat, dicta sint.'
}

export default Comment;