import React, {useState} from 'react';
import {View, Text} from 'react-native';

import SkeletonLoader from './skeleton-loader';

function SkeletonLoaderDemo() {
	const [isLoading, setIsLoaded] = useState(true);

	setTimeout(() => {
		setIsLoaded(false);
	}, 2000);

	return (
		<SkeletonLoader
			style={{flexDirection: 'row', justifyContent: 'space-between'}}
			isLoading={isLoading}>
			<View
				style={{
					height: 80,
					width: 80,
					margin: 10,
					backgroundColor: 'pink',
					borderRadius: 40,
				}}
			/>
			<SkeletonLoader
				style={{flex: 1, marginTop: 10}}
				isLoading={isLoading}>
				<Text style={{fontSize: 28}}>Very such big title, wow</Text>
				<Text style={{fontSize: 13}} numberOfLines={3}>
					And such a small description lorem Lorem ipsum dolor sit
					amet, consectetur adipisicing elit. Similique cum magni est
					ratione nemo sed voluptatem, incidunt, quisquam repellat
					quas magnam aliquid animi facere cupiditate, molestiae!
					Facilis quasi alias eos.
				</Text>
			</SkeletonLoader>
		</SkeletonLoader>
	);
}

export default SkeletonLoaderDemo;
