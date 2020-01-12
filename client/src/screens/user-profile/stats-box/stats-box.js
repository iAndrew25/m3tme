import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Layout} from '@ui-kitten/components';

function StatsBox({value, name}) {
	return (
		<Layout style={style.wraper}>
			<Text style={style.text}>{value}</Text>
			<Text style={style.text}>{name}</Text>
		</Layout>	
	);
};

const style = StyleSheet.create({
	wraper: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent'
	},
	text: {
		color: 'white'
	}
});

export default StatsBox;