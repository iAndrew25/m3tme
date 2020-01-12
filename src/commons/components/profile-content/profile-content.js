import React from 'react';
import {ScrollView, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import Section from '../section/section';
import Posts from '../posts/posts';

function ProfileContent({about}) {
	return (
		<Layout style={style.wrapper}>
			<Section title="About">
				<TouchableOpacity>
					<Text category="p2" style={style.about}>{about ? about : 'Add your description'}</Text>
				</TouchableOpacity>
			</Section>
			<Section title="Posts">
				<Posts />
			</Section>
		</Layout>
	);
}

const style = StyleSheet.create({
	wrapper: {
		padding: 16
	},
	about: {
		opacity: 0.6,
	}
});

export default ProfileContent;