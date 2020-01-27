import React from 'react';
import {Animated} from 'react-native';
import PropTypes from 'prop-types';

import {useLoadingEffect} from '../skeleton-loader-hooks';

import skeletonLoaderViewStyle from './skeleton-loader-view-style';

function SkeletonLoaderView({style}) {
	const {getInterpolatedValue} = useLoadingEffect();

	return (
		<Animated.View
			testID="SkeletonLoaderView"
			style={[
				style,
				skeletonLoaderViewStyle.loadingView,
				{opacity: getInterpolatedValue()},
			]}
		/>
	);
}

SkeletonLoaderView.defaultProps = {
	style: {},
};

SkeletonLoaderView.propTypes = {
	style: PropTypes.object,
};

export default SkeletonLoaderView;
