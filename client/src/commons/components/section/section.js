import React from 'react';
import {View, StyleSheet} from 'react-native';

import Text from '../text/text';
import {OUTER_MARGIN, INNER_MARGIN} from '../../utils/sizes';

function Section({title, children}) {
	if (!children) {
		return null;
	}

	return (
		<View style={style.wrapper}>
			<Text type="h4" style={style.title} value={title} />
			{children}
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		paddingBottom: OUTER_MARGIN,
	},
	title: {
		marginBottom: INNER_MARGIN,
	},
});

export default Section;
