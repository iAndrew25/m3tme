import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Avatar, Text, Layout, TopNavigation, Icon, List } from '@ui-kitten/components';

import patternMock from 'pattern-mock';

const data = patternMock({
	messages: [{
	  name: 'FULL_NAME',
	  message: 'PARAGRAPH',
	  picture: 'https://i.picsum.photos/id/534/200/200.jpg'
	}, [30, 40]]
});

const ListItem = ({name, message, picture}) => (
	<TouchableOpacity onPress={() => console.log('click')} activeOpacity={0.6}>
		<Layout style={{flexDirection: 'row', padding: 8, alignItems: 'center'}}>
				<Avatar shape='round' source={{uri: picture}} />
				<Layout style={{flexDirection: 'column', flex: 1, marginLeft: 8, justifyContent: 'center'}}>
					<Text category="p1" numberOfLines={1} ellipsizeMode="tail">{name}</Text>
					<Text category="c2" numberOfLines={1} ellipsizeMode="tail" style={{opacity: 0.6}}>{message}</Text>			
				</Layout>
		</Layout>
	</TouchableOpacity>
)

function Messages() {
  const renderItem = ({item}) => <ListItem {...item} />;

	return (
		<Layout>
			<TopNavigation
				title='Messages'
				alignment='center'
			/>
			<List
				data={data.messages}
				renderItem={renderItem}
			/>
		</Layout>
	);
};

export default Messages;