import React, { Component } from 'react';
import {
    View, 
    Text, 
    Navigator
} from 'react-native'; 
import Login from './Login';
import TreatmentPlans from './NavBar';

export default class Root extends Component {

	render() {
	    return (
	    	
	    	<View>
	    		<TreatmentPlans />
	    	</View>

	    );
  	}		
}