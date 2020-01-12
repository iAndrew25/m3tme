import React from 'react';
import {ScrollView, Image, StyleSheet} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

function Post({type, imageUri, videoUri, text, onPress}) {

	if(type === 'IMAGE') {
		return (
			<Image 
				style={{width: '100%', height: '100%'}}
				source={{uri: imageUri}}
			/>
		);
	}

	if(type === 'VIDEO') {
		return (
			<Text>video</Text>
		);
	}
	
	if(type === 'TEXT') {
		return (
			<Text category="p2" style={{padding: 8}} numberOfLines={5} ellipsizeMode="tail">{text}</Text>
		);
	}

	return null;
}

export default Post;