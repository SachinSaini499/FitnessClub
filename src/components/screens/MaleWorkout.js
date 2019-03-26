import React, { Component } from 'react';
import { StyleSheet, View, Text,Image,TouchableOpacity ,StatusBar} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import MaleWorkoutDetailsScreen from '../screens/MaleWorkoutDetails';

export default class MaleWorkout extends Component {

  constructor(props){
    super(props);
    this._onPressButton = this._onPressButton.bind(this);
  }
  _onPressButton(txt) {
    this.props.navigation.navigate('');
  }
 
  render() {
    const items = [
      { name: 'CHEST', code: '#1abc9c',workoutimage: require('../assets/images/1.png') },
      { name: 'BICEPS', code: '#3498db',workoutimage: require('../assets/images/2.png') }, 
      { name: 'TRICEPS', code: '#34495e',workoutimage: require('../assets/images/3.png') },
      { name: 'SHOULDER', code: '#27ae60',workoutimage: require('../assets/images/4.png') }, 
      { name: 'LEGS', code: '#8e44ad',workoutimage: require('../assets/images/5.png') },
      { name: 'BACK', code: '#f1c40f',workoutimage: require('../assets/images/6.png') }, 
      { name: 'ABS', code: '#e74c3c',workoutimage: require('../assets/images/7.png') }, 
      { name: 'FOREARM', code: '#95a5a6',workoutimage: require('../assets/images/8.png') },
      { name: 'CARDIO', code: '#d35400',workoutimage: require('../assets/images/8.png') }, 
      { name: 'CALF', code: '#bdc3c7',workoutimage: require('../assets/images/8.png') }, 
    ];
    const {navigate} = this.props.navigation;
    return (
      <FlatGrid
        itemDimension={130}
        items={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>  
          <StatusBar backgroundColor='#EC7807'></StatusBar>
           <TouchableOpacity  onPress={() => this.props.navigation.navigate('MaleWorkout_Bi')}>
            <Image style={styles.imageThumbnail} source={item.workoutimage}   />
            <Text style={styles.itemName}>{item.name}</Text>
            </TouchableOpacity > 
          </View>
        )}
      />
    );
  }
}
const styles = StyleSheet.create({
  gridView: {
    marginTop: 2,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 110,
    width:125,
    padding:5,
  },
});