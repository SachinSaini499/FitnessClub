import React, { Component } from 'react'
import { Text, View,Image,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import GridView from 'react-native-super-grid';
var styles = StyleSheet.create({
	item: {
		flex: 1,
		alignSelf: "stretch",
		padding: 16
	},
	content: {
		flex: 1,
		backgroundColor: "red",
		alignItems: "center",
		justifyContent: "center"
	},
	text: {
		color: "white",
		fontSize: 32
	}
});

var NUMBERS = [
  
	require('../assets/images/1.png'),
	require('../assets/images/2.png'),
	require('../assets/images/3.png'),
	require('../assets/images/4.png'),
	require('../assets/images/5.png'),
  require('../assets/images/6.png'),
  require('../assets/images/7.png'),
  require('../assets/images/8.png'),
];

export default class Workout extends Component {
  render() {
    const {navigate} = this.props.navigation;
    function renderItem(item) {
      return (
        <View style={styles.item}>
          <View style={styles.content}>
            <Image source={require(item)} />            
          </View>
        </View>
      );
    }
    return (
    <View >
     <GridView rows={2} columns={4} itemWidth={130} items={NUMBERS} renderItem={renderItem}/>
    </View>
    )
  }
}
