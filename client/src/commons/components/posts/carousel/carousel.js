import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions } from 'react-native'

import Carousel, { Pagination } from 'react-native-snap-carousel';

import Post from '../post/post';

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

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class SwiperComponent extends Component {

	_renderItemWithParallax = (data, even) => {
		return (
			<View style={{flex: 1, padding: 20, justifyContent: 'center'}}>
				<Post {...data.item} />
			</View>
		)
	}

	render() {
		return (
				<Carousel
				  enableMomentum
				  lockScrollWhileSnapping
				  ref={c => this._slider1Ref = c}
				  data={data}
				  renderItem={this._renderItemWithParallax}
				  sliderWidth={viewportWidth}
				  itemWidth={viewportWidth}
				  // hasParallaxImages={true}
				  // firstItem={SLIDER_1_FIRST_ITEM}
				  // inactiveSlideScale={0.94}
				  // inactiveSlideOpacity={0.7}
				  // inactiveSlideShift={20}
				  // containerCustomStyle={styles.slider}
				  // contentContainerCustomStyle={styles.sliderContentContainer}
				  // loop={true}
				  // loopClonesPerSide={2}
				  // autoplay={true}
				  // autoplayDelay={500}
				  // autoplayInterval={3000}
				//  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
				/>
		)
	}
}