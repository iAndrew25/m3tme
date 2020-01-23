import React from 'react';
import {ScrollView, Image, StyleSheet} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import {INNER_MARGIN, OUTER_MARGIN} from '../../../../utils/sizes';

function PostHeader({pictureUrl, name, username, timestamp}) {
	return (
		<Layout style={style.wrapper}>
			<Avatar shape='round' size="small" source={{uri: pictureUrl}}/>
			<Layout style={style.text}>
				<Layout style={style.namesRow}>
					<Layout style={style.name}>
						<Text category="c1" numberOfLines={1} ellipsizeMode='tail'>{name}</Text>						
					</Layout>
					<Layout style={style.username}>
						<Text category="c1" numberOfLines={1}> &#183; @{username}</Text>						
					</Layout>
				</Layout>
				<Text category="c2">{timestamp}</Text>
			</Layout>
			<Layout style={style.more}>
				<Icon name='more-vertical-outline' width={16} height={16} fill='white'/>				
			</Layout>
		</Layout>
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
	namesRow: {
		flexDirection: 'row'
	},
	name: {
		flexShrink: 1
	},
	username: {
		flexGrow: 1
	},
	more: {
		flexGrow: 0,
	}
});

PostHeader.defaultProps = {
	pictureUrl: 'https://akveo.github.io/react-native-ui-kitten/docs/assets/playground-build/static/media/icon.a78e4b51.png',
	name: 'Donald Trump',
	username: 'realDonaldTrump',
	timestamp: '8h'
}

export default PostHeader;