import React from 'react';
import {
	ScrollView,
	View,
	Image,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import {
	Layout,
	TopNavigation,
	Avatar,
	Button,
	Icon,
	Input,
	Text,
} from '@ui-kitten/components';

import ProfileContent from '../../commons/components/profile-content/profile-content';

import getColor from '../../commons/utils/colors';

function ProfileSettings({profilePicture, name}) {
	return (
		<ScrollView style={style.wrapper}>
			<View style={{flexGrow: 1}}>
				<TopNavigation title="Profile Settings" alignment="center" />

				<View style={style.avatarWrapper}>
					<Image
						style={style.avatar}
						source={{uri: profilePicture}}
					/>
					<Button
						icon={styles => (
							<Icon {...styles} name="camera" fill="white" />
						)}
						style={style.button}
						appearance="ghost"
					/>
				</View>

				<Text category="h5" style={style.name}>
					{name}
				</Text>

				<ProfileContent isEditMode />
			</View>
		</ScrollView>
	);
}

const style = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: getColor('background'),
	},
	avatar: {
		width: 160,
		height: 160,
		borderRadius: 80,
		alignSelf: 'center',
	},
	avatarWrapper: {
		margin: 16,
	},
	button: {
		position: 'relative',
		width: 50,
		height: 50,
		backgroundColor: '#222',
		borderRadius: 25,
		alignSelf: 'center',
		justifyContent: 'center',
		marginTop: -50,
		marginRight: -110,
	},
	name: {
		textAlign: 'center',
	},
});

ProfileSettings.defaultProps = {
	profilePicture: 'https://images.wsj.net/im-119693?width=620&size=1.5',
	name: 'Donald Trump',
};

export default ProfileSettings;
