import React, {Fragment, useState} from 'react';
import {ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native';

import BackHeader from '../../commons/components/headers/back-header/back-header';

import Section from '../../commons/components/section/section';
import Toggle from '../../commons/components/toggle/toggle';

import {OUTER_MARGIN, INNER_MARGIN} from '../../commons/utils/sizes';

function Settings({navigation}) {
	const [findInSearch, setFindInSearch] = useState(true);
	const [sendMessages, setFindMessages] = useState(true);
	const [commentToPosts, setCommentToPosts] = useState(false);

	return (
		<Fragment>
			<BackHeader onPress={() => navigation.goBack()} title="Settings" />
			<ScrollView contentContainerStyle={style.wrapper}>
				<Section title="General settings" />
				<Section title="Allow anons to">
					<Toggle
						state={findInSearch}
						setState={setFindInSearch}
						text="Find you in search section"
					/>
					<Toggle
						state={sendMessages}
						setState={setFindMessages}
						text="Send you messages"
					/>
					<Toggle
						state={commentToPosts}
						setState={setCommentToPosts}
						text="Comment to your posts"
					/>
				</Section>

				<Section title="Account settings">
					<TouchableOpacity style={style.button}>
						<Text>Block list</Text>
					</TouchableOpacity>
					<TouchableOpacity style={style.button}>
						<Text>Change password</Text>
					</TouchableOpacity>
					<TouchableOpacity style={style.button}>
						<Text>Remove account</Text>
					</TouchableOpacity>
					<TouchableOpacity style={style.button}>
						<Text>Log out</Text>
					</TouchableOpacity>
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

export default Settings;
