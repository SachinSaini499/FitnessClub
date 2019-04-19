import React, { Component } from 'react';
import { Text, View,TextInput ,Button,Image,TouchableHighlight,StatusBar} from 'react-native';
import styles from '../assets/styles.js'
import image from '../assets/images/logo.png'
import {checkLoginCredentials} from '../screens/Methods';
import { ScrollView } from 'react-native-gesture-handler';

export default class Login extends Component {

  constructor(props){
    super(props)
    this.state = ({       
        email:"",
        password:"",
        outputMessage:"",      
    });
  //  this.showModal=this.showModal.bind();
}

_onPressButton() {
  var msg=checkLoginCredentials(this.state.email,this.state.password);  
  if(msg=="success")
  {
    this.props.navigation.navigate('Home');}
  else
  {
    this.setState({outputMessage:msg}); 
  }
  //alert(msg);
}

  render() {
    const {navigate} = this.props.navigation;
    return (
     // <ScrollView >
      <View style={styles.container}>     
      <StatusBar backgroundColor='#FFFFFF'></StatusBar>
     <Image source={require('../assets/images/logo.jpg')} style={{width: 150,height: 150}}/>
     <Text style={styles.outputMessage}>{this.state.outputMessage}</Text>   
        <Text style={styles.welcome}>Welcome in Fitness Club!</Text>                  
        <TextInput placeholderTextColor="#14284B" autoCorrect={false} 
                   keyboardType='email-address' 
                   autoCapitalize="none" 
                   onSubmitEditing={() => this.passwordInput.focus()} 
                   returnKeyType="next" 
                   onChangeText={(email) => this.setState({email})} 
                   placeholder="Email" 
                   style={styles.textInput}  />
        <TextInput placeholderTextColor="#14284B" 
                   returnKeyType="done" 
                   ref={(input)=> this.passwordInput = input}                  
                   onChangeText={(password) => this.setState({password})} 
                   placeholder="Password" 
                   secureTextEntry={true} 
                   style={styles.textInput} />
        <TouchableHighlight style={styles.button}  onPress={()=>this._onPressButton()}>
          <Text style={styles.text}>Login</Text>
        </TouchableHighlight>             
      </View>
      //</ScrollView>
    );
  }
}