import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, TextInput} from 'react-native';

import Text from '../text/text';

import {INNER_MARGIN} from '../../utils/sizes';
import getColor from '../../utils/colors';

function About({text}) {
	const [about, setAbout] = useState(text);
	const [isTextInputVisible, setIsTextInputVisible] = useState(false);
	const toggleTextInputVisibility = () =>
		setIsTextInputVisible(isVisible => !isVisible);

	return isTextInputVisible ? (
		<TextInput
			autoFocus
			multiline
			value={about}
			style={style.about}
			onChangeText={setAbout}
			onBlur={toggleTextInputVisibility}
		/>
	) : (
		<TouchableOpacity onPress={toggleTextInputVisibility}>
			<Text value={about ? about : 'Add your description'} />				
		</TouchableOpacity>
	);
}

const style = StyleSheet.create({
	wrapper: {
		flexGrow: 1,
		padding: INNER_MARGIN,
	}
});

export default About;
