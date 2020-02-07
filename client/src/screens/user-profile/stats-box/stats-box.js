import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '@ui-kitten/components';

import getColor from '../../../commons/utils/colors';

function StatsBox({value, name}) {
	return (
		<View style={style.wraper}>
			<Text style={style.number}>{value}</Text>
			<Text style={style.text}>{name}</Text>
		</View>
	);
}

const style = StyleSheet.create({
	wraper: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	number: {
		color: getColor('white'),
		fontSize: 13
	},
	text: {
		color: getColor('secondaryText'),
		fontSize: 10
	}
});

export default StatsBox;
