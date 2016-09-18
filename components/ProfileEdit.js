import React, { Component } from 'react';
import { 
	Text,
	View, 
	StyleSheet,
	TouchableHighlight,
	TextInput,
	Image
} from 'react-native';
import Colors from '../utils/colors.js';
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';

export default class ProfileEdit extends Component {

	
	render() {
		return (
			<View style={styles.mainContainer}>
				<View style={[styles.border, styles.photoContainer]}>
					<View style={styles.photoView}>
						<Image
							style={styles.photo}
				        	source={require('../imgs/img-placeholder.png')}
				        />
					</View>
					<View style={styles.photoLinkView}>
						<TouchableHighlight
							onPress={this._openPhotoPicker.bind(this)}>
							<View >
		                        <Text style={styles.photoLink}>Add Photo</Text>
		                    </View>
						</TouchableHighlight>
					</View>
				</View>
				<View>
					<View style={styles.oneInfo}>
						<Text style={styles.formLabel}>Name</Text>
						<TextInput style={styles.formInfo}
							placeholder="Your name"/>
					</View>
					<View style={styles.oneInfo}>
						<Text style={styles.formLabel}>Email</Text>
						<TextInput style={styles.formInfo}
							placeholder="johndoe@john.com"/>
					</View>
					<View style={styles.oneInfo}>
						<Text style={styles.formLabel}>Address</Text>
						<TextInput style={styles.formInfo}
							placeholder="123 John St"/>
					</View>
					<View style={styles.oneInfo}>
						<Text style={styles.formLabel}>Phone #</Text>
						<TextInput style={styles.formInfo}
							placeholder="(444) - 555 - 000"/>
					</View>
					<View style={styles.oneInfo}>
						<Text style={styles.formLabel}>Diseases</Text>
						<TextInput style={styles.formInfo}
							placeholder="Do you have diseases?"
							/>
					</View>
				</View>
				<TouchableHighlight style={styles.wholeBtn}
					onPress={this._saveProfile.bind(this)}>
					<View style={styles.buttonsView}>
                        <Text style={styles.buttons}>Save</Text>
                    </View>
				</TouchableHighlight>
			</View>
		);
	}

	_saveProfile() {
		Actions.profileView();
	}

	_openPhotoPicker() {

		const pickerOptions = {
			title: 'Select Profile Picture',
			storageOptions: {
				skipBackup: true,
				path: 'images'
			}
		};

		ImagePicker.showImagePicker(pickerOptions, (response) => {
			console.log('Response = ', response);

			if (response.didCancel) {
				console.log('User cancelled image picker');
			}
			else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			}
			else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			}
			else {
				// You can display the image using either data...
				const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

				// or a reference to the platform specific asset location
				if (Platform.OS === 'ios') {
					const source = {uri: response.uri.replace('file://', ''), isStatic: true};
				} else {
					const source = {uri: response.uri, isStatic: true};
				}

				this.setState({
					avatarSource: source
				});
			}
		});
	}

}

const styles = StyleSheet.create({

	mainContainer: {
		margin: 20,
		marginTop: 80
	},

	border: {
		borderColor: Colors.grey,
		borderStyle: 'solid',
		borderWidth: 1
	},

	photoContainer: {
    	marginBottom: 10,
    	padding: 8, 
    	flexDirection: 'row'
    },

    photoView: {
    	flex: 1.5, 
    	paddingLeft: 25
    },

    photo: {
    	borderRadius: 100,
    	height: 90,
    	width: 90
    },

    photoLinkView: {
    	flex: 2,
    	justifyContent: 'center',
    },

    photoLink: {
    	color: Colors.skyBlue,
    	fontSize: 20,
    	alignSelf: 'center'
    },

	wholeBtn : {
        backgroundColor: Colors.skyBlue, 
        height: 50, 
        marginTop: 10,
        alignSelf: 'stretch'
    },
    buttons : {
        color: Colors.white, 
        fontSize: 25, 
        textAlign: 'center'
    }, 
    buttonsView : {
        paddingTop: 8,
        paddingBottom: 8
    },

    oneInfo: {
    	flexDirection: 'row',
    	padding: 8,
    	paddingBottom: 5,
    	paddingTop: 1,
    	borderColor: Colors.grey,
		borderStyle: 'solid',
		borderWidth: 1
    },

    formLabel: {
    	fontWeight: 'bold',
    	fontSize: 18, 
    	flex: 1,
    	alignSelf: 'center'
    },

    formInfo: {
    	fontSize: 18,
    	flex: 2,	
    },


});