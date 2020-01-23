import React from 'react';
import {ScrollView, Image, StyleSheet} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import {OUTER_MARGIN, INNER_MARGIN} from '../../utils/sizes';

function Section({title, children}) {
	return (
		<Layout style={style.wrapper}>
			<Text category="s1" style={style.title}>{title}</Text>
			{children}
		</Layout>
	);
}

const style = StyleSheet.create({
	wrapper: {
		paddingBottom: OUTER_MARGIN
	},
	title: {
		marginBottom: INNER_MARGIN
	}
});

export default Section;