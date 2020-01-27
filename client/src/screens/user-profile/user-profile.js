import React from 'react';
import {ScrollView, Image, View, StyleSheet} from 'react-native';
import {
	Avatar,
	Text,
	Layout,
	Button,
	TopNavigation,
	Icon,
	List,
	Card,
} from '@ui-kitten/components';

import StatsBox from './stats-box/stats-box';

import ProfileContent from '../../commons/components/profile-content/profile-content';

function UserProfile({
	name,
	profilePicture,
	location,
	followers,
	following,
	posts,
	likes,
	about,
}) {
	return (
		<ScrollView style={{flexGrow: 1}}>
			<View style={{flexGrow: 1}}>
				<TopNavigation title="User Profile" alignment="center" />

				<View>
					<Image
						source={{
							uri:
								'https://www.xda-developers.com/files/2019/11/default_wallpaper.jpg',
						}}
						style={[StyleSheet.absoluteFill]}
					/>

					<Avatar
						shape="round"
						style={style.avatar}
						source={{uri: profilePicture}}
					/>

					<Text category="h5" style={style.name}>
						{name}
					</Text>

					<View style={style.locationGroup}>
						<Icon
							name="pin-outline"
							style={style.icon}
							fill="white"
							width={16}
							height={16}
						/>
						<Text category="s1" style={style.location}>
							{location}
						</Text>
					</View>

					<View style={style.buttonGroup}>
						<Button
							appearance="filled"
							icon={style => (
								<Icon {...style} name="person-add" />
							)}>
							FOLLOW
						</Button>
						<Button
							appearance="outline"
							icon={style => (
								<Icon {...style} name="message-circle" />
							)}
							style={style.messageBtn}>
							MESSAGE
						</Button>
					</View>

					<View style={style.stats}>
						<StatsBox name="Followers" value={followers} />
						<StatsBox name="Following" value={following} />
						<StatsBox name="Posts" value={posts} />
						<StatsBox name="Likes" value={likes} />
					</View>
				</View>

				<ProfileContent />
			</View>
		</ScrollView>
	);
}

const style = StyleSheet.create({
	avatar: {
		width: 160,
		height: 160,
		margin: 16,
		alignSelf: 'center',
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
	profilePicture: 'https://images.wsj.net/im-119693?width=620&size=1.5',
	location: 'Bratislava',
	followers: 200,
	following: 121,
	posts: 5,
	likes: 40,
	about:
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae eos esse, eveniet deleniti aut, adipisci tenetur est ipsa tempore deserunt enim animi aliquam maiores aspernatur commodi, odit quo natus accusamus. ipsum dolor sit amet, consectetur adipisicing elit. Illo est repellat nostrum facere explicabo non esse eum provident reprehenderit animi, qui officiis ipsam aliquid, vero optio iusto. Soluta, velit, ea. ipsum dolor sit amet, consectetur adipisicing elit. In sequi maxime dolorum, quo ratione omnis commodi facilis obcaecati nam, dolor esse ducimus beatae expedita assumenda nostrum excepturi quam. Beatae, inventore! ipsum dolor sit amet, consectetur adipisicing elit. Eos dolorem repellendus aliquam doloribus eaque in inventore facilis quis voluptate illum, quam labore molestiae. Ipsa quod perspiciatis maiores assumenda voluptates provident!',
};

export default UserProfile;
