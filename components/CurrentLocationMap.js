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
			<View style={styles.mapView}>
				<MapView 
					style={styles.map}
					showsUserLocation={true}
					followsUserLocation={true}
				/>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	mapView: {
		height: 75,
		alignSelf: 'stretch',
		margin: 40,
	},
	map: {
	    height: 100,
	    alignSelf: 'stretch',
	},
});