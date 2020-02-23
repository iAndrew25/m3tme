import React from 'react';
import {View, StyleSheet, ScrollView, TextInput} from 'react-native';

import {Icon} from '@ui-kitten/components';

import UserCard from '../../commons/components/user-card/user-card';
import Header from '../../commons/components/headers/header/header';

import getColor from '../../commons/utils/colors';
import {OUTER_MARGIN} from '../../commons/utils/sizes';

import patternMock from 'pattern-mock';

const data = patternMock({
	messages: [
		{
			senderId: 1,
			contentType: 'TEXT',
			content: 'PARAGRAPH',
			timestamp: 'WORD'
		},
		[20, 21],
	],
});

function Chat() {
	return (
		<View style={style.wrapper}>
			<Header
				leftComponent={
					<View style={style.searchIcon}>
						<Icon
							name="search"
							width={20}
							height={20}
							fill={getColor('iconPrimary')}
						/>
					</View>
				}
				rightComponent={
					<TextInput
						placeholder="Search..."
						placeholderTextColor={getColor('lightPrimary')}
						style={style.textinput}
					/>
				}
			/>
			<ScrollView contentContainerStyle={style.scrollViewWrapper}>
				{data.users.map(user => (
					<UserCard {...user} />
				))}
			</ScrollView>
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: getColor('background'),
	},
	scrollViewWrapper: {
		flexGrow: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		padding: 16,
	},
	searchIcon: {
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textinput: {
		color: getColor('white'),
		height: '100%',
		flex: 1,
		paddingRight: OUTER_MARGIN,
	},
});

export default Chat;
