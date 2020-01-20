import React, {useState} from 'react';
import {ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import Post from './post/post';
import {INNER_MARGIN, THREE_COLUMNS_SIZE} from '../../utils/sizes';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function Posts({posts, isEditMode}) {
	const [userPosts, setUserPosts] = useState(posts); //temp

	return (
		<Layout style={style.wrapper}>
			{userPosts.map(post => (
				<Layout style={style.postWrapper}>
					<Post {...post} />
				</Layout>
			))}
			{isEditMode && <TouchableOpacity onPress={() => setUserPosts(pos => [...pos, {type: 'TEXT', text: 't1'}])}><Layout style={style.postWrapper}>
				<Icon name='plus' style={style.icon} fill="white" width={48} height={48} />
			</Layout></TouchableOpacity>}
			{userPosts.length % 3 === 1 && <Layout style={[style.postWrapper, style.placeholder]}></Layout>}
		</Layout>
	); 

}

Posts.defaultProps = {
	posts: [{
		type: 'TEXT',
		text: 'Beautiful and dramatic Antelope Canyon',
		sourceUri: 'https://i.imgur.com/UYiroysl.jpg'
	},
	{
		type: 'IMAGE',
		text: 'Earlier this morning, NYC',
		sourceUri: 'https://i.imgur.com/UPrs1EWl.jpg'
	},
	{
		type: 'TEXT',
		text: 'White Pocket Sunset',
		sourceUri: 'https://i.imgur.com/MABUbpDl.jpg'
	},
	{
		type: 'IMAGE',
		text: 'Acrocorinth, Greece',
		sourceUri: 'https://i.imgur.com/KZsmUi2l.jpg'
	},
	{
		type: 'TEXT',
		text: 'The lone tree, majestic landscape of New Zealand',
		sourceUri: 'https://i.imgur.com/2nCt3Sbl.jpg'
	},
	{
		type: 'IMAGE',
		text: 'Middle Earth, Germany',
		sourceUri: 'https://i.imgur.com/lceHsT6l.jpg'
	}]
}

const style = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between'
	},
	postWrapper: {
		backgroundColor: '#111',
		justifyContent: 'center',
		alignItems: 'center',
		width: THREE_COLUMNS_SIZE,
		height: THREE_COLUMNS_SIZE,
		marginBottom: INNER_MARGIN,
		borderRadius: 4,
		overflow: 'hidden'
	},
	icon: {
		justifyContent: 'center',
		alignSelf: 'center'		
	},
	placeholder: {
		backgroundColor: 'transparent'
	}
});

export default Posts;