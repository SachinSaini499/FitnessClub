import React, { Component } from 'react';
import { Text, View,TextInput ,Button,Image,TouchableHighlight,StatusBar} from 'react-native';
import styles from '../assets/styles.js'
import image from '../assets/images/logo.png'




export default class Login extends Component {
  render() {

    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor='#FFFFFF'></StatusBar>
     <Image source={require('../assets/images/logo.png')} style={{width: 150,height: 150}}/>
        <Text style={styles.welcome}>Welcome in Fitness Club!</Text>       
        <TextInput placeholder="Email" style={styles.textInput}  />
        <TextInput placeholder="Password" secureTextEntry={true} style={styles.textInput} />
        <TouchableHighlight style={styles.button} onPress={()=>navigate('Home')}>
          <Text style={styles.text}>Login</Text>
        </TouchableHighlight>      
      </View>
    );
  }
}


