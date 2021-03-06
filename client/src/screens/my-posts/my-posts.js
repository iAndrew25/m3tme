import patternMock from 'pattern-mock';
import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import Post from '../../commons/components/post/post';

import getColor from '../../commons/utils/colors';

const posts = patternMock({
	data: [
		{
			id: 'COUNTER',
			time: 'WORD',
			heartsCount: 'CUSTOM_NUMBER_23-167',
			commentsCount: 'CUSTOM_NUMBER_23-167',
			contentType: 'TEXT',
			content: 'PARAGRAPH',
			author: {
				id: 'COUNTER',
				avatarUrl:
					'http://www.haircolorsideas.com/wp-content/uploads/2015/02/hair-in-red-pillarbox.jpg',
				fullName: 'FULL_NAME',
				username: 'WORD',
			},
		},
	],
});

function MyPosts({avatarUrl, navigation}) {
	const handleOnCommentPress = () => navigation.navigate('FullPost');

	return (
		<View style={style.wrapper}>
			<FlatList
				data={posts.data}
				renderItem={({item}) => (
					<Post
						{...item}
						handleOnCommentPress={handleOnCommentPress}
					/>
				)}
				keyExtractor={item => item.id.toString()}
				ListFooterComponent={<View style={style.footerComponent} />}
			/>
		</View>
	);
}

MyPosts.defaultProps = {
	avatarUrl: 'https://images.wsj.net/im-119693?width=620&size=1.5',
};

const style = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: getColor('background'),
	},
});

export default MyPosts;
