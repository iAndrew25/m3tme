import React from 'react';
import {StyleSheet, View, Switch, Text} from 'react-native';

import {INNER_MARGIN, OUTER_MARGIN} from '../../utils/sizes';

function Toggle({text, state, setState}) {

	return (
		<View style={style.wrapper}>
			<Text style={style.text}>{text}</Text>
			<Switch
				value={state}
				onValueChange={setState}
			/>
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		paddingHorizontal: INNER_MARGIN,
		paddingVertical: OUTER_MARGIN,
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: '#ddd'
	},
	text: {
		flexGrow: 1
	}
});

export default Toggle;
