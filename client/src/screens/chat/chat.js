import React, {Fragment} from 'react';
import {View, StyleSheet, ScrollView, TextInput} from 'react-native';

import Avatar from '../../commons/components/avatar/avatar';
import HeaderDetails from '../../commons/components/header-details/header-details';

import UserCard from '../../commons/components/user-card/user-card';
import Header, {HeaderButton} from '../../commons/components/headers/header/header';

import getColor from '../../commons/utils/colors';
import {OUTER_MARGIN} from '../../commons/utils/sizes';

import patternMock from 'pattern-mock';

const data = patternMock({
	messages: [
		{
			senderId: 1,
			contentType: 'TEXT',
			content: 'PARAGRAPH',
			timestamp: 'WORD',
		},
		[20, 21],
	],
});

function Chat() {
	return (
		<View style={style.wrapper}>
			<Header
				leftComponent={
					<View style={style.leftComponent}>
						<HeaderButton iconName="arrow-back-outline" />
						<HeaderDetails displayName="Doru Octavian Dumitru Lorem" username="dodLorem" avatarUrl="https://i.ytimg.com/vi/GW_LZGFUUqc/maxresdefault.jpg"/>
					</View>
				}
				rightComponent={
					<View style={style.rightComponent}>
						<HeaderButton iconName="eye" />
						<HeaderButton iconName="more-vertical" />
					</View>
				}
			/>
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
	leftComponent: {
		flexShrink: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	rightComponent: {
		flexGrow: 1,
		justifyContent: 'flex-end',
		flexDirection: 'row',
		alignItems: 'center',		
	}
});

export default Chat;
