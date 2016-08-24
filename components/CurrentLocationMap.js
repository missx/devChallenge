import React, { Component } from 'react';
import { 
	Text,
	View, 
	StyleSheet
} from 'react-native';
import Colors from '../utils/colors.js';
import MapView from 'react-native-maps';

export default class CurrentLocationMap extends Component {


	render() {
		return (
			<View>
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	map: {
		height: 150,
		alignSelf: 'stretch',
		margin: 40
	}
});