import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import {Avatar} from '@ui-kitten/components';

import Button from '../../button/button';

import {OUTER_MARGIN, INNER_MARGIN} from '../../../utils/sizes';

function Reply({avatarUrl}) {
	return (
		<View style={style.wrapper}>
			<Avatar 
				shape='round'
				size='tiny'
				source={{uri: avatarUrl}}
			/>
			<TextInput 
				multiline
				placeholder="Leave a comment..."
				style={style.textinput} />
			<Button
				size="M"
				theme="flat"
				type="icon-only"
				iconName="paper-plane"				
			/>
		</View>
	);
};

const style = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: OUTER_MARGIN
	},
	textinput: {
		height: 40,
		marginLeft: INNER_MARGIN,
		flex: 1
	}
});

Reply.defaultProps = {
	avatarUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthenypost.files.wordpress.com%2F2019%2F06%2Ftrump-asks-supporter-to-help-him-raise-7-million.jpg'
}

export default Reply;