import React, {Fragment} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import MenuHeader from '../../commons/components/headers/menu-header/menu-header';
import ProfileData from '../user-profile/profile-data/profile-data';

import {OUTER_MARGIN} from '../../commons/utils/sizes';
import getColor from '../../commons/utils/colors';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import MyPosts from '../my-posts/my-posts';
import MyAppreciations from '../my-appreciations/my-appreciations';

const TopTab = createMaterialTopTabNavigator();

function MyProfile({
	name,
	avatarUrl,
	location,
	followers,
	following,
	posts,
	likes,
	about,
	navigation,
}) {
	return (
		<Fragment>
			<MenuHeader
				title="Profile"
				onPress={() => navigation.navigate('EditUserProfile')}
				iconName="edit"
			/>
			<ScrollView contentContainerStyle={style.content}>
				<ProfileData hideButtons />
				<TopTab.Navigator tabBarOptions={tabBarOptions}>
					<TopTab.Screen name="My posts" component={MyPosts} />
					<TopTab.Screen
						name="My appreciations"
						component={MyAppreciations}
					/>
				</TopTab.Navigator>
			</ScrollView>
		</Fragment>
	);
}

const tabBarOptions = {
	labelStyle: {
		fontSize: 12,
		fontWeight: 'bold',
		textTransform: 'capitalize',
	},
	indicatorStyle: {
		backgroundColor: getColor('defaultPrimary'),
	},
	activeTintColor: getColor('primaryText'),
	inactiveTintColor: getColor('secondaryText'),
};

const style = StyleSheet.create({
	wrapper: {
		padding: OUTER_MARGIN,
	},
	content: {
		backgroundColor: getColor('background'),
	},
});

MyProfile.defaultProps = {
	name: 'Donald Trump',
	avatarUrl: 'https://images.wsj.net/im-119693?width=620&size=1.5',
	location: 'Bratislava',
	followers: 200,
	following: 121,
	posts: 5,
	likes: 40,
	about:
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae eos esse, eveniet deleniti aut, adipisci tenetur est ipsa tempore deserunt enim animi aliquam maiores aspernatur commodi, odit quo natus accusamus. ipsum dolor sit amet, consectetur adipisicing elit. Illo est repellat nostrum facere explicabo non esse eum provident reprehenderit animi, qui officiis ipsam aliquid, vero optio iusto. Soluta, velit, ea. ipsum dolor sit amet, consectetur adipisicing elit. In sequi maxime dolorum, quo ratione omnis commodi facilis obcaecati nam, dolor esse ducimus beatae expedita assumenda nostrum excepturi quam. Beatae, inventore! ipsum dolor sit amet, consectetur adipisicing elit. Eos dolorem repellendus aliquam doloribus eaque in inventore facilis quis voluptate illum, quam labore molestiae. Ipsa quod perspiciatis maiores assumenda voluptates provident!',
};

export default MyProfile;
