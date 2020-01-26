import {StyleSheet} from 'react-native';
import {getColor} from '@colors';

export default StyleSheet.create({
	loadingText: {
		backgroundColor: getColor('silver-gray')
	},
	lastLine: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	lastLineVisible: {
		flexGrow: 3
	},
	lastLineInvisible: {
		flexGrow: 1
	}
});
