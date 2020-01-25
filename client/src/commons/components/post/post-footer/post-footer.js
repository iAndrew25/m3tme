import React from 'react';
import {ScrollView, View, Image, StyleSheet} from 'react-native';
import {Avatar, Text, Layout, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import {INNER_MARGIN, OUTER_MARGIN} from '../../../utils/sizes';

import getColor from '../../../utils/colors';

import Button from '../../button/button';

function PostFooter({pictureUrl, name, username, timestamp}) {
	return (
		<View style={style.wrapper}>
			<Button textStyle={style.text} size="M" iconSize={14} theme="light" iconName="heart" type="icon-right" text="2" />
			<Button textStyle={style.text} size="M" iconSize={14} theme="light" iconName="message-square" type="icon-right" text="6" />
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		marginTop: 2,
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},
	text: {
		fontWeight: 'normal',
		fontSize: 11,
		marginRight: -4
	}
});

PostFooter.defaultProps = {

}

export default PostFooter;