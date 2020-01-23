import React from 'react';
import {ScrollView, Image, StyleSheet} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import SafeText from '../../safe-text/safe-text';

import {INNER_MARGIN, OUTER_MARGIN} from '../../../utils/sizes';
import PostHeader from './post-header/post-header';

function Post({type, sourceUri, text, onPress, isPreview}) {
	const getChild = () => {
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
				<SafeText text={text} />
			);
		}

		return null;
	}

	return (
		<Layout style={style.wrapper}>
			<PostHeader />
			{getChild()}
		</Layout>
	);
}

const style = StyleSheet.create({
	wrapper: {
		paddingBottom: OUTER_MARGIN,
		flexGrow: 1
	},
	imageStyle: {
		width: '100%',
		height: '100%'
	},
	textStyle: {
		color: 'white'
	}
});


export default Post;