import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from '@ui-kitten/components';

import Avatar from '../avatar/avatar';

import {TWO_COLUMNS_SIZE, INNER_MARGIN} from '../../utils/sizes';
import getColor from '../../utils/colors';

function UserCard({avatarUrl, fullName, username, location, description}) {
	return (
		<View style={style.wrapper}>
			<Avatar size="XL" avatarUrl={avatarUrl} />
			<View style={style.text}>
				<Text style={style.fullName}>{fullName}</Text>
				<Text style={style.username}>@{username}</Text>
				{location && (
					<View style={style.locationView}>
						<Icon
							name="pin-outline"
							width={12}
							height={12}
							fill={getColor('defaultPrimary')}
						/>
						<Text style={style.location}>{location}</Text>
					</View>
				)}
				<Text
					style={style.description}
					numberOfLines={5}
					ellipsisMode="tail">
					{description}
				</Text>
			</View>
		</View>
	);
}

UserCard.defaultProps = {
	avatarUrl:
		'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthenypost.files.wordpress.com%2F2019%2F06%2Ftrump-asks-supporter-to-help-him-raise-7-million.jpg',
};

const style = StyleSheet.create({
	wrapper: {
		width: TWO_COLUMNS_SIZE,
		backgroundColor: getColor('white'),
		borderRadius: 5,
		elevation: 3,
		padding: INNER_MARGIN,
		margin: INNER_MARGIN,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		marginTop: INNER_MARGIN,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	fullName: {
		fontSize: 12,
		fontWeight: 'bold',
		color: 'black',
		textAlign: 'center',
	},
	username: {
		fontSize: 12,
		fontStyle: 'italic',
		color: 'black',
		textAlign: 'center',
	},
	description: {
		marginTop: INNER_MARGIN,
		fontSize: 10,
		color: getColor('secondaryText'),
	},
	locationView: {
		marginTop: INNER_MARGIN,
		flexDirection: 'row',
		alignItems: 'center',
	},
	location: {
		fontSize: 12,
	},
});

export default UserCard;
