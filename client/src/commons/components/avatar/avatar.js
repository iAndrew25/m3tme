import React from 'react';
import FastImage from 'react-native-fast-image'

import {AVATAR_SIZES} from '../../utils/sizes';

function Avatar({avatarUrl, size}) {
	const avatarSize = AVATAR_SIZES[size];

	return (
		<FastImage 
			style={[avatarSize, {borderRadius: avatarSize.width / 2}]}
			source={{
				uri: avatarUrl
			}}
		/>
	);
}

Avatar.defaultProps = {
	size: 'M'
}

export default Avatar;
