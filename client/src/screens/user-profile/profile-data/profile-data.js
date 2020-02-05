import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Icon} from '@ui-kitten/components';

import Button from '../../../commons/components/button/button';
import Avatar from '../../../commons/components/avatar/avatar';
import StatsBox from '../stats-box/stats-box';

import {OUTER_MARGIN} from '../../../commons/utils/sizes';
import getColor from '../../../commons/utils/colors';

function UserProfile({
	fullName,
	username,
	avatarUrl,
	location,
	followersCount,
	followingCount,
	postsCount,
	likesCount,
	about,
}) {
	return (
		<View style={style.wrapper}>
			<Avatar size="XXL" avatarUrl={avatarUrl} />

			<View style={style.text}>
				<Text style={style.fullName}>{fullName}</Text>

				<Text style={style.username}>@{username}</Text>
			</View>
			<View style={style.locationGroup}>
				<Icon
					name="pin"
					style={style.icon}
					fill={getColor('primary')}
					width={20}
					height={20}
				/>
				<Text category="s1">{location}</Text>
			</View>

			<View style={style.buttonGroup}>
				<Button
					theme="dark"
					type="icon-left"
					text="FOLLOW"
					size="L"
					style={style.followBtn}
					iconName="person-add"
				/>
				<Button
					theme="light"
					type="icon-left"
					text="MESSAGE"
					size="L"
					iconName="message-circle"
				/>
			</View>

			<View style={style.stats}>
				<StatsBox name="Followers" value={followersCount} />
				<StatsBox name="Following" value={followingCount} />
				<StatsBox name="Posts" value={postsCount} />
				<StatsBox name="Likes" value={likesCount} />
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		flex: 1,
		padding: OUTER_MARGIN,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: getColor('lightPrimary')
	},
	content: {
		flex: 1,
		flexDirection: 'column',
	},
	fullName: {
		textAlign: 'center',
		color: getColor('textPrimary'),
		fontWeight: 'bold',
		fontSize: 20,
	},
	username: {
		textAlign: 'center',
		color: getColor('textPrimary'),
		fontStyle: 'italic',
		fontSize: 14,
	},
	text: {
		marginVertical: OUTER_MARGIN,
	},
	locationGroup: {
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		marginBottom: OUTER_MARGIN,
	},
	buttonGroup: {
		flexDirection: 'row',
		marginBottom: OUTER_MARGIN,
	},
	followBtn: {
		marginRight: OUTER_MARGIN,
	},
	stats: {
		width: '100%',
		flexDirection: 'row',
		marginTop: OUTER_MARGIN,
		justifyContent: 'space-around',
	},
});

UserProfile.defaultProps = {
	fullName: 'Donald Trump',
	username: 'realDonaldTrump',
	avatarUrl: 'https://images.wsj.net/im-119693?width=620&size=1.5',
	location: 'Bratislava',
	followersCount: 200,
	followingCount: 121,
	postsCount: 5,
	likesCount: 40,
	about:
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae eos esse, eveniet deleniti aut, adipisci tenetur est ipsa tempore deserunt enim animi aliquam maiores aspernatur commodi, odit quo natus accusamus. ipsum dolor sit amet, consectetur adipisicing elit. Illo est repellat nostrum facere explicabo non esse eum provident reprehenderit animi, qui officiis ipsam aliquid, vero optio iusto. Soluta, velit, ea. ipsum dolor sit amet, consectetur adipisicing elit. In sequi maxime dolorum, quo ratione omnis commodi facilis obcaecati nam, dolor esse ducimus beatae expedita assumenda nostrum excepturi quam. Beatae, inventore! ipsum dolor sit amet, consectetur adipisicing elit. Eos dolorem repellendus aliquam doloribus eaque in inventore facilis quis voluptate illum, quam labore molestiae. Ipsa quod perspiciatis maiores assumenda voluptates provident!',
};

export default UserProfile;
