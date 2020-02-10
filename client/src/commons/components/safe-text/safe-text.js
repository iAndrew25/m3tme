import React, {Fragment, useState} from 'react';
import {StyleSheet} from 'react-native';

import Text from '../text/text';
import getColor from '../../utils/colors';

function SafeText({text, numberOfLines, style: componentStyle}) {
	const [numberOfLinesDisplayed, setNumberOfLinesDisplayed] = useState(
		numberOfLines,
	);
	const [maxNumberOfLines, setMaxNumberOfLines] = useState();

	const handleOnTextLayout = ({nativeEvent}) =>
		setMaxNumberOfLines(nativeEvent.lines.length);
	const handleLoadMore = () => setNumberOfLinesDisplayed(maxNumberOfLines);

	const renderLoadMore = () => {
		if (maxNumberOfLines > numberOfLinesDisplayed) {
			return (
				<Text
					value="Load more"
					type="subtitle"
					style={style.loadMore}
					onPress={handleLoadMore} />
			);
		} else {
			return null;
		}
	};

	return (
		<Fragment>
			<Text
				type="paragraph"
				numberOfLines={numberOfLinesDisplayed}
				style={componentStyle}
				onTextLayout={handleOnTextLayout}
				value={text} />
			{renderLoadMore()}
		</Fragment>
	);
}

const style = StyleSheet.create({
	loadMore: {
		fontSize: 11,
		marginVertical: 8,
		textAlign: 'center'
	}
});

SafeText.defaultProps = {
	numberOfLines: 5,
	style: {},
};

export default SafeText;
