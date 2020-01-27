import {
	ScrollView,
	Image,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export const INNER_MARGIN = 8;
export const OUTER_MARGIN = 16;

export const BORDER_RADIUS = 8;

export const THREE_COLUMNS_SIZE =
	(width - 2 * INNER_MARGIN - 2 * OUTER_MARGIN) / 3;

export const TWO_COLUMNS_SIZE =
	(width - 2 * OUTER_MARGIN - 2 * OUTER_MARGIN) / 2;

export const WIDTH_VIEWPORT = width - OUTER_MARGIN * 2;
export const HEIGHT_VIEWPORT = height - OUTER_MARGIN * 2;

export const DEVICE_WIDTH = width;
export const DEVICE_HEIGHT = height;

export const AVATAR_SIZES = {
	XS: {
		width: 16,
		height: 16		
	},
	S: {
		width: 20,
		height: 20
	},
	M: {
		width: 32,
		height: 32
	},
	L: {
		width: 40,
		height: 40
	},
	XL: {
		width: 64,
		height: 64
	},
	XXL: {
		width: 128,
		height: 128
	}
};

export const BUTTON_SIZES = {
	S: {
		paddingVertical: 4,
		paddingHorizontal: 4,
	},
	M: {
		paddingVertical: 8,
		paddingHorizontal: 8,
	},
	L: {
		paddingVertical: 16,
		paddingHorizontal: 16,
	}
};