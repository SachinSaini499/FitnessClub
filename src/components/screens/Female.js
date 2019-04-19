import React, { Component } from 'react';
import { StyleSheet, View, Text,Image,TouchableOpacity ,StatusBar,ImageBackground} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import {getScreen} from './Methods'



// import {signup} from './FirebaseService'
export default class Female extends Component {

  constructor(props){
    super(props);
    this._onPressButton = this._onPressButton.bind(this);
  }
  _onPressButton(txt) {
   
    var ScreenName=getScreen(txt);  
    console.log(txt);  
    // signup("lokesh.gupta@rsystems.com","Admin@123");
    this.props.navigation.navigate(ScreenName);
   
  }

  render() {
    const items = [
      { name: 'PRE MEAL', code: '#1abc9c',workoutimage: require('../assets/images/premeal.png') },
      { name: 'WORKOUT', code: '#3498db',workoutimage: require('../assets/images/workout.png') }, 
      { name: 'POST MEAL', code: '#34495e',workoutimage: require('../assets/images/postmeal.png') },
      { name: 'SETTINGS', code: '#27ae60',workoutimage: require('../assets/images/setting.png') }, 
    ];
    const {navigate} = this.props.navigation;
    return (
      <FlatGrid
        itemDimension={130}
        items={items}
        style={styles.gridView}       
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: '#2ED085' }]}>  
          <StatusBar backgroundColor='#2ED085'></StatusBar>         
           <TouchableOpacity  onPress={() => this._onPressButton(item.name)}>
           <ImageBackground source={item.workoutimage} style={{width: '100%', height: '100%'}}>
           <View style={styles.innerContainer}>
            {/* <Image style={styles.imageThumbnail} source={item.workoutimage}  /> */}
            <Text style={styles.itemName}>{item.name}</Text>
            
            </View>
            </ImageBackground>
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
  innerContainer: {    
    top: 0, left: 0, 
    right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'center'
  },
  itemContainer: {    
    justifyContent: 'flex-end',
    borderRadius: 2,
    padding: 2,
    height: 180,
  },
  itemName: {
    fontSize: 16,
    color: 'black',
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
    height: 150,   
    width:'100%',
  },
});
