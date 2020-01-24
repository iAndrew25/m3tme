import React, {Fragment, useState, useRef} from 'react';
import {ScrollView, Image, StyleSheet} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import getColor from '../../utils/colors';

function SafeText({text, numberOfLines}) {
	const [numberOfLinesDisplayed, setNumberOfLinesDisplayed] = useState(numberOfLines);
	const [maxNumberOfLines, setMaxNumberOfLines] = useState();

	const handleOnTextLayout = ({nativeEvent}) => setMaxNumberOfLines(nativeEvent.lines.length);
	const handleLoadMore = () => setNumberOfLinesDisplayed(maxNumberOfLines);

	const renderLoadMore = () => {
		if(maxNumberOfLines > numberOfLinesDisplayed) {
			return (
				<Text category="c2" style={style.loadMore} onPress={handleLoadMore}>Load more</Text>
			);
		} else {
			return null;
		}
	}

	return (
		<Fragment>
			<Text numberOfLines={numberOfLinesDisplayed} category="c2" style={style.text} onTextLayout={handleOnTextLayout}>
				{text}
			</Text>
			{renderLoadMore()}
		</Fragment>
	);
}

const style = StyleSheet.create({
	loadMore: {
		color: getColor('subtitle'),
		textAlign: 'center',
		marginTop: 8		
	},
	text: {
		color: getColor('primary')
	}
});

SafeText.defaultProps = {
	numberOfLines: 5
}

export default SafeText;