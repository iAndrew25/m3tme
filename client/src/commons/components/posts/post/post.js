import React, {useState} from 'react';
import {ScrollView, Image, View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import FullWidthImage from 'react-native-fullwidth-image'
import SafeText from '../safe-text/safe-text';
import {INNER_MARGIN, OUTER_MARGIN} from '../../../utils/sizes';
import PostHeader from './post-header/post-header';
import PostFooter from './post-footer/post-footer';

import getColor from '../../../utils/colors';

function Post({post}) {
	const getContent = ({type, sourceUri, text}) => {
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
		<View style={style.postWrapper}>
			<PostHeader />
			{getContent(post)}
			<PostFooter />
		</View>
	); 
}

const style = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
	postWrapper: {
		elevation: 3,
		flexGrow: 1,
		borderRadius: 8,
		backgroundColor: getColor('white'),
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

export default Posts;