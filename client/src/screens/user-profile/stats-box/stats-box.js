import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '@ui-kitten/components';

function StatsBox({value, name}) {
	return (
		<View style={style.wraper}>
			<Text style={style.text}>{value}</Text>
			<Text style={style.text}>{name}</Text>
		</View>
	);
}

const style = StyleSheet.create({
	wraper: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
	},
	text: {
		color: 'white',
	},
});

export default StatsBox;
