import React from 'react';
import {ScrollView, Image, StyleSheet} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import {INNER_MARGIN, OUTER_MARGIN} from '../../../../utils/sizes';

function PostHeader({pictureUrl, name, username, timestamp}) {
	return (
		<Layout style={style.wrapper}>
			<Avatar shape='round' source={{uri: pictureUrl}}/>
			<Layout style={style.text}>
				<Text>{name} &#183; @{username}</Text>
				<Text category="p2">{timestamp}</Text>
			</Layout>
		</Layout>
	);
}

const style = StyleSheet.create({
	wrapper: {
		paddingBottom: INNER_MARGIN,
		flexDirection: 'row',
		alignItems: 'center',
	},
	text: {
		paddingLeft: INNER_MARGIN
	}
});

PostHeader.defaultProps = {
	pictureUrl: 'https://akveo.github.io/react-native-ui-kitten/docs/assets/playground-build/static/media/icon.a78e4b51.png',
	name: 'Donald Trump',
	username: 'realDonaldTrump',
	timestamp: '8h'
}

export default PostHeader;