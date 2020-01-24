import React from 'react';
import {ScrollView, Image, StyleSheet} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import {INNER_MARGIN, OUTER_MARGIN} from '../../../utils/sizes';

import CommentSection from '../comment-section/comment-section';

function PostFooter({pictureUrl, name, username, timestamp}) {
	return (
		<Layout>
			<Layout style={style.wrapper}>
				<Button style={style.button} appearance='ghost' size='small' icon={(style) => <Icon {...style} fill="white" name='heart' />} />
				<Button style={style.button} appearance='ghost' size='small' icon={(style) => <Icon {...style} fill="white" name='message-square'/>} />
			</Layout>
			<CommentSection />
		</Layout>
	);
}

const style = StyleSheet.create({
	wrapper: {
		//flex: 1,
		//paddingBottom: INNER_MARGIN,
		flexDirection: 'row',
		justifyContent: 'flex-end'
		//alignItems: 'center',
	},
	button: {
		//padding: INNER_MARGIN
		//backgroundColor: 'white'
	}
});

PostFooter.defaultProps = {

}

export default PostFooter;