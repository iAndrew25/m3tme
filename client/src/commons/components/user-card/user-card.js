import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon} from '@ui-kitten/components';

import Text from '../text/text';
import Avatar from '../avatar/avatar';

import {TWO_COLUMNS_SIZE, INNER_MARGIN} from '../../utils/sizes';
import getColor from '../../utils/colors';

function UserCard({avatarUrl, fullName, username, location, description}) {
	return (
		<View style={style.wrapper}>
			<Avatar size="XL" avatarUrl={avatarUrl} />
			<View style={style.text}>
				<Text style={style.fullName} value={fullName} />
				<Text style={style.username} value={`@${username}`} />
				{location && (
					<View style={style.locationView}>
						<Icon
							name="pin-outline"
							width={12}
							height={12}
							fill={getColor('primaryText')}
						/>
						<Text value={location} />
					</View>
				)}
				<Text
					style={style.description}
					numberOfLines={5}
					type="subtitle"
					ellipsisMode="tail"
					value={description}
				/>
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
		fontWeight: 'bold',
		textAlign: 'center',
	},
	username: {
		fontStyle: 'italic',
		textAlign: 'center',
	},
	description: {
		marginTop: INNER_MARGIN,
	},
	locationView: {
		marginTop: INNER_MARGIN,
		flexDirection: 'row',
		alignItems: 'center',
	},
});

export default UserCard;
