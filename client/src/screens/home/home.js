import React, {Fragment} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {Avatar, Layout, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import Button from '../../commons/components/button/button';

import Header from '../../commons/components/headers/header/header';

import getColor from '../../commons/utils/colors';

import Post from '../../commons/components/post/post';

const posts = [{
	type: 'IMAGE',
	text: 'Beautiful and dramatic Antelope Canyon Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dolores voluptatibus maxime modi corporis assumenda porro obcaecati quos quidem, quisquam beatae, odio dolorem ducimus mollitia similique harum pariatur hic sint! ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea tempore sit eveniet maxime explicabo nihil suscipit, assumenda vero aliquam, mollitia esse quidem exercitationem, dolore sed sunt quo magni nesciunt?',
	sourceUri: 'https://i.imgur.com/UYiroysl.jpg'
},
{
	type: 'TEXT',
	text: 'Earlier this morning, NYC Beautiful and dramatic Antelope Canyon Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dolores voluptatibus maxime modi corporis assumenda porro obcaecati quos quidem, quisquam beatae, odio dolorem ducimus mollitia similique harum pariatur hic sint! ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea tempore sit eveniet maxime explicabo nihil suscipit, assumenda vero aliquam, mollitia esse quidem exercitationem, dolore sed sunt quo magni nesciunt?',
	sourceUri: 'https://i.imgur.com/UPrs1EWl.jpg'
},
{
	type: 'IMAGE',
	text: 'White Pocket Sunset Beautiful and dramatic Antelope Canyon Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dolores voluptatibus maxime modi corporis assumenda porro obcaecati quos quidem, quisquam beatae, odio dolorem ducimus mollitia similique harum pariatur hic sint! ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea tempore sit eveniet maxime explicabo nihil suscipit, assumenda vero aliquam, mollitia esse quidem exercitationem, dolore sed sunt quo magni nesciunt?',
	sourceUri: 'https://i.imgur.com/MABUbpDl.jpg'
},
{
	type: 'TEXT',
	text: 'Acrocorinth, Greece Beautiful and dramatic Antelope Canyon Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dolores voluptatibus maxime modi corporis assumenda porro obcaecati quos quidem, quisquam beatae, odio dolorem ducimus mollitia similique harum pariatur hic sint! ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea tempore sit eveniet maxime explicabo nihil suscipit, assumenda vero aliquam, mollitia esse quidem exercitationem, dolore sed sunt quo magni nesciunt?',
	sourceUri: 'https://i.imgur.com/KZsmUi2l.jpg'
},
{
	type: 'IMAGE',
	text: 'The lone tree, majestic landscape of New Zealand Beautiful and dramatic Antelope Canyon Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dolores voluptatibus maxime modi corporis assumenda porro obcaecati quos quidem, quisquam beatae, odio dolorem ducimus mollitia similique harum pariatur hic sint! ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea tempore sit eveniet maxime explicabo nihil suscipit, assumenda vero aliquam, mollitia esse quidem exercitationem, dolore sed sunt quo magni nesciunt?',
	sourceUri: 'https://i.imgur.com/2nCt3Sbl.jpg'
},
{
	type: 'TEXT',
	text: 'Middle Earth, Germany Beautiful and dramatic Antelope Canyon Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dolores voluptatibus maxime modi corporis assumenda porro obcaecati quos quidem, quisquam beatae, odio dolorem ducimus mollitia similique harum pariatur hic sint! ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea tempore sit eveniet maxime explicabo nihil suscipit, assumenda vero aliquam, mollitia esse quidem exercitationem, dolore sed sunt quo magni nesciunt?',
	sourceUri: 'https://i.imgur.com/lceHsT6l.jpg'
}];

function Home({avatarUrl}) {
	return (
		<Fragment>
			<View style={{backgroundColor: 'red'}}>
				<Header 
					leftComponent={
						<Button style={style.avatar}>
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
			</View>
			<FlatList
				data={posts}
				contentStyle={{padding: 16}}
				renderItem={({ item }) => (
					<Post {...item} />
				)}
				keyExtractor={item => item.sourceUri}
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