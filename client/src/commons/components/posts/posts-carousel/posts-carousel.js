import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions } from 'react-native'

import Carousel, { Pagination } from 'react-native-snap-carousel';

import Post from '../post/post';

import {DEVICE_WIDTH, OUTER_MARGIN} from '../../../utils/sizes';

const data = [
	{
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
	}
];

function PostsCarousel({posts}) {

	const renderItem = ({item}) => {
		return (
			<View style={style.postStyle}>
				<Post {...item} />
			</View>
		)
	}

	return (
		<Carousel
			enableMomentum
			lockScrollWhileSnapping
			// ref={c => this._slider1Ref = c}
			data={posts}
			renderItem={renderItem}
			sliderWidth={DEVICE_WIDTH}
			itemWidth={DEVICE_WIDTH}
			// firstItem={SLIDER_1_FIRST_ITEM}
		/>
	);
}

PostsCarousel.defaultProps = {
	posts: data
} 

const style = StyleSheet.create({
	postStyle: {
		flex: 1,
		padding: OUTER_MARGIN,
		justifyContent: 'center',
		backgroundColor: '#eee'
	}
});

export default PostsCarousel;