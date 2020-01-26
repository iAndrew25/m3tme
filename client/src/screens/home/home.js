import patternMock from 'pattern-mock';
import React, {Fragment} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {Avatar, Layout, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import Button from '../../commons/components/button/button';

import Header from '../../commons/components/headers/header/header';

import getColor from '../../commons/utils/colors';

import Post from '../../commons/components/post/post';

const posts = patternMock({
	data: [{
		id: 'COUNTER',
		time: 'WORD',
		heartsCount: 'CUSTOM_NUMBER_23-167',
		commentsCount: 'CUSTOM_NUMBER_23-167',
		contentType: 'TEXT',
		content: 'PARAGRAPH',
		author: {
			id: 'COUNTER',
			avatarUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.takeflyte.com%2Fwp-content%2Fuploads%2F2010%2F10%2Fapple.png',
			fullName: 'FULL_NAME',
			username: 'WORD'
		}		
	}]
});

function Home({avatarUrl, navigation}) {
	console.log('!home');
	return (
		<Fragment>
			<Header 
				leftComponent={
					<Button style={style.avatar} onPress={() => {
						navigation.navigate('FullPost')
					}}>
						<Avatar 
							shape='round'
							size='small'
							source={{uri: avatarUrl}}
						/>
					</Button>
				}
				centerComponent={
					<Text style={style.homeText}>Home</Text>
				}
				rightComponent={
					<Button style={style.messageIcon} theme="dark" iconName="more-vertical-outline" type="icon-only" />
				}
			/>
			<FlatList
				data={posts.data}
				contentStyle={{padding: 16}}
				renderItem={({ item }) => (
					<Post {...item} />
				)}
				keyExtractor={item => item.id.toString()}
			/>
		</Fragment>
	);
};

Home.defaultProps = {
	avatarUrl: 'https://images.wsj.net/im-119693?width=620&size=1.5'
}

const style = StyleSheet.create({
	messageIcon: {
		width: 50,
		height: 50,
		flexGrow: 0,
		flexShrink: 1
	},
	homeText: {
		flex: 1,
		color: getColor('white')
	},
	avatar: {
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default Home;