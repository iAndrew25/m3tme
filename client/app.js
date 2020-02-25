import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {mapping, dark} from '@eva-design/eva';
import 'react-native-gesture-handler';

// import AppNavigation from './src/config/app-navigation';
import getColor from './src/commons/utils/colors';

import TabBar from './src/commons/components/tab-bar/tab-bar';

import FullPost from './src/screens/full-post/full-post';
import Settings from './src/screens/settings/settings';
import EditUserProfile from './src/screens/edit-user-profile/edit-user-profile';

import Home from './src/screens/home/home';
import Messages from './src/screens/messages/messages';
import Discover from './src/screens/discover/discover'
import MyProfile from './src/screens/my-profile/my-profile';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();


const tabs = [
	{
		iconName: 'home-outline',
		selectedIconName: 'home',
	},
	{
		iconName: 'message-circle-outline',
		selectedIconName: 'message-circle',
	},
	{
		iconName: 'globe-2-outline',
		selectedIconName: 'globe-2',
	}
];


const MainNavigation = () => (
	<BottomTab.Navigator initialRouteName="Home" headerMode="none" tabBar={props => <TabBar {...props} tabs={tabs} />}>
		<BottomTab.Screen name="Home" component={Home} />
		<BottomTab.Screen name="Messages" component={Messages} />
		<BottomTab.Screen name="Discover" component={Discover} />
		<BottomTab.Screen name="MyProfile" component={MyProfile} />
	</BottomTab.Navigator>
);

const App = () => (
	<SafeAreaView style={style.wrapper}>
		<ApplicationProvider mapping={mapping} theme={dark}>
			<StatusBar backgroundColor={getColor('darkPrimary')} />
			<IconRegistry icons={EvaIconsPack} />
			<NavigationContainer>
				<Stack.Navigator initialRouteName="MainNavigation" headerMode="none">
					<Stack.Screen name="MainNavigation" component={MainNavigation} />
					<Stack.Screen name="FullPost" component={FullPost} />
					<Stack.Screen name="Settings" component={Settings} />
					<Stack.Screen name="EditUserProfile" component={EditUserProfile} />
				</Stack.Navigator>
			</NavigationContainer>
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
