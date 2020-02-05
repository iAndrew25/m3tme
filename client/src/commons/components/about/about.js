import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {Text} from '@ui-kitten/components';

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
			<Text category="p2" style={style.about}>
				{about ? about : 'Add your description'}
			</Text>
		</TouchableOpacity>
	);
}

const style = StyleSheet.create({
	wrapper: {
		flexGrow: 1,
		padding: INNER_MARGIN,
	},
	about: {
		color: getColor('primaryText'),
	},
});

export default About;
