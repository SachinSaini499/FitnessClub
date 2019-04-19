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
    this.props.navigation.navigate('MaleWorkoutDetailsStack');
  } 
  render() {
    const items = [
      { name: 'CHEST', code: '#1DCA88',workoutimage: require('../assets/images/workout/chest.png') },
      { name: 'BICEPS', code: '#1DCA88',workoutimage: require('../assets/images/workout/biceps.png') }, 
      { name: 'TRICEPS', code: '#1DCA88',workoutimage: require('../assets/images/workout/tricep.png') },
      { name: 'SHOULDER', code: '#1DCA88',workoutimage: require('../assets/images/workout/shoulder.png') }, 
      { name: 'LEGS', code: '#1DCA88',workoutimage: require('../assets/images/workout/legs.png') },
      { name: 'BACK', code: '#1DCA88',workoutimage: require('../assets/images/workout/back.png') }, 
      { name: 'ABS', code: '#1DCA88',workoutimage: require('../assets/images/workout/abs.png') }, 
      { name: 'FOREARM', code: '#1DCA88',workoutimage: require('../assets/images/workout/forearm.png') },
      { name: 'CARDIO', code: '#1DCA88',workoutimage: require('../assets/images/workout/cardio.png') }, 
      { name: 'CALF', code: '#1DCA88',workoutimage: require('../assets/images/workout/cardio.png') }, 
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
          <StatusBar backgroundColor='#2ED085'></StatusBar>
          <TouchableOpacity  onPress={() => this._onPressButton(item.name)}>
           <Image style={styles.imageThumbnail} source={item.workoutimage}   />
           <Text style={[styles.itemName,{ color:'#14284B'}]}>{item.name}</Text>
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