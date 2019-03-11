import React, { Component } from 'react';
import { StyleSheet, View, Text,Image,TouchableOpacity ,StatusBar} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

export default class Male extends Component {

  constructor(props){
    super(props);
    this._onPressButton = this._onPressButton.bind(this);
  }
  _onPressButton(txt) {
    console.debug("texttext"+txt);
    this.props.navigation.navigate('MaleWorkout_Bi');
  }
 
  render() {
    const items = [
      { name: 'PRE-WORKOUT MEAL', code: '#1abc9c',workoutimage: require('../assets/images/1.png') },
      { name: 'WORKOUT', code: '#3498db',workoutimage: require('../assets/images/2.png') }, 
      { name: 'POST WORKOUT MEAL', code: '#34495e',workoutimage: require('../assets/images/3.png') },
      { name: 'SETTINGS', code: '#27ae60',workoutimage: require('../assets/images/4.png') }, 
    ];
    const {navigate} = this.props.navigation;
    return (
      <FlatGrid
        itemDimension={130}
        items={items}
        style={styles.gridView}       
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>  
          <StatusBar backgroundColor='#EC7807'></StatusBar>
           <TouchableOpacity  onPress={() => this._onPressButton(item.name)}>
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
    padding: 20,
    height: 270,
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
    height: 180,
    width:125,
    padding:5,
  },
});
