import React from 'react';
import {ScrollView, View, Image, StyleSheet} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import {INNER_MARGIN, OUTER_MARGIN} from '../../../utils/sizes';

import HeaderNames from '../../header-names/header-names';

import getColor from '../../../utils/colors';

function PostHeader({pictureUrl, name, username, timestamp}) {
	return (
		<View style={style.wrapper}>
			<Avatar shape='round' size="small" source={{uri: pictureUrl}}/>
			<View style={style.text}>
				<HeaderNames fluidText={name} fixedText={username} />
				<Text category="c2" style={style.timestamp}>{timestamp}</Text>
			</View>
			<View style={style.more}>
				<Icon name='more-vertical-outline' width={16} height={16} fill='white'/>				
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
		paddingLeft: INNER_MARGIN
	},
	more: {
		flexGrow: 0,
	},
	timestamp: {
		color: getColor('subtitle')
	}
});

PostHeader.defaultProps = {
	pictureUrl: 'https://akveo.github.io/react-native-ui-kitten/docs/assets/playground-build/static/media/icon.a78e4b51.png',
	name: 'Donald Trump',
	username: 'realDonaldTrump',
	timestamp: '8h'
}

export default PostHeader;