import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBar from '../commons/components/tab-bar/tab-bar';

import Home from '../screens/home/home';
import Messages from '../screens/messages/messages';
import Discover from '../screens/discover/discover';
import UserProfile from '../screens/user-profile/user-profile';
import ProfileSettings from '../screens/profile-settings/profile-settings';

import FullPost from '../screens/full-post/full-post';

const tabs = [{
	iconName: 'home-outline',
	selectedIconName: 'home',
}, {
	iconName: 'message-circle-outline',
	selectedIconName: 'message-circle',
}, {
	iconName: 'globe-2-outline',
	selectedIconName: 'globe-2'
}];

export default createAppContainer(createStackNavigator({
	FullPost,
	MainNavigation: createBottomTabNavigator({
		Home,
		ProfileSettings,
		Discover,
		UserProfile
	}, {
		tabBarComponent: props => <TabBar {...props} tabs={tabs} />
	}),
}, {
	initialRouteName: 'MainNavigation',
	headerMode: 'none'	
}));