import React from 'react';
import {StyleSheet, View} from 'react-native';

import Text from '../text/text';

function HeaderNames({fluidText, fixedText, leftText}) {
	return (
		<View style={style.wrapper}>
			<View style={style.fluidContainer}>
				<Text
					type="title"
					numberOfLines={1}
					ellipsizeMode="tail"
					value={fluidText}
					style={style.text}
				/>
			</View>
			<View style={style.fixedContainer}>
				<Text
					type="title"
					numberOfLines={1}
					style={style.fixedText}
					value={` · @${fixedText}`}
				/>
				{leftText && (
					<Text
						type="subtitle"
						numberOfLines={1}
						value={` · ${leftText}`}
					/>
				)}
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
	},
	fluidContainer: {
		flexShrink: 1,
	},
	text: {
		fontWeight: 'bold',
	},
	fixedText: {
		fontStyle: 'italic',
	},
	fixedContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		flexGrow: 1,
	},
});

export default HeaderNames;
