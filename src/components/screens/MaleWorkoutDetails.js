import React, { Component } from 'react';

import {getScreen} from './Methods'

import {StyleSheet,View,FlatList,ActivityIndicator,Image, Text,TouchableOpacity,} from 'react-native';
import MaleWorkoutDetailsComponent from '../custom/MaleWorkoutComponent'
//import all the components we will need
 
export default class MaleWorkoutDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: {},
    };
  }
  _onPressButton(txt) {
    var ScreenName=getScreen(txt);  
    console.log(txt);  
     this.props.navigation.navigate(ScreenName);   
  }
  componentDidMount() {
    var that = this;
    // let items = Array.apply(null, Array(60)).map((v, i) => {
    //   return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
    // });
    const items = [
      { name: 'PRE MEAL', code: '#1abc9c',workoutimage: require('../assets/images/premeal.png') },
      { name: 'WORKOUT', code: '#3498db',workoutimage: require('../assets/images/workout.png') }, 
      { name: 'POST MEAL', code: '#34495e',workoutimage: require('../assets/images/postmeal.png') },
      { name: 'SETTINGS', code: '#27ae60',workoutimage: require('../assets/images/setting.png') }, 
    ];
    that.setState({
      dataSource: items,
    });
  }
  render() {
    
    const {navigate} = this.props.navigation;
    return (
     <MaleWorkoutDetailsComponent title="TextMe" navigation={navigate} data={this.state.dataSource} ></MaleWorkoutDetailsComponent>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 3,
  }, itemName: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width:'100%'
  },
});