import React from 'react';
import {ScrollView, Image, View, StyleSheet} from 'react-native';
import {
	Avatar,
	Text,
	Layout,
	Button,
	TopNavigation,
	Icon,
	List,
	Card,
} from '@ui-kitten/components';

import {OUTER_MARGIN, INNER_MARGIN} from '../../utils/sizes';

import getColor from '../../utils/colors';

function Section({title, children}) {
	return (
		<View style={style.wrapper}>
			<Text category="s1" style={style.title}>
				{title}
			</Text>
			{children}
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		paddingBottom: OUTER_MARGIN,
	},
	title: {
		color: getColor('primary'),
		marginBottom: INNER_MARGIN,
	},
});

export default Section;
