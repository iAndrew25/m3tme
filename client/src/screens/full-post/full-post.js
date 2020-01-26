import React from 'react';
import {View, Text} from 'react-native';
import { Layout, TopNavigation } from '@ui-kitten/components';

import BackHeader from '../../commons/components/headers/back-header/back-header';
import Post from '../../commons/components/post/post';


function FullPost({navigation}) {
	return (
		<View>
			<BackHeader onPress={navigation.goBack} />
		</View>
	);
};

export default FullPost;