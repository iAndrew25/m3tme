import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Layout} from '@ui-kitten/components';

import getColor from '../../utils/colors';

function HeaderNames({fluidText, fixedText, leftText}) {
	return (
		<View style={style.wrapper}>
			<View style={style.fluidContainer}>
				<Text category="c1" numberOfLines={1} ellipsizeMode='tail' style={style.text}>{fluidText}</Text>
			</View>
			<View style={style.fixedContainer}>
				<Text category="c1" numberOfLines={1} style={style.text}> &#183; @{fixedText}</Text>
				{leftText && <Text category="c1" numberOfLines={1} style={style.leftText}> &#183; {leftText}</Text>}
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		flexDirection: 'row'
	},
	fluidContainer: {
		flexShrink: 1
	},
	text: {
		color: getColor('primary')
	},
	leftText: {
		color: getColor('subtitle')
	},
	fixedContainer: {
		flexDirection: 'row',
		flexGrow: 1
	}
});

export default HeaderNames;