import React, {Fragment, useState, useRef} from 'react';
import {ScrollView, Image, StyleSheet} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

function SafeText({text, maxNoOfLines}) {
	const [numberOfLinesDisplayed, setNumberOfLinesDisplayed] = useState(maxNoOfLines);
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
			<Text numberOfLines={numberOfLinesDisplayed} category="p2" onTextLayout={handleOnTextLayout}>
				{text}
			</Text>
			{renderLoadMore()}
		</Fragment>
	);
}

const style = StyleSheet.create({
	loadMore: {
		textAlign: 'center',
		marginTop: 8		
	}
});

SafeText.defaultProps = {
	maxNoOfLines: 5
}

export default SafeText;