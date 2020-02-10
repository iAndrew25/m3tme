import React, {Fragment, useState} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';

import BackHeader from '../../commons/components/headers/back-header/back-header';

import Avatar from '../../commons/components/avatar/avatar';
import Button from '../../commons/components/button/button';
import About from '../../commons/components/about/about';
import Section from '../../commons/components/section/section';
import Toggle from '../../commons/components/toggle/toggle';
import TextInputEdit from '../../commons/components/textinput-edit/textinput-edit';

import {
	OUTER_MARGIN,
	INNER_MARGIN,
	AVATAR_SIZES,
} from '../../commons/utils/sizes';
import getColor from '../../commons/utils/colors';

function EditUserProfile({
	navigation,
	avatarUrl = 'http://static2.businessinsider.com/image/5314bf9269bedd6703de77f8/elon-musk-writes-a-blistering-takedown-of-chris-christie-and-new-jerseys-decision-to-ban-teslas-sales-model.jpg',
}) {
	const [followersCount, setFollowersCount] = useState(true);
	const [followingCount, setFollowingCount] = useState(true);
	const [postsCount, setPostsCount] = useState(true);
	const [heartsCount, setHeartsCount] = useState(true);
	const [displayName, setDisplayName] = useState('Elon Musty');
	const [location, setLocation] = useState('Bortești');

	return (
		<Fragment>
			<BackHeader
				onPress={() => navigation.goBack()}
				title="Edit profile"
			/>
			<ScrollView contentContainerStyle={style.wrapper}>
				<View style={style.personalData}>
					<View style={style.avatar}>
						<View style={AVATAR_SIZES.XXL}>
							<Avatar size="XXL" avatarUrl={avatarUrl} />
							<Button
								style={style.changePicture}
								size="M"
								type="icon-only"
								theme="dark"
								iconName="camera"
							/>
						</View>
					</View>
					<View style={style.inputs}>
						<TextInputEdit
							label="Username"
							state="@elon.musty"
							editable={false}
						/>
						<TextInputEdit
							label="Display name"
							state={displayName}
							setState={setDisplayName}
						/>
						<TextInputEdit
							label="Location"
							state={location}
							setState={setLocation}
						/>
					</View>
				</View>
				<Section title="About">
					<About text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit cum debitis quo est explicabo maiores facere quae corporis rerum illo mollitia, sequi odit accusantium, sunt tempore doloribus voluptate at et." />
				</Section>
				<Section title="Display on profile">
					<Toggle
						state={followersCount}
						setState={setFollowersCount}
						label="Total followers"
					/>
					<Toggle
						state={followingCount}
						setState={setFollowingCount}
						label="Total following"
					/>
					<Toggle
						state={postsCount}
						setState={setPostsCount}
						label="Total posts"
					/>
					<Toggle
						state={heartsCount}
						setState={setHeartsCount}
						label="Total hearts"
					/>
				</Section>
			</ScrollView>
		</Fragment>
	);
}

const style = StyleSheet.create({
	wrapper: {
		flex: 1,
		padding: OUTER_MARGIN,
		backgroundColor: getColor('background'),
	},
	personalData: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: OUTER_MARGIN,
	},
	inputs: {
		flex: 1,
		paddingLeft: OUTER_MARGIN,
	},
	button: {
		paddingHorizontal: INNER_MARGIN,
		paddingVertical: OUTER_MARGIN,
		flexGrow: 1,
		borderBottomWidth: 1,
		borderColor: getColor('divider'),
	},
	avatar: {
		alignItems: 'center',
	},
	changePicture: {
		position: 'absolute',
		right: 0,
		bottom: 0,
		borderRadius: 20,
	},
});

export default EditUserProfile;
