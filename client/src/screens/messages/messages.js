import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import patternMock from 'pattern-mock';

import Button from '../../commons/components/button/button';
import MenuHeader from '../../commons/components/headers/menu-header/menu-header';
import MessageCard from '../../commons/components/message-card/message-card';

import getColor from '../../commons/utils/colors';
import {OUTER_MARGIN, INNER_MARGIN} from '../../commons/utils/sizes';

const data = patternMock({
	messages: [
		{
			time: 'WORD',
			lastMessage: 'PARAGRAPH',
			person: {
				id: 'COUNTER',
				avatarUrl: 'https://i.picsum.photos/id/534/200/200.jpg',
				fullName: 'FULL_NAME',
				username: 'WORD',
			},
		},
		[30, 40],
	],
});

function Messages() {
	return (
		<View style={style.wrapper}>
			<MenuHeader title="Messages" onPress={() => {}} iconName="more-vertical-outline" />

			<FlatList
				data={data.messages}
				renderItem={({item}) => <MessageCard {...item} />}
				keyExtractor={item => item.person.id.toString()}
				ListHeaderComponent={<View style={style.headerComponent} />}
			/>
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: getColor('background'),
	},
	headerComponent: {
		marginTop: INNER_MARGIN,
	},
});

export default Messages;
