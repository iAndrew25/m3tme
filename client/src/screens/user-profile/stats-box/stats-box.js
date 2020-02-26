import React from 'react';
import {StyleSheet, View} from 'react-native';

import Text from '../../../commons/components/text/text';

function StatsBox({value, name}) {
	return (
		<View style={style.wraper}>
			<Text theme="light" value={value} />
			<Text type="subtitle" value={name} />
		</View>
	);
}

const style = StyleSheet.create({
	wraper: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default StatsBox;
