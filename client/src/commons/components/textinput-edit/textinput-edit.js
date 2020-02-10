import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

import Text from '../text/text';

import {INNER_MARGIN} from '../../utils/sizes';
import getColor from '../../utils/colors';

function TextInputEdit({label, state, setState, ...rest}) {
	return (
		<View style={style.wrapper}>
			<Text value={label} />
			<TextInput
				value={state}
				style={style.textinput}
				{...rest}
				onChangeText={setState}
			/>
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		flexGrow: 1,
		padding: INNER_MARGIN,
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: getColor('divider'),
	},
	textinput: {
		flexShrink: 1,
		flexGrow: 1,
		padding: 0,
		textAlign: 'right',
		marginLeft: 16,
	},
});

export default TextInputEdit;
