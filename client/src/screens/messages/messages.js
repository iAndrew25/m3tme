import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
	Avatar,
	Text,
	Layout,
	TopNavigation,
	Icon,
	List,
	Card,
} from '@ui-kitten/components';

import patternMock from 'pattern-mock';

const data = patternMock({
	messages: [
		{
			name: 'FULL_NAME',
			message: 'PARAGRAPH',
			picture: 'https://i.picsum.photos/id/534/200/200.jpg',
		},
		[30, 40],
	],
});

const ListItem = ({name, message, picture}) => (
	<TouchableOpacity onPress={() => console.log('click')} activeOpacity={0.6}>
		<View
			style={{
				flexDirection: 'row',
				padding: 16,
				alignItems: 'center',
				borderBottomWidth: 1,
				borderBottomColor: '#eee',
			}}>
			<Avatar shape="round" source={{uri: picture}} />
			<View
				style={{
					flexDirection: 'column',
					flex: 1,
					marginLeft: 16,
					justifyContent: 'center',
				}}>
				<Text category="p1" numberOfLines={1} ellipsizeMode="tail">
					{name}
				</Text>
				<Text
					category="c2"
					numberOfLines={1}
					ellipsizeMode="tail"
					style={{opacity: 0.6, marginTop: 5}}>
					{message}
				</Text>
			</View>
		</View>
	</TouchableOpacity>
);

function Messages() {
	const renderItem = ({item}) => <ListItem {...item} />;

	return (
		<View style={{flex: 1}}>
			<TopNavigation title="Messages" alignment="center" />
			<List data={data.messages} renderItem={renderItem} />
		</View>
	);
}

export default Messages;
