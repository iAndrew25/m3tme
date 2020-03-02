import React, {useState, Fragment} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import ImageViewer from 'react-native-image-zoom-viewer';
import FullWidthImage from 'react-native-fullwidth-image';

function ZoomableImage({content, style: customStyle}) {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const showModal = () => setIsModalVisible(true);
	const hideModal = () => setIsModalVisible(false);

	return (
		<Fragment>
			<Modal
				onBackdropPress={hideModal}
				backdropOpacity={0.95}
				useNativeDriver
				onBackButtonPress={hideModal}
				isVisible={isModalVisible}
				style={style.modal}>
				<ImageViewer
					backgroundColor="transparent"
					onClick={hideModal}
					enableSwipeDown
					onCancel={hideModal}
					imageUrls={[{url: content}]}
					renderIndicator={() => null}
				/>
			</Modal>

			<TouchableOpacity onPress={showModal} activeOpacity={0.9}>
				<FullWidthImage style={customStyle} source={{uri: content}} />
			</TouchableOpacity>
		</Fragment>
	);
}

const style = StyleSheet.create({
	modal: {
		margin: 0,
	}
});

export default ZoomableImage;
