import React from 'react';
import {Animated, View, Text} from 'react-native';
import PropTypes from 'prop-types';

import SkeletonLoaderText from './skeleton-loader-text/skeleton-loader-text';
import SkeletonLoaderView from './skeleton-loader-view/skeleton-loader-view';
import {useFadeInEffect} from './skeleton-loader-hooks';

function SkeletonLoader({isLoading, style, children}) {
	const opacityValue = useFadeInEffect([isLoading]);

	if (isLoading) {
		return (
			<View style={style}>
				{React.Children.map(children, child => {
					const {style: childStyle, numberOfLines} = child.props;

					switch (child.type) {
						case View:
							return <SkeletonLoader.View style={childStyle} />;
						case Text:
							return (
								<SkeletonLoader.Text
									style={childStyle}
									numberOfLines={numberOfLines}
								/>
							);
						default:
							return child;
					}
				})}
			</View>
		);
	} else {
		return (
			<Animated.View style={[style, {opacity: opacityValue}]}>
				{children}
			</Animated.View>
		);
	}
}

SkeletonLoader.Text = SkeletonLoaderText;
SkeletonLoader.View = SkeletonLoaderView;

SkeletonLoader.defaultProps = {
	isLoading: true,
	style: {},
};

SkeletonLoader.propTypes = {
	style: PropTypes.object,
	isLoading: PropTypes.bool,
	children: PropTypes.array,
};

export default SkeletonLoader;
