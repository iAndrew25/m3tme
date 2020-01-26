import React from 'react';
import {View, StyleSheet} from 'react-native';

import Button from '../button/button';

function TabBar({navigation, tabs}) {
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

export default TabBar;