import React from 'react';
import {ScrollView, Image, StyleSheet} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import {INNER_MARGIN} from '../../../utils/sizes';

function Post({type, sourceUri, text, onPress, isPreview}) {
	if(type === 'IMAGE') {
		return (
			<Image 
				style={style.imageStyle}
				source={{uri: sourceUri}}
			/>
		);
	}

	if(type === 'TEXT') {
		return (
			<Text category="p2" style={style.textStyle} numberOfLines={5} ellipsizeMode="tail">{text}</Text>
		);
	}

	return null;
}

const style = StyleSheet.create({
	imageStyle: {
		width: '100%',
		height: '100%'
	},
	previewTextStyle: {
		padding: INNER_MARGIN
	},
	textStyle: {
		color: 'black',
		textAlign: 'center'
	}
});


export default Post;