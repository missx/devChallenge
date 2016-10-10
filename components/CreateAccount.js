import React, { Component } from 'react';
import { 
	Text,
	View, 
	StyleSheet,
	TouchableHighlight,
	TextInput,
} from 'react-native';
import Colors from '../utils/colors.js';

export default class CreateAccount extends Component {

	constructor(props) {
		super(props);

		this.state = {
			name: 'Name',
            username: 'Username',
            password: 'Password'
        };
	}

	render() {
		return (
			<View style={styles.mainContainer}>
				<TextInput style={styles.inputs} value={this.state.name}></TextInput>
				<TextInput style={styles.inputs} value={this.state.username}></TextInput>
				<TextInput style={styles.inputs} value={this.state.password}></TextInput>
				<TouchableHighlight style={styles.logingBtn}>
					<View style={styles.buttonsView}>
                        <Text style={styles.buttons}>Sign Up</Text>
                    </View>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({

	mainContainer: {
		margin: 20,
		paddingTop: 50
	},
	logingBtn : {
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
        paddingTop: 5,
        paddingBottom: 5
    },

    inputs: {
    	fontSize: 18
    }
});