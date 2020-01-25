import React, {Fragment} from 'react';
import {Animated, View} from 'react-native';
import PropTypes from 'prop-types';

import {useLoadingEffect} from '../skeleton-loader-hooks';

import skeletonLoaderTextStyle from './skeleton-loader-text-style';

const {lastLine, loadingText, lastLineVisible, lastLineInvisible} = skeletonLoaderTextStyle;

function SkeletonLoaderText({style, numberOfLines}) {
	const {getInterpolatedValue} = useLoadingEffect();
	const {fontSize} = style;
	const textStyles = {
		marginVertical: fontSize / 8,
		height: fontSize,
		borderRadius: fontSize / 2
	};

	const renderLines = (item, key) => {
		const isLastLine = key === numberOfLines - 1;

		if (isLastLine && numberOfLines && numberOfLines !== 1) {
			return (
				<Animated.View
					testID={`SkeletonLoaderText_${key}`}
					style={[lastLine, {opacity: getInterpolatedValue()}]}
					key={key}
				>
					<View style={[loadingText, textStyles, lastLineVisible]} />
					<View style={lastLineInvisible} />
				</Animated.View>
			);
		} else {
			return (
				<Animated.View
					testID={`SkeletonLoaderText_${key}`}
					key={key}
					style={[loadingText, textStyles, {opacity: getInterpolatedValue()}]}
				/>
			);
		}
	};

	return <Fragment>{new Array(numberOfLines).fill().map(renderLines)}</Fragment>;
}

SkeletonLoaderText.propTypes = {
	style: PropTypes.object,
	numberOfLines: PropTypes.number
};

SkeletonLoaderText.defaultProps = {
	numberOfLines: 1,
	style: {}
};

export default SkeletonLoaderText;
