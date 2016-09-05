import React, { Component } from 'react';
import { 
	ListView, 
	Text,
	View, 
	StyleSheet,
	TouchableHighlight,

} from 'react-native';
import Colors from '../utils/colors.js';

export default class TreatmentPlans extends Component {

	constructor(props) {
		super(props);

		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(['Treatment 1', 'Treatment b', 'Treatment 3', 'Treatment 4', 'Treatment 5']),
		};
    }


	render() {

		return (
			<View style={styles.mainContainer}>
				<Text style={styles.title}>My Treatment Plans</Text>
				<ListView
					style={styles.listContainer}
					dataSource={this.state.dataSource}
					renderRow={(data) => <View style={styles.oneTreatment}><TouchableHighlight ><Text style={styles.link}>{data}</Text></TouchableHighlight></View>}
			    />
			</View>
		)
	}
}

const styles = StyleSheet.create({

	mainContainer: {
		padding:30,
		borderColor: Colors.grey,
		borderStyle: 'solid',
		borderWidth: 1,
		margin: 20,
		marginTop: 100
	},
	title: {
		fontSize: 25,
		fontWeight: 'bold'
	},
	listContainer: {
		flex: 1,
		marginTop: 20,
		
	},
	oneTreatment: {
		height:60,
		paddingLeft: 20,
		paddingRight: 20,
		borderColor: Colors.grey,
		borderStyle: 'solid',
		borderWidth: 1,

	}, 
	link: {
		color: Colors.skyBlue,
		fontSize: 18,
		textAlign: 'left',
		paddingTop: 15
	}
});