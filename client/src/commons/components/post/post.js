import React from 'react';
import {View, StyleSheet} from 'react-native';

import SafeText from '../safe-text/safe-text';
import PostHeader from './post-header/post-header';
import PostFooter from './post-footer/post-footer';
import Comment from './comment/comment';
import ZoomableImage from '../zoomable-image/zoomable-image';

import {INNER_MARGIN, OUTER_MARGIN} from '../../utils/sizes';
import getColor from '../../utils/colors';

function Post({
	id,
	time,
	heartsCount,
	commentsCount,
	contentType,
	content,
	author,
	comments,
	handleOnCommentPress,
}) {
	const getContent = () => {
		if (contentType === 'IMAGE') {
			return <ZoomableImage style={style.imageStyle} content={content} />;
		}

		if (contentType === 'TEXT') {
			return <SafeText text={content} />;
		}

		return null;
	};

	const handleOnHeartPress = () => {
		console.log('loved it');
	};

	const renderComments = () => {
		if (comments.length) {
			return (
				<View style={style.comments}>
					{comments.map(comment => (
						<Comment key={comment.id} {...comment} />
					))}
				</View>
			);
		} else {
			return null;
		}
	};

	return (
		<View style={style.wrapper}>
			<PostHeader author={author} time={time} />
			{getContent()}
			<PostFooter
				heartsCount={heartsCount}
				commentsCount={commentsCount}
				onHeartPress={handleOnHeartPress}
				onCommentPress={handleOnCommentPress}
			/>
			{renderComments()}
		</View>
	);
}

Post.defaultProps = {
	comments: [],
};

const style = StyleSheet.create({
	wrapper: {
		flexGrow: 1,
		elevation: 1,
		backgroundColor: getColor('white'),
		padding: OUTER_MARGIN,
		paddingBottom: 0,
		marginBottom: INNER_MARGIN,
	},
	imageStyle: {
		borderRadius: 8,
	},
	comments: {
		paddingLeft: INNER_MARGIN,
	},
});

export default Post;
