import React from 'react';
import {TouchableOpacity, View, FlatList, StyleSheet} from 'react-native';
import {
	Text,
	Layout,
	TopNavigation,
	Icon,
	List,
	Card,
} from '@ui-kitten/components';

import patternMock from 'pattern-mock';

import Button from '../../commons/components/button/button';
import Header from '../../commons/components/headers/header/header';

import MessageCard from '../../commons/components/message-card/message-card';

import getColor from '../../commons/utils/colors';
import {OUTER_MARGIN} from '../../commons/utils/sizes';

import Avatar from '../../commons/components/avatar/avatar';

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
			}
		},
		[30, 40],
	]
});

//<Avatar avatarUrl="https://i.picsum.photos/id/534/200/200.jpg" size="S" />
//<Avatar avatarUrl="https://i.picsum.photos/id/534/200/200.jpg" size="M" />
//<Avatar avatarUrl="https://i.picsum.photos/id/534/200/200.jpg" size="L" />
//<Avatar avatarUrl="https://i.picsum.photos/id/534/200/200.jpg" size="XL" />

function Messages() {
	return (
		<View style={{flex: 1}}>
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
				renderItem={({item}) => (
					<MessageCard {...item} />
				)}
				keyExtractor={item => item.person.id.toString()}
				//ListFooterComponent={<View style={style.footerComponent} />}
			/>			
		</View>
	);
}

const style = StyleSheet.create({
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
});

export default Messages;
