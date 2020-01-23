import React, {useState} from 'react';
import {ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import Post from './post/post';
import {INNER_MARGIN, THREE_COLUMNS_SIZE} from '../../utils/sizes';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function Posts({posts, isEditMode}) {
	return (
		<Layout style={style.wrapper}>
			{posts.map(post => (
				<Layout style={style.postWrapper}>
					<Post {...post} />
				</Layout>
			))}
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
		flex: 1
	},
	postWrapper: {
		flexGrow: 1
	},
	icon: {
		justifyContent: 'center',
		alignSelf: 'center'		
	}
});

export default Posts;