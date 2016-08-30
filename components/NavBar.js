import React, {Component} from 'react';
import {
    StyleSheet,
    Navigator,
    Text,
    TouchableOpacity,
    View
    } from 'react-native';
import NavigationBar from 'react-native-navbar';
import MiddleButtonNavbar from './MiddleButtonNavbar';
import Colors from '../utils/colors.js';

export default class NavBar extends Component {

    /*render() {
        const routes = [
            {title: 'First Scene', index: 0},
            {title: 'Second Scene', index: 1},
        ];

        return (
            <Navigator
                initialRoute={routes[0]}
                initialRouteStack={routes}
                renderScene={(route, navigator) =>
                    <TouchableHighlight onPress={() => {
                        if (route.index === 0) {
                            navigator.push(routes[1]);
                        } else {
                            navigator.pop();
                        }
                    }}>
                        <Text>Hello {route.title}!</Text>
                    </TouchableHighlight>
                }
                style={{padding: 100}}
                navigationBar={
                    <Navigator.NavigationBar
                    routeMapper={{
                        LeftButton: (route, navigator, index, navState) =>
                            { return (<Text>Home</Text>); },
                        RightButton: (route, navigator, index, navState) =>
                            { return (<Text>Indicators</Text>); },
                        Title: (route, navigator, index, navState) =>
                            { return (<Text>Profile</Text>); },
                        }}
                    style={{backgroundColor: 'gray'}}
                    />
                }
            />
        );
    }*/
    render() {
        const rightButtonConfig = {
            title: 'Indicators',
            handler: () => alert('hello!'),
            tintColor: Colors.white
        };

        const titleConfig = {
            title: 'Profile',
            tintColor: Colors.white
        };

        const leftButtonConfig = {
            title: 'Home',
            tintColor: Colors.white
        }

        return (
            <View style={styles.view}>
                <NavigationBar
                    style={styles.navbar}
                    title={<MiddleButtonNavbar
                            onPress={() => alert('Charmandeeeer!')}/>}
                    rightButton={rightButtonConfig}
                    leftButton={leftButtonConfig}
                    tintColor={Colors.green} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    navbar: {
        height: 70
    }
});
