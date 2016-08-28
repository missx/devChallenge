import React, { Component } from 'react';
import { 
	Text,
	View, 
	StyleSheet,
	ListView
} from 'react-native';
import Colors from '../utils/colors.js';

export default class HealthIndicatorHistory extends Component {
	constructor(props) {
		super(props);

		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows([{date: '07/28/2016', bloodPressure: '100', bodyTemperature: '36', bodyWeight: '75'},
										{date: '07/28/2016', bloodPressure: '100', bodyTemperature: '36', bodyWeight: '75'},
										{date: '07/28/2016', bloodPressure: '100', bodyTemperature: '36', bodyWeight: '75'},
										{date: '07/28/2016', bloodPressure: '100', bodyTemperature: '36', bodyWeight: '75'},
										{date: '07/28/2016', bloodPressure: '100', bodyTemperature: '36', bodyWeight: '75'}]),
		};
	}

	render() {
		return (
			<View style={styles.mainContainer}>
				<Text style={styles.title}>Health Indicators History</Text>
				<View style={styles.listContainer}>
					<ListView
						dataSource={this.state.dataSource}
						renderRow={(data) => <View style={styles.oneIndicator}>
												<Text style={styles.oneIndicatorText}>On {data.date} your blood pressure
												was {data.bloodPressure}, your body temperature was {data.bodyTemperature} 
												and your body weight {data.bodyWeight}.</Text>
											 </View>}
				    />
			    </View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	mainContainer: {
		margin: 20,
		marginTop: 100
	},

	listContainer: {
		borderColor: Colors.grey,
		borderStyle: 'solid',
		borderWidth: 1,
		marginTop: 10,
		padding: 10
	},

	oneIndicator: {
		paddingBottom: 15
	},

	oneIndicatorText: {
		fontSize: 18
	},

	title: {
		fontSize: 24
	}
});