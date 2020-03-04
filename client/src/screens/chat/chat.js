import React, {Fragment} from 'react';
import {View, StyleSheet, ScrollView, TextInput, FlatList} from 'react-native';

import Avatar from '../../commons/components/avatar/avatar';
import HeaderDetails from '../../commons/components/header-details/header-details';

import Message from './message/message';
import Text from '../../commons/components/text/text';
import UserCard from '../../commons/components/user-card/user-card';
import Header, {HeaderButton} from '../../commons/components/headers/header/header';

import getColor from '../../commons/utils/colors';
import {OUTER_MARGIN, INNER_MARGIN} from '../../commons/utils/sizes';

import patternMock from 'pattern-mock';

const data = patternMock({
	messages: [
		{
			senderId: 1,
			contentType: 'TEXT',
			content: 'SENTENCE',
			timestamp: 'WORD',
		},
		[20, 21],
	],
});

function Chat() {
	const messages = data.messages.reverse();

	const _keyExtractor = (item, index) => index;

	const _renderItem = ({index, item}) => {
		const direction = index % 2 === 0 ? 'left' : 'right';

		return (
			<Message {...item} direction={direction} />
		);
	}

	return (
		<View style={style.wrapper}>
			<Header
				leftComponent={
					<View style={style.leftComponent}>
						<HeaderButton iconName="arrow-back-outline" />
						<HeaderDetails displayName="Doru Octavian Dumitru Lorem" username="dod Lorem" avatarUrl="https://i.ytimg.com/vi/GW_LZGFUUqc/maxresdefault.jpg"/>
					</View>
				}
				rightComponent={
					<View style={style.rightComponent}>
						<HeaderButton iconName="eye" />
						<HeaderButton iconName="more-vertical" />
					</View>
				}
			/>
			<FlatList
				renderItem={_renderItem}
				data={ messages }
				keyExtractor={_keyExtractor}
				style={{  transform: [{ scaleY: -1 }] }}
			/>
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: getColor('FAFAFA'),
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
