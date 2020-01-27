import {useEffect} from 'react';
import {Animated} from 'react-native';

const useLoadingEffect = () => {
	const value = new Animated.Value(1);
	const getInterpolatedValue = () =>
		value.interpolate({
			inputRange: [0, 25, 50, 75, 100],
			outputRange: [0.5, 0.65, 0.75, 0.65, 0.5],
		});

	useEffect(() => {
		Animated.loop(
			Animated.timing(value, {
				toValue: 100,
				duration: 1300,
				delay: 300,
			}),
		).start();
	}, [value]);

	return {
		value,
		getInterpolatedValue,
	};
};

const useFadeInEffect = watcher => {
	const value = new Animated.Value(0.01);

	useEffect(() => {
		Animated.timing(value, {
			toValue: 1.0,
			duration: 350,
			delay: 50,
		}).start();
	}, [value]);

	return value;
};

export {useLoadingEffect, useFadeInEffect};
