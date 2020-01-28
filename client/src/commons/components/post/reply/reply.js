import React, {Fragment} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import AutoExpandingTextInput from '../../auto-expanding-text-input/auto-expanding-text-input';
import Avatar from '../../avatar/avatar';
import Button from '../../button/button';

import getColor from '../../../utils/colors';
import {OUTER_MARGIN, INNER_MARGIN} from '../../../utils/sizes';

function Reply({avatarUrl, canReply = true}) {
	const renderTextInput = () => {
		if (canReply) {
			return (
				<Fragment>
					<AutoExpandingTextInput
						multiline
						minHeight={40}
						maxHeight={73}
						placeholder="Leave a comment..."
						style={style.textInput}
					/>
					<Button
						size="M"
						theme="flat"
						type="icon-only"
						iconName="paper-plane"
					/>
				</Fragment>
			);
		} else {
			return (
				<Text style={style.cannotReply}>
					You can not reply to this post.
				</Text>
			);
		}
	};

	return (
		<View style={style.wrapper}>
			<Avatar size="S" avatarUrl={avatarUrl} />
			<View style={style.textInputWrapper}>{renderTextInput()}</View>
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: OUTER_MARGIN,
	},
	textInput: {
		flex: 1,
	},
	cannotReply: {
		flex: 1,
		color: getColor('subtitle'),
	},
	textInputWrapper: {
		flexDirection: 'row',
		marginLeft: INNER_MARGIN,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

Reply.defaultProps = {
	avatarUrl:
		'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthenypost.files.wordpress.com%2F2019%2F06%2Ftrump-asks-supporter-to-help-him-raise-7-million.jpg',
};

export default Reply;
