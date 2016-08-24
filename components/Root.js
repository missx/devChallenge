import React, { Component } from 'react';
import {
    View, 
    Text, 
    Navigator
} from 'react-native'; 
//import NavigationBar from './NavigationBar';
import Login from './Login';
import TreatmentPlans from './CreateAccount';

export default class Root extends Component {

	/*renderScene(route, navigator) {
	    if (route.id === 'MAIN') {
	      return <Login />;
	    }
	    return <View></View>;
	    //return <Artist url={ route.url } />;
	}*/

	render() {
	    return (
	    	
	    	/*<View>
	    		<Navigator style={{ flex: 1 }}
					initialRoute={{ id: 'MAIN', title: 'Login' }}
					renderScene={ this.renderScene.bind(this) }
					navigationBar={ NavigationBar }
				/>
	    		<Text>hello</Text>
	    	</View>*/
	    	<View>
	    		<TreatmentPlans />
	    	</View>

	    );
  	}		
}