import patternMock from 'pattern-mock';
import React, {Fragment} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';

import Button from '../../commons/components/button/button';

import Header from '../../commons/components/headers/header/header';

import getColor from '../../commons/utils/colors';

import Post from '../../commons/components/post/post';

import {OUTER_MARGIN, INNER_MARGIN} from '../../commons/utils/sizes';

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

function Home({avatarUrl, navigation}) {
	const handleOnCommentPress = () => navigation.navigate('FullPost');

	return (
		<Fragment>
			<Header
				leftComponent={<Text style={style.homeText}>M3tme logo</Text>}
				rightComponent={
					<Button
						style={style.more}
						theme="dark"
						iconName="more-vertical-outline"
						type="icon-only"
					/>
				}
			/>
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
			<Button
				size="L"
				theme="dark"
				type="icon-only"
				iconName="plus-outline"
				style={style.addPost}
			/>
		</Fragment>
	);
}

Home.defaultProps = {
	avatarUrl: 'https://images.wsj.net/im-119693?width=620&size=1.5',
};

const style = StyleSheet.create({
	more: {
		width: 50,
		height: 50,
		flexGrow: 0,
		flexShrink: 1,
	},
	addPost: {
		width: 50,
		height: 50,
		borderRadius: 25,
		position: 'absolute',
		bottom: OUTER_MARGIN,
		right: OUTER_MARGIN,
	},
	footerComponent: {
		paddingBottom: 50 + OUTER_MARGIN + INNER_MARGIN,
	},
	homeText: {
		flex: 1,
		paddingLeft: OUTER_MARGIN,
		color: getColor('white'),
	},
});

export default Home;
