import React, {useState} from 'react';
import {ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import FullWidthImage from 'react-native-fullwidth-image'
import SafeText from '../safe-text/safe-text';
import {INNER_MARGIN, OUTER_MARGIN} from '../../utils/sizes';
import PostHeader from './post-header/post-header';
import PostFooter from './post-footer/post-footer';

function Feed({posts}) {

	const getPost = ({type, sourceUri, text}) => {
		if(type === 'IMAGE') {
			return (
				<FullWidthImage 
					style={style.imageStyle}
					source={{uri: sourceUri}}
				/>
			);
		}

		if(type === 'TEXT') {
			return (
				<SafeText text={text} />
			);
		}

		return null;
	}

	return (
		<Layout style={style.wrapper}>
			{posts.map(post => 
				<Layout style={style.postWrapper}>
					<PostHeader />
					{getPost(post)}
					<PostFooter />
				</Layout>
			)}
		</Layout>
	); 
}

Feed.defaultProps = {
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
	},
	postWrapper: {
		flexGrow: 1,
		borderRadius: 8,
		backgroundColor: '#888',
		padding: INNER_MARGIN,
		marginBottom: INNER_MARGIN
	},
	imageStyle: {
		borderRadius: 8
	},
	textStyle: {
		color: 'white'
	}
});

export default Feed;