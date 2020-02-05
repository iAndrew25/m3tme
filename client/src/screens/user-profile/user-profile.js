import React, {Fragment} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

import Header from '../../commons/components/headers/header/header';
import Button from '../../commons/components/button/button';
import ProfileData from './profile-data/profile-data';
import SafeText from '../../commons/components/safe-text/safe-text';
import Section from '../../commons/components/section/section';

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
	navigation,
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
						onPress={() => navigation.navigate('EditUserProfile')}
					/>
				}
			/>
			<ScrollView contentContainerStyle={style.content}>
				<ProfileData />

				<View style={style.wrapper}>
					<Section title="About">
						<SafeText text={about} numberOfLines={5} />
					</Section>

					<Section title="Posts">
						<SafeText text="SOON" />
					</Section>
				</View>
			</ScrollView>
		</Fragment>
	);
}

const style = StyleSheet.create({
	wrapper: {
		padding: OUTER_MARGIN,
	},
	content: {
		backgroundColor: getColor('background'),
	},
	title: {
		flex: 1,
		color: getColor('white'),
		marginLeft: OUTER_MARGIN,
	},
	edit: {
		width: 50,
		height: 50,
		flexGrow: 0,
		flexShrink: 1,
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
