import React, {Fragment} from 'react';
import {ScrollView, Text, Image, View, StyleSheet} from 'react-native';
import {Icon} from '@ui-kitten/components';

import ProfileContent from '../../commons/components/profile-content/profile-content';
import Header from '../../commons/components/headers/header/header';
import Button from '../../commons/components/button/button';
import Avatar from '../../commons/components/avatar/avatar';
import StatsBox from './stats-box/stats-box';
import ProfileData from './profile-data/profile-data';

import {OUTER_MARGIN} from '../../commons/utils/sizes';
import getColor from '../../commons/utils/colors';

function UserProfile({
	name,
	avatarUrl,
	location,
	followers,
	following,
	posts,
	likes,
	about,
}) {
	return (
		<Fragment>
			<Header
				leftComponent={<Text style={style.title}>Profile</Text>}
				rightComponent={
					<Button
						style={style.edit}
						theme="dark"
						iconName="edit"
						type="icon-only"
					/>
				}
			/>
			<ScrollView style={style.wrapper}>
				<View style={style.content}>
					<ProfileData />
				</View>
			</ScrollView>
		</Fragment>
	);
}

const style = StyleSheet.create({
	wrapper: {
		flexGrow: 1
	},
	content: {
		padding: OUTER_MARGIN
	},
	title: {
		flex: 1,
		color: getColor('white'),
		marginLeft: OUTER_MARGIN
	},
	edit: {
		width: 50,
		height: 50,
		flexGrow: 0,
		flexShrink: 1
	},
	name: {
		textAlign: 'center',
		color: 'white',
	},
	locationGroup: {
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: 'transparent',
	},
	icon: {
		marginTop: 4,
		marginRight: 3,
	},
	location: {
		color: 'white',
	},
	messageBtn: {
		marginLeft: 16,
		backgroundColor: 'white',
		borderWidth: 0,
	},
	stats: {
		marginVertical: 16,
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: 'transparent',
	},
	buttonGroup: {
		flexDirection: 'row',
		marginVertical: 16,
		justifyContent: 'center',
		backgroundColor: 'transparent',
	},
});

UserProfile.defaultProps = {
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

export default UserProfile;
