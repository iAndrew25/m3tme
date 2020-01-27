import patternMock from 'pattern-mock';
import React, {Fragment} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Layout, TopNavigation} from '@ui-kitten/components';

import BackHeader from '../../commons/components/headers/back-header/back-header';
import Post from '../../commons/components/post/post';
import Reply from '../../commons/components/post/reply/reply';

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
				'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.takeflyte.com%2Fwp-content%2Fuploads%2F2010%2F10%2Fapple.png',
			fullName: 'FULL_NAME',
			username: 'WORD',
		},
		comments: [
			{
				id: 'COUNTER',
				author: {
					id: 'COUNTER',
					avatarUrl:
						'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.takeflyte.com%2Fwp-content%2Fuploads%2F2010%2F10%2Fapple.png',
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
			<ScrollView>
				<Post {...post.data} />
			</ScrollView>
			<Reply />
		</Fragment>
	);
}

export default FullPost;
