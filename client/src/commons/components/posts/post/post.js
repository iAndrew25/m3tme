import React from 'react';
import {ScrollView, Image, StyleSheet} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';
import FullWidthImage from 'react-native-fullwidth-image'
import SafeText from '../../safe-text/safe-text';

import {INNER_MARGIN, OUTER_MARGIN} from '../../../utils/sizes';
import PostHeader from './post-header/post-header';

function Post({type, sourceUri, text, onPress, isPreview}) {
	const getChild = () => {
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
			<PostHeader />
				{getChild()}
		</Layout>
	);
}

const style = StyleSheet.create({
	wrapper: {
		flexGrow: 1,
		paddingBottom: OUTER_MARGIN
	},
	imageStyle: {
		borderRadius: 8
	},
	textStyle: {
		color: 'white'
	}
});


export default Post;