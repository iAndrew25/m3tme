import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import UserCard from '../../commons/components/user-card/user-card';
import patternMock from 'pattern-mock';

const data = patternMock({
	users: [{
		id: 'COUNTER',
		username: 'WORD',
		fullName: 'FULL_NAME',
		location: 'WORD',
		description: 'PARAGRAPH'
	}, [20, 21]]
})

function Discover() {
	return (
		<View style={{flex: 1}}>
			<ScrollView contentContainerStyle={style.wrapper}>
				{data.users.map(user => <UserCard {...user} />)}
			</ScrollView>
		</View>
	);
};

const style = StyleSheet.create({
	wrapper: {
		flexGrow: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		padding: 16
	}
});

export default Discover;