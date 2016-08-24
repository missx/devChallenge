import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Modal
} from 'react-native';
import Colors from '../utils/colors.js'

export default class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '', 
            errorText: '',
            modalVisible: false
        };
        
        console.log(this.state);
    }
    render() {
      
        var modalBackgroundStyle = {
            backgroundColor: '#f5fcff',
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center'
        };
        
        return (
            <View style={styles.container}>        
                <View style={styles.titleView}>
                    <Text style={styles.title}>
                        Login
                    </Text>
                </View>
                <View style={styles.subContainer}>
                    <TextInput
                        style={styles.textInputs}
                        placeholder="Username"
                        value={this.state.username}
                    />
                    <TextInput
                        style={styles.textInputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        value={this.state.password}
                    />
                    <TouchableHighlight style={styles.logingBtn} onPress={this._login.bind(this)}>
                        <View style={styles.buttonsView}>
                            <Text style={styles.buttons}>Login</Text>
                        </View>
                    </TouchableHighlight>
                    <Text style={styles.accountCreate}>
                        Or create an account
                    </Text>
                    <Modal 
                        animationType={"slide"}
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                                this.setState({modalVisible: false})}}>
                        <View style={[styles.container, modalBackgroundStyle]}>
                            <View >
                                <Text style={styles.errorText} >{this.state.errorText}</Text>
                                <TouchableHighlight onPress={() => {
                                    this.setState({modalVisible: false})
                                }} style={styles.logingBtn} >
                                    <View style={styles.buttonsView}>
                                        <Text style={styles.buttons}>Hide Modal</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        );
    }
    
    _login() {
        console.log(this.state);
        var user = this.state.username;
        var pwd = this.state.password;
        if (user.length > 0 && pwd.length > 0) {
            //getUser(user, pwd);
            alert('dododo');
        } else {
            this.setState({
                errorText: 'Please insert \nusername and password',
                modalVisible: true
            });
        }
        
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between'
    },
    titleView: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.black,
        backgroundColor: '#f5f5f5'
    },
    subContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textAlign: 'left',
        fontSize: 30,
        fontWeight: 'bold'
    },
    textInputs: {
        width: 300,
        height: 50, 
        fontSize: 17
    },
    logingBtn : {
        backgroundColor: Colors.skyBlue, 
        width: 300,
        height: 50, 
        marginTop: 20
    },
    buttons : {
        color: Colors.white, 
        fontSize: 25, 
        textAlign: 'center'
    }, 
    buttonsView : {
        paddingTop: 5,
        paddingBottom: 5
    },
    accountCreate: {
        color: '#11C1F3',
        marginTop: 10,
        fontSize: 20
    },
    errorText: {
        color: 'red',
        fontSize: 20,
        textAlign: "center"
    }
});

