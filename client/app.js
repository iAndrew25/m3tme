import React from 'react';
import {SafeAreaView, Platform, StatusBar, StyleSheet} from 'react-native';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light, dark} from '@eva-design/eva';

import Dashboard from './src/screens/dashboard/dashboard';

const App = () => (
	<SafeAreaView style={style.wrapper}>
		<ApplicationProvider mapping={mapping} theme={dark}>
			<IconRegistry icons={EvaIconsPack} />
			<Dashboard />
		</ApplicationProvider>
	</SafeAreaView>
);

const style = StyleSheet.create({
	wrapper: {
		flex: 1,
		//paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
	} 
});

export default App;