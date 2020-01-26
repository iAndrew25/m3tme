import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar} from '@ui-kitten/components';

import Button from '../button/button';

function TabBar({navigation, tabs, children}) {
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
			<Button style={style.tab} onPress={() => onSelect(3)}>
				<Avatar 
					shape='round'
					size='tiny'
					source={{uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthenypost.files.wordpress.com%2F2019%2F06%2Ftrump-asks-supporter-to-help-him-raise-7-million.jpg'}}
				/>
			</Button>
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