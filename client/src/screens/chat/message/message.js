import React from 'react';
import {View, StyleSheet} from 'react-native';

import Text from '../../../commons/components/text/text';

import getColor from '../../../commons/utils/colors';
import {INNER_MARGIN} from '../../../commons/utils/sizes';

function Message({timestamp, content, direction}) {
	return (
		<View style={[style.wrapper, style[`${direction}Wrapper`]]}>
			<View style={[style.preWrapper, style[`${direction}PreWrapper`]]}>
				<Text value={content} type="paragraph" style={[style.message, style[`${direction}Message`]]} />
				<Text value={timestamp} type="subtitle" style={style.timestamp} />
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		transform: [{ scaleY: -1 }],
		flexDirection: 'column',
		padding: INNER_MARGIN
	},
	leftWrapper: {
		alignItems: 'flex-start'
	},
	preWrapper: {
		width: '90%'
	},
	leftPreWrapper: {
		alignItems: 'flex-start'
	},
	message: {
		padding: INNER_MARGIN,
		borderRadius: 5
	},
	leftMessage: {
		backgroundColor: getColor('defaultPrimary'),
		color: getColor('white')
	},
	rightWrapper: {
		alignItems: 'flex-end'
	},
	rightPreWrapper: {
		alignItems: 'flex-end'
	},
	rightMessage: {
		backgroundColor: getColor('white'),
		color: getColor('defaultText')
	},
	timestamp: {
		paddingHorizontal: INNER_MARGIN
	}
});

export default Message;
