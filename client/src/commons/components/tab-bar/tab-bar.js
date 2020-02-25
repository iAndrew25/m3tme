import React from 'react';
import {View, StyleSheet} from 'react-native';

import Avatar from '../avatar/avatar';
import Button from '../button/button';

import getColor from '../../utils/colors';

function TabBar({state, navigation, tabs}) {
	return (
		<View style={style.wrapper}>
			{state.routes.map((route, index) => {
				const isFocused = state.index === index;
				const {iconName, selectedIconName} = tabs[index] || {};
				const handleOnSelect = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				}

				if(state.routes.length -1 === index) {
					return (
						<Button style={style.tab} onPress={handleOnSelect}>
							<Avatar
								size="S"
								avatarUrl="https://images.wsj.net/im-119693?width=620&size=1.5"
							/>
						</Button>
					);
				} else {
					return (
						<Button
							key={iconName}
							theme="flat"
							style={style.tab}
							onPress={handleOnSelect}
							iconName={isFocused ? selectedIconName : iconName}
							type="icon-only"
						/>
					);
				}
			})}
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
		borderColor: getColor('divider'),
	},
	tab: {
		flex: 1,
	},
});

export default TabBar;
