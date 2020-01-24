import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Layout} from '@ui-kitten/components';

function HeaderNames({fluidText, fixedText, leftText}) {
	return (
		<Layout style={style.wrapper}>
			<Layout style={style.fluidText}>
				<Text category="c1" numberOfLines={1} ellipsizeMode='tail'>{fluidText}</Text>
			</Layout>
			<Layout style={style.fixedText}>
				<Text category="c1" numberOfLines={1}> &#183; @{fixedText}</Text>
				{leftText && <Text category="c1" numberOfLines={1}> &#183; {leftText}</Text>}
			</Layout>
		</Layout>
	);
}

const style = StyleSheet.create({
	wrapper: {
		flexDirection: 'row'
	},
	fluidText: {
		flexShrink: 1
	},
	fixedText: {
		flexDirection: 'row',
		flexGrow: 1
	}
});

export default HeaderNames;