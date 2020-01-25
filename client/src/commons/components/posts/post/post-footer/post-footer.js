import React from 'react';
import {ScrollView, View, Image, StyleSheet} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import {INNER_MARGIN, OUTER_MARGIN} from '../../../utils/sizes';

import CommentSection from '../comment-section/comment-section';

import getColor from '../../../utils/colors';

function PostFooter({pictureUrl, name, username, timestamp}) {
	return (
		<View>
			<View style={style.wrapper}>
				<Button style={style.button} appearance='ghost' size='small' icon={(style) => <Icon {...style} fill={getColor('primary')} name='heart' />} />
				<Button style={style.button} appearance='ghost' size='small' icon={(style) => <Icon {...style} fill={getColor('primary')} name='message-square'/>} />
			</View>
			<CommentSection />
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'flex-end'
	}
});

PostFooter.defaultProps = {

}

export default PostFooter;