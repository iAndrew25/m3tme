import React, {useState} from 'react';
import {ScrollView, Image, View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import FullWidthImage from 'react-native-fullwidth-image'
import SafeText from '../safe-text/safe-text';
import {INNER_MARGIN, OUTER_MARGIN} from '../../utils/sizes';
import PostHeader from './post-header/post-header';
import PostFooter from './post-footer/post-footer';

import getColor from '../../utils/colors';

function Post({type, sourceUri, text}) {
	const getContent = () => {
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
		<View style={style.wrapper}>
			<PostHeader />
			{getContent()}
			<PostFooter />
		</View>
	); 
}

const style = StyleSheet.create({
	wrapper: {
		elevation: 3,
		flexGrow: 1,
		borderRadius: 8,
		backgroundColor: getColor('white'),
		margin: OUTER_MARGIN,
		padding: INNER_MARGIN,
		paddingBottom: 0,
		marginBottom: INNER_MARGIN
	},
	imageStyle: {
		borderRadius: 8
	}
});

export default Post;