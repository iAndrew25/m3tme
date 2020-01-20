import React from 'react';
import {ScrollView, Image, StyleSheet} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

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
		paddingBottom: 16
	},
	title: {
		marginBottom: 8
	}
});

export default Section;