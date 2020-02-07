import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {mapping, dark} from '@eva-design/eva';
import 'react-native-gesture-handler';

import AppNavigation from './src/config/app-navigation';
import getColor from './src/commons/utils/colors';

const App = () => (
	<SafeAreaView style={style.wrapper}>
		<ApplicationProvider mapping={mapping} theme={dark}>
			<StatusBar backgroundColor={getColor('darkPrimary')} />
			<IconRegistry icons={EvaIconsPack} />
			<AppNavigation />
		</ApplicationProvider>
	</SafeAreaView>
);

const style = StyleSheet.create({
	wrapper: {
		flex: 1,
		//paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
	},
});

export default App;
