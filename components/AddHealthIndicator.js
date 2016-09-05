import React, { Component } from 'react';
import { 
	Text,
	View, 
	StyleSheet,
	TouchableHighlight,
	TextInput,
	Switch,
	Picker
} from 'react-native';
import { Actions} from 'react-native-router-flux';
import Colors from '../utils/colors.js';

export default class AddHealthIndicator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			withinRange: true,
			bloodPressure: '100',
			bodyTemperature: '36',
			bodyWeight: '60'
        };
	}

	render() {
		return (
			<View style={styles.mainContainer}>
				<View style={[styles.border, styles.childViews]}>
					<View style={styles.inline}>
						<Text style={styles.text}>Blood Pressure</Text>
						<Picker 
						style={styles.picker}
						selectedValue={this.state.bloodPressure}>
				            <Picker.Item label="80" value="80" />
				            <Picker.Item label="81" value="81" />
            			</Picker>
					</View>
					<View style={styles.inline}>
						<Text style={styles.text}>Is it within your range?</Text>
						<Switch
				          onValueChange={(value) => this.setState({withinRange: !this.state.withinRange})}
				          style={styles.switch}
				          value={this.state.withinRange} />
			        </View>
				</View>
				<View style={[styles.border, styles.childViews]}>
					<View style={styles.inline}>
						<Text style={styles.text}>Body Temperature</Text>
						<Picker 
						style={styles.picker}
						selectedValue={this.state.bodyTemperature}>
				            <Picker.Item label="80" value="80" />
				            <Picker.Item label="81" value="81" />
            			</Picker>
					</View>
					<View style={styles.inline}>
						<Text style={styles.text}>Body Weight</Text>
						<Picker 
						style={styles.picker}
						selectedValue={this.state.bodyWeight}>
				            <Picker.Item label="80" value="80" />
				            <Picker.Item label="81" value="81" />
            			</Picker>
					</View>
				</View>
				<TouchableHighlight style={styles.wholeBtn}
					onPress={this._save.bind(this)}>
					<View style={styles.buttonsView}>
                        <Text style={styles.buttons}>Save</Text>
                    </View>
				</TouchableHighlight>
			</View>
		);
	}

	_save() {
		Actions.healthIndicatorHistory();
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

	childViews: {
		padding: 15,
		marginBottom: 15 
	},

	text: {
		fontSize: 18,
		paddingTop: 11
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

    inline: {
    	flexDirection: 'row'
    },

    picker: {
    	width: 60
    },

    switch: {
    	marginTop: 10
    }

});