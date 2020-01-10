import React from 'react';
import {StatusBar, Platform} from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { TabBar, Tab, Layout, Text, Icon } from '@ui-kitten/components';

import Messages from '../messages/messages';
import People from '../people/people';
import UserProfile from '../user-profile/user-profile';

function TabBarComponent({navigation}) {
	const onSelect = index => {
		const selectedTabRoute = navigation.state.routes[index];
		navigation.navigate(selectedTabRoute.routeName);
	};

	return (
		<SafeAreaView>
			<TabBar selectedIndex={navigation.state.index} onSelect={onSelect}>
				<Tab icon={(style) => <Icon {...style} name='message-circle-outline'/>} />
				<Tab icon={(style) => <Icon {...style} name='people-outline'/>} />
				<Tab icon={(style) => <Icon {...style} name='settings-outline'/>} />
			</TabBar>
		</SafeAreaView>
	);
};

export default createAppContainer(createBottomTabNavigator({
	Messages,
	People,
	UserProfile
}, {
	tabBarComponent: TabBarComponent,
}));