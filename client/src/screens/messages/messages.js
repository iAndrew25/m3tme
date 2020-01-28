import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {Text} from '@ui-kitten/components';

import patternMock from 'pattern-mock';

import Button from '../../commons/components/button/button';
import Header from '../../commons/components/headers/header/header';

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
			<Header
				leftComponent={<Text style={style.title}>Messages</Text>}
				rightComponent={
					<Button
						style={style.more}
						theme="dark"
						iconName="more-vertical-outline"
						type="icon-only"
					/>
				}
			/>

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
	},
	more: {
		width: 50,
		height: 50,
		flexGrow: 0,
		flexShrink: 1,
	},
	title: {
		flex: 1,
		paddingLeft: OUTER_MARGIN,
		color: getColor('white'),
	},
	headerComponent: {
		marginTop: INNER_MARGIN,
	},
});

export default Messages;
