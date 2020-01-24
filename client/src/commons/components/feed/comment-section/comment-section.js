import React from 'react';
import {ScrollView, View, Image, StyleSheet} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import {INNER_MARGIN, OUTER_MARGIN} from '../../../utils/sizes';

import Comment from './comment/comment';

function CommentSection({pictureUrl, name, username, timestamp}) {
	return (
		<View style={style.wrapper}>
			{[1,1,1,1,1,1,1,1,1,1].map(x => <Comment />)}
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		paddingLeft: INNER_MARGIN,
	}
});

CommentSection.defaultProps = {

}

export default CommentSection;