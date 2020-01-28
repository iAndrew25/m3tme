import React, {Fragment, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import BackHeader from '../../commons/components/headers/back-header/back-header';

import About from '../../commons/components/about/about';
import Section from '../../commons/components/section/section';
import Toggle from '../../commons/components/toggle/toggle';

import {OUTER_MARGIN, INNER_MARGIN} from '../../commons/utils/sizes';

function EditUserProfile({navigation}) {
	const [followersCount, setFollowersCount] = useState(true);
	const [followingCount, setFollowingCount] = useState(true);
	const [postsCount, setPostsCount] = useState(true);
	const [heartsCount, setHeartsCount] = useState(true);

	return (
		<Fragment>
			<BackHeader
				onPress={() => navigation.goBack()}
				title="Edit profile"
			/>
			<ScrollView contentContainerStyle={style.wrapper}>
				<Section title="About">
					<About text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit cum debitis quo est explicabo maiores facere quae corporis rerum illo mollitia, sequi odit accusantium, sunt tempore doloribus voluptate at et." />
				</Section>
				<Section title="Display on profile">
					<Toggle
						state={followersCount}
						setState={setFollowersCount}
						text="Find you in search section"
					/>
					<Toggle
						state={followingCount}
						setState={setFollowingCount}
						text="Send you messages"
					/>
					<Toggle
						state={postsCount}
						setState={setPostsCount}
						text="Comment to your posts"
					/>
					<Toggle
						state={heartsCount}
						setState={setHeartsCount}
						text="Comment to your posts"
					/>
				</Section>
			</ScrollView>
		</Fragment>
	);
}

const style = StyleSheet.create({
	wrapper: {
		padding: OUTER_MARGIN,
	},
	button: {
		paddingHorizontal: INNER_MARGIN,
		paddingVertical: OUTER_MARGIN,
		flexGrow: 1,
		borderBottomWidth: 1,
		borderColor: '#ddd',
	},
});

export default EditUserProfile;
