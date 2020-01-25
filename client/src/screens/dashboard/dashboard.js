import React, {useState} from 'react';
import {StatusBar, View, Platform, StyleSheet} from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { TabBar, Tab, Layout, Text, Icon } from '@ui-kitten/components';

import Button from '../../commons/components/button/button';
import Home from '../home/home';
import Messages from '../messages/messages';
import People from '../people/people';
import UserProfile from '../user-profile/user-profile';
import ProfileSettings from '../profile-settings/profile-settings';

import getColor from '../../commons/utils/colors';

const tabs = [{
	iconName: 'home-outline',
	selectedIconName: 'home',
}, {
	iconName: 'message-circle-outline',
	selectedIconName: 'message-circle',
}, {
	iconName: 'globe-2-outline',
	selectedIconName: 'globe-2'
}, {
	iconName: 'settings-outline',
	selectedIconName: 'settings',
}];

function TabBarComponent({navigation}) {
	const onSelect = index => {
		const selectedTabRoute = navigation.state.routes[index];
		navigation.navigate(selectedTabRoute.routeName);
	};

	return (
		<View style={style.wrapper}>
			{tabs.map(({iconName, selectedIconName}, index) => <Button 
				key={iconName}
				theme="flat"
				style={style.tab}
				onPress={() => onSelect(index)} 
				iconName={navigation.state.index === index ? selectedIconName : iconName} 
				type="icon-only" />
			)}
		</View>
	);
};

const style = StyleSheet.create({
	wrapper: {
		elevation: 6,
		height: 40,
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	tab: {
		flex: 1
	}
});

export default createAppContainer(createBottomTabNavigator({
	Home,
	// ProfileSettings,
	UserProfile,
	Messages,
	People,
}, {
	tabBarComponent: TabBarComponent
}));