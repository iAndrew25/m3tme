import patternMock from 'pattern-mock';
import React, {Fragment} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import BackHeader from '../../commons/components/headers/back-header/back-header';
import Post from '../../commons/components/post/post';
import Reply from '../../commons/components/post/reply/reply';

import getColor from '../../commons/utils/colors';

const post = patternMock({
	data: {
		id: 'COUNTER',
		time: 'WORD',
		heartsCount: 'CUSTOM_NUMBER_23-167',
		commentsCount: 'CUSTOM_NUMBER_23-167',
		contentType: 'TEXT',
		content: 'PARAGRAPH',
		author: {
			id: 'COUNTER',
			avatarUrl:
				'https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/r/red-panda_thumb.ngsversion.1485895956258.adapt.1900.1.JPG',
			fullName: 'FULL_NAME',
			username: 'WORD',
		},
		comments: [
			{
				id: 'COUNTER',
				author: {
					id: 'COUNTER',
					avatarUrl:
						'http://www.haircolorsideas.com/wp-content/uploads/2015/02/hair-in-red-pillarbox.jpg',
					fullName: 'FULL_NAME',
					username: 'WORD',
				},
				time: 'WORD',
				content: 'PARAGRAPH',
			},
			[10, 12],
		],
	},
});

function FullPost({navigation}) {
	return (
		<Fragment>
			<BackHeader onPress={() => navigation.goBack()} />
			<ScrollView contentContainerStyle={style.wrapper}>
				<Post {...post.data} />
			</ScrollView>
			<Reply />
		</Fragment>
	);
}

const style = StyleSheet.create({
	wrapper: {
		backgroundColor: getColor('background'),
	},
});

export default FullPost;
