import React from 'react';
import {SafeAreaView, Platform, StatusBar} from 'react-native';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light, dark} from '@eva-design/eva';

import Dashboard from './src/screens/dashboard/dashboard';

const App = () => (
	<SafeAreaView style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}}>
		<ApplicationProvider mapping={mapping} theme={dark}>
			<IconRegistry icons={EvaIconsPack} />
			<Dashboard />
		</ApplicationProvider>
	</SafeAreaView>
);

export default App;