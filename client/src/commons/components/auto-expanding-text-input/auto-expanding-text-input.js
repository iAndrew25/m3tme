import React, {useState} from 'react';
import {TextInput} from 'react-native';

function AutoExpandingTextInput({minHeight, maxHeight, style, ...restOfProps}) {
	const [height, setHeight] = useState(minHeight);
	console.log('height', height);

	const getTextInputHeight = (newHeight = minHeight) => {
		const minSize = Math.max(minHeight, newHeight);

		return maxHeight === 0 ? minSize : Math.min(minSize, maxHeight);
	};

	const handleOnContentSizeChange = event => {
		let newHeight = event.nativeEvent.contentSize.height;

		setHeight(getTextInputHeight(newHeight));
	};

	return (
		<TextInput
			{...restOfProps}
			multiline
			onContentSizeChange={handleOnContentSizeChange}
			style={[style, {height: getTextInputHeight(height)}]}
		/>
	);
}

AutoExpandingTextInput.defaultProps = {
	minHeight: 35,
	maxHeight: 0,
};

export default AutoExpandingTextInput;
