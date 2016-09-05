import React, { Component } from 'react';
import { 
	Text,
	View, 
	StyleSheet,
	TouchableHighlight,
	TextInput,
} from 'react-native';
import Colors from '../utils/colors.js';
import { Actions } from 'react-native-router-flux';

export default class ProfileView extends Component {


	render() {
		return (
			<View style={styles.mainContainer}>
				<View style={[styles.border, styles.nameView]}>
					<View>

					</View>
					<View>
						<Text style={styles.nameText}>[Name of person]</Text>
					</View>
				</View>
				<View style={styles.locationView}>
					<Text style={styles.locationText}>Your current location</Text>
				</View>
				<View style={[styles.border, styles.formView]}>
					<View style={styles.oneInfo}>
						<Text style={styles.formLabel}>Email</Text>
						<Text style={styles.formInfo}>johndoe@john.com</Text>
					</View>
					<View style={styles.oneInfo}>
						<Text style={styles.formLabel}>Address</Text>
						<Text style={styles.formInfo}>123 John St</Text>
					</View>
					<View style={styles.oneInfo}>
						<Text style={styles.formLabel}>Phone #</Text>
						<Text style={styles.formInfo}>444 - 555 - 000</Text>
					</View>
					<View style={styles.oneInfo}>
						<Text style={styles.formLabel}>Diseases</Text>
						<Text style={styles.formInfo}>Panchreatitis, Asthma, Diabetes</Text>
					</View>
				</View>
				<TouchableHighlight style={styles.wholeBtn}
					onPress={this._edit.bind(this)}>
					<View style={styles.buttonsView}>
                        <Text style={styles.buttons}>Save</Text>
                    </View>
				</TouchableHighlight>
			</View>
		);
	}

	_edit() {
		Actions.profileEdit();
	}
}

const styles = StyleSheet.create({

	mainContainer: {
		margin: 20,
		marginTop: 100
	},

	border: {
		borderColor: Colors.grey,
		borderStyle: 'solid',
		borderWidth: 1
	},
	
	wholeBtn : {
        backgroundColor: Colors.skyBlue, 
        height: 50, 
        marginTop: 20,
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

    nameView: {
    	padding: 10, 
    	height: 125
    },

    nameText: {
    	color: Colors.green,
    	fontSize: 20
    },

    locationView: {
    	padding: 10
    },

    locationText: {
    	fontSize: 20, 
    	fontWeight: 'bold'
    },

    formView: {
    	
    },

    oneInfo: {
    	flexDirection: 'row',
    	padding: 10,
    	borderColor: Colors.grey,
		borderStyle: 'solid',
		borderWidth: 1,
		borderBottomWidth: 0.5
    },

    formLabel: {
    	fontWeight: 'bold',
    	fontSize: 18, 
    	flex: 1
    },

    formInfo: {
    	fontSize: 18,
    	flex: 2
    }
});