import React, { Component } from 'react';
import { 
	Text,
	View, 
	StyleSheet,
	TouchableHighlight,
	TextInput,
	DatePickerAndroid,
	TouchableWithoutFeedback
} from 'react-native';
import Colors from '../utils/colors.js';

export default class OneTreatmentPlan extends Component {

	constructor(props) {
	    super(props);
	    this.state = { 
	    	name: 'Treatment Plan Name',
	    	description: 'Treatment Plan Description',
		    startDateText: 'Pick a date',
		    endDateText: 'Pick a date'
	   	};
	}

	async showPicker(stateKey, options) {
		try {
			var newState = {};
			const {action, year, month, day} = await DatePickerAndroid.open(options);
			if (action === DatePickerAndroid.dismissedAction) {
				newState[stateKey + 'Text'] = 'Pick a date';
			} else {
				var date = new Date(year, month, day);
				newState[stateKey + 'Text'] = date.toLocaleDateString();
				newState[stateKey] = date;
			}
			this.setState(newState);
		} catch ({code, message}) {
			console.warn(`Error in example '${stateKey}': `, message);
		}
	}

	render() {

		return (
			<View style={styles.mainContainer}>
				<View style={[styles.childViews, styles.border]}>
					<Text style={[styles.labels, styles.gralFontSize]}>Name</Text>
					<TextInput
				        style={[styles.textInput, styles.gralFontSize]}
				        onChangeText={(text) => this.setState({text})}
				        value={this.state.name}
				    />
				    <Text style={[styles.labels, styles.gralFontSize]}>Description</Text>
					<TextInput
				        style={[styles.textInput, styles.gralFontSize]}
				        onChangeText={(text) => this.setState({text})}
				        value={this.state.description}
				    />
				</View>
				<View style={[styles.childViews, styles.border]}> 
					<Text style={[styles.labels, styles.gralFontSize]}>Start Date</Text>
					<TouchableWithoutFeedback
			            onPress={this.showPicker.bind(this, 'startDate', {date: this.state.startDate})}>
			            <View style={[styles.border, styles.datepicker]}>
			            	<Text style={[styles.gralFontSize, styles.datepickerText]}>{this.state.startDateText}</Text>
			            </View>
			        </TouchableWithoutFeedback>
					
					<Text style={[styles.labels, styles.gralFontSize]}>End Date</Text>
					<TouchableWithoutFeedback
			            onPress={this.showPicker.bind(this, 'endDate', {date: this.state.endDate})}>
			            <View style={[styles.border, styles.datepicker]}>
			            	<Text style={[styles.gralFontSize, styles.datepickerText]}>{this.state.endDateText}</Text>
			            </View>
			        </TouchableWithoutFeedback>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		padding: 20,
		margin: 20,
		marginTop: 100

	},

	childViews: {
		padding: 15,
		marginBottom: 15 
	},

	border: {
		borderColor: Colors.grey,
		borderStyle: 'solid',
		borderWidth: 1
	},

	textInput: {
		height: 40, 
		borderColor: Colors.grey, 
		borderWidth: 1,
		color: Colors.darkGrey
	},

	labels: {
		color: 'black'
	},

	gralFontSize: {
		fontSize: 18
	},

	datepicker: {
		padding: 5,
		margin: 5,
		
	},

	datepickerText: {
		color: Colors.darkGrey
	}

});