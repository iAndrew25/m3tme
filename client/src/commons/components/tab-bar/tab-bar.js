import React from 'react';
import {View, StyleSheet} from 'react-native';

import Avatar from '../avatar/avatar';
import Button from '../button/button';

import getColor from '../../utils/colors';

function TabBar({navigation, tabs, children}) {
	const onSelect = index => {
		const selectedTabRoute = navigation.state.routes[index];
		navigation.navigate(selectedTabRoute.routeName);
	};

	return (
		<View style={style.wrapper}>
			{tabs.map(({iconName, selectedIconName}, index) => (
				<Button
					key={iconName}
					theme="flat"
					style={style.tab}
					onPress={() => onSelect(index)}
					iconName={
						navigation.state.index === index
							? selectedIconName
							: iconName
					}
					type="icon-only"
				/>
			))}
			<Button style={style.tab} onPress={() => onSelect(3)}>
				<Avatar
					size="S"
					avatarUrl="https://images.wsj.net/im-119693?width=620&size=1.5"
				/>
			</Button>
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		height: 40,
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: getColor('background'),
		borderTopWidth: 1,
		borderColor: getColor('divider')
	},
	tab: {
		flex: 1,
	},
});

export default TabBar;
