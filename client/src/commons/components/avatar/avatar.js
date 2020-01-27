import React from 'react';
import FastImage from 'react-native-fast-image'

import {AVATAR_SIZES} from '../../utils/sizes';

function Avatar({avatarUrl, size, style}) {
	const avatarSize = AVATAR_SIZES[size];

	return (
		<FastImage 
			style={[avatarSize, {borderRadius: avatarSize.width / 2}, style]}
			source={{
				uri: avatarUrl
			}}
		/>
	);
}

Avatar.defaultProps = {
	size: 'M',
	style: {}
};

export default Avatar;
