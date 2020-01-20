import {ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

export const INNER_MARGIN = 8;
export const OUTER_MARGIN = 16;

export const THREE_COLUMNS_SIZE = (width - (2 * INNER_MARGIN) - (2 * OUTER_MARGIN)) / 3;

export const WIDTH_VIEWPORT = width - (OUTER_MARGIN * 2);
export const HEIGHT_VIEWPORT = height - (OUTER_MARGIN * 2);

export const DEVICE_WIDTH = width;
export const DEVICE_HEIGHT = height;