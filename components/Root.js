import React, { Component } from 'react';
import {
    View, 
    Text, 
    Navigator,
    StyleSheet
} from 'react-native'; 
import Login from './Login';
import TreatmentPlans from './TreatmentPlans';
import HealthIndicator from './AddHealthIndicator';
import HealthIndicatorHistory from './HealthIndicatorHistory';
import OneTreatmentPlan from './OneTreatmentPlan';
import ProfileEdit from './ProfileEdit';
import ProfileView from './ProfileView';
import { Scene, Router, Actions} from 'react-native-router-flux';
import Colors from '../utils/colors.js';

export default class Root extends Component {


	render() {
	    return (
	    	<Router >
				<Scene key="root">
					<Scene key="login" component={Login} title="Login" 
					 titleStyle= {{color: 'white'}} 
					 navigationBarStyle={{ backgroundColor: Colors.green, borderBottomColor: 'transparent', borderBottomWidth: 65 }}/>

					<Scene key="treatmentPlans" component={TreatmentPlans} title="Treatment Plans"
					 titleStyle= {{color: 'white'}} 
					 navigationBarStyle={{ backgroundColor: Colors.green, borderBottomColor: 'transparent', borderBottomWidth: 65 }}
					 rightTitle="Indicators" onRight={ () => { Actions.healthIndicators() }} rightButtonTextStyle={{color: 'white'}}
					 leftTitle="Profile" onLeft={ () => { Actions.profileView() }} leftButtonTextStyle={{color: 'white'}}
					 />

					<Scene key="healthIndicators" component={HealthIndicator} title="Health Indicators" 
					 titleStyle= {{color: 'white'}} 
					 navigationBarStyle={{ backgroundColor: Colors.green, borderBottomColor: 'transparent', borderBottomWidth: 65 }}
					 backButtonTextStyle={{ color: 'white'}} />

					<Scene key="healthIndicatorHistory" component={HealthIndicatorHistory} title="Indicators History" 
					 titleStyle= {{color: 'white'}} 
					 navigationBarStyle={{ backgroundColor: Colors.green, borderBottomColor: 'transparent', borderBottomWidth: 65 }}
					 backButtonTextStyle={{ color: 'white'}}
					/>

					 <Scene key="profileView" component={ProfileView} title="Your Profile" 
					 titleStyle= {{color: 'white'}} 
					 navigationBarStyle={{ backgroundColor: Colors.green, borderBottomColor: 'transparent', borderBottomWidth: 65 }}
					 backButtonTextStyle={{ color: 'white'}}
					 />

					<Scene key="profileEdit" component={ProfileEdit} title="Edit Profile" 
					 titleStyle= {{color: 'white'}} 
					 navigationBarStyle={{ backgroundColor: Colors.green, borderBottomColor: 'transparent', borderBottomWidth: 65 }}
					 backButtonTextStyle={{ color: 'white'}} 
					 initial={true}/>

				</Scene>
			</Router>

	    );
  	}		
}

