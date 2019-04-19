import React, { Component } from 'react';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {getScreen} from './Methods'

import {StyleSheet,View,FlatList,ActivityIndicator,Image, Text,TouchableOpacity,Icon} from 'react-native';
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
      { Excercisename: 'Bench Press',strength: 'Beginner', code: '#1abc9c',workoutimage: require('../assets/images/workout/Bench/bench.png') },
      { Excercisename: 'Close Grip Bench Press',strength: 'Intermediate', code: '#3498db',workoutimage: require('../assets/images/workout/Bench/closebench.png') }, 
      { Excercisename: 'Incline Press',strength: 'Beginner', code: '#34495e',workoutimage: require('../assets/images/workout/Bench/inclinepress.png') },
      { Excercisename: 'Push-Ups',strength: 'Beginner', code: '#27ae60',workoutimage: require('../assets/images/workout/Bench/pushups.png') }, 
    ];
    that.setState({
      dataSource: items,
    });
  }
  //  static     navigationOptions=({navigation})=>{
  //     return {  
  //      //header: null,
  //       style: {
  //         backgroundColor: 'black',
  //       }, 
  //       headerTitle:"",
  //       headerStyle: {
  //       backgroundColor: '#1DCA88',
  //     },
  //     headerTitleStyle: {
  //       color: '#FFFFFF'
  //     },
  //       headerLeft: <Icon style={{paddingLeft: 10,color:'white' }} name="md-arrow-round-back" size ={30} 
  //       />
  //     }
  //   }

  render() {
    
    const {navigate} = this.props.navigation;
    return (
     <MaleWorkoutDetailsComponent title="TextMe" navigation = {this.props.navigation} data={this.state.dataSource} ></MaleWorkoutDetailsComponent>
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