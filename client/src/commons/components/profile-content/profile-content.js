import React, {useState} from 'react';
import {ScrollView, Image, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import Section from '../section/section';
import Feed from '../feed/feed';
import {INNER_MARGIN} from '../../utils/sizes';

function ProfileContent({about, isEditMode}) {
	const [userAbout, setUserAbout] = useState(about);
	const [isTextInputVisible, setIsTextInputVisible] = useState(false);
	const toggleTextInputVisibility = () => setIsTextInputVisible(isVisible => !isVisible);

	function renderAboutSection() {
		if(isEditMode) {
			return (
				<Section title="About">
					{isTextInputVisible ? 
						<TextInput 
							autoFocus
							multiline
							value={userAbout}
							style={style.userAbout}
							onChangeText={setUserAbout}
							onBlur={toggleTextInputVisibility}
						/> :
						<TouchableOpacity onPress={toggleTextInputVisibility}>
							<Text category="p2" style={style.about}>{userAbout ? userAbout : 'Add your description'}</Text>
						</TouchableOpacity>
					}
				</Section>
			);
		} else {
			if(userAbout) {
				return (
					<Section title="About">
						<Text category="p2" style={style.about}>{userAbout}</Text>
					</Section>
				);
			} else {
				return null;
			}
		}
	}

	return (
		<View style={style.wrapper}>
			{renderAboutSection()}
			<Section title="Posts">
				<Feed />
			</Section>
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		flexGrow: 1,
		padding: INNER_MARGIN
	},
	about: {
		opacity: 0.6,
	},
	userAbout: {
		color: 'white'
	}
});

export default ProfileContent;