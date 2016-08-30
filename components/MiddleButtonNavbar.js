import React, {Component} from 'react';
import {
    StyleSheet,
    Navigator,
    Text,
    TouchableHighlight,
    View
    } from 'react-native';
import Colors from '../utils/colors.js';

export default class MiddleButtonNavbar extends Component {

	constructor(props) {
		super(props);
    }

	render(){
		return (
			<View style={styles.container}>
				<TouchableHighlight 
					
					onPress={this.props.onPress}>
					<Text style={styles.text}>Profile</Text>
				</TouchableHighlight>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		height: 50
	},
	text: {
		color: Colors.white,
		fontSize: 17
	}
});