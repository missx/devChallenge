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
				<View>

				</View>
				<View>

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
    }
});