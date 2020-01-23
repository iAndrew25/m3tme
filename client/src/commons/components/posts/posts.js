import React, {useState} from 'react';
import {ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import Post from './post/post';
import {INNER_MARGIN, THREE_COLUMNS_SIZE} from '../../utils/sizes';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function Posts({posts, isEditMode}) {
	return (
		<Layout style={style.wrapper}>
			{posts.map(post => <Post {...post} />)}
		</Layout>
	); 

}

Posts.defaultProps = {
	posts: [{
		type: 'IMAGE',
		text: 'Beautiful and dramatic Antelope Canyon Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dolores voluptatibus maxime modi corporis assumenda porro obcaecati quos quidem, quisquam beatae, odio dolorem ducimus mollitia similique harum pariatur hic sint! ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea tempore sit eveniet maxime explicabo nihil suscipit, assumenda vero aliquam, mollitia esse quidem exercitationem, dolore sed sunt quo magni nesciunt?',
		sourceUri: 'https://i.imgur.com/UYiroysl.jpg'
	},
	{
		type: 'TEXT',
		text: 'Earlier this morning, NYC Beautiful and dramatic Antelope Canyon Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dolores voluptatibus maxime modi corporis assumenda porro obcaecati quos quidem, quisquam beatae, odio dolorem ducimus mollitia similique harum pariatur hic sint! ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea tempore sit eveniet maxime explicabo nihil suscipit, assumenda vero aliquam, mollitia esse quidem exercitationem, dolore sed sunt quo magni nesciunt?',
		sourceUri: 'https://i.imgur.com/UPrs1EWl.jpg'
	},
	{
		type: 'IMAGE',
		text: 'White Pocket Sunset Beautiful and dramatic Antelope Canyon Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dolores voluptatibus maxime modi corporis assumenda porro obcaecati quos quidem, quisquam beatae, odio dolorem ducimus mollitia similique harum pariatur hic sint! ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea tempore sit eveniet maxime explicabo nihil suscipit, assumenda vero aliquam, mollitia esse quidem exercitationem, dolore sed sunt quo magni nesciunt?',
		sourceUri: 'https://i.imgur.com/MABUbpDl.jpg'
	},
	{
		type: 'TEXT',
		text: 'Acrocorinth, Greece Beautiful and dramatic Antelope Canyon Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dolores voluptatibus maxime modi corporis assumenda porro obcaecati quos quidem, quisquam beatae, odio dolorem ducimus mollitia similique harum pariatur hic sint! ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea tempore sit eveniet maxime explicabo nihil suscipit, assumenda vero aliquam, mollitia esse quidem exercitationem, dolore sed sunt quo magni nesciunt?',
		sourceUri: 'https://i.imgur.com/KZsmUi2l.jpg'
	},
	{
		type: 'IMAGE',
		text: 'The lone tree, majestic landscape of New Zealand Beautiful and dramatic Antelope Canyon Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dolores voluptatibus maxime modi corporis assumenda porro obcaecati quos quidem, quisquam beatae, odio dolorem ducimus mollitia similique harum pariatur hic sint! ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea tempore sit eveniet maxime explicabo nihil suscipit, assumenda vero aliquam, mollitia esse quidem exercitationem, dolore sed sunt quo magni nesciunt?',
		sourceUri: 'https://i.imgur.com/2nCt3Sbl.jpg'
	},
	{
		type: 'TEXT',
		text: 'Middle Earth, Germany Beautiful and dramatic Antelope Canyon Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dolores voluptatibus maxime modi corporis assumenda porro obcaecati quos quidem, quisquam beatae, odio dolorem ducimus mollitia similique harum pariatur hic sint! ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea tempore sit eveniet maxime explicabo nihil suscipit, assumenda vero aliquam, mollitia esse quidem exercitationem, dolore sed sunt quo magni nesciunt?',
		sourceUri: 'https://i.imgur.com/lceHsT6l.jpg'
	}]
}

const style = StyleSheet.create({
	wrapper: {
		flex: 1,
	}
});

export default Posts;