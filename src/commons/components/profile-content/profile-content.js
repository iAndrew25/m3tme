import React, {useState} from 'react';
import {ScrollView, Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import Section from '../section/section';
import Posts from '../posts/posts';

function ProfileContent({about, isEditMode}) {
	const [aboutText, setAboutText] = useState(about);
	const [isTextInputVisible, setIsTextInputVisible] = useState(false);
	const toggleTextInputVisibility = () => setIsTextInputVisible(isVisible => !isVisible);

	function renderAboutSection() {
		if(isEditMode) {
			return isTextInputVisible ? 
				<TextInput 
					autoFocus
					multiline
					value={aboutText}
					style={style.aboutText}
					onChangeText={setAboutText}
					onBlur={toggleTextInputVisibility}
				/> :
				<TouchableOpacity onPress={toggleTextInputVisibility}>
					<Text category="p2" style={style.about}>{aboutText ? aboutText : 'Add your description'}</Text>
				</TouchableOpacity>
		} else {
			return <Text category="p2" style={style.about}>{aboutText}</Text>
		}
	}

	return (
		<Layout style={style.wrapper}>
			<Section title="About">
				{renderAboutSection()}
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
	},
	aboutText: {
		color: 'white'
	}
});

export default ProfileContent;