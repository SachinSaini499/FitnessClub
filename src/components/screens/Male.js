import React, { Component } from 'react'
import { Text, View,Image ,StatusBar} from 'react-native'

export default class Male extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', height: 100, padding: 20,}}>
        <StatusBar backgroundColor='#EC7807'></StatusBar>
      <View style={{backgroundColor: 'blue', flex: 0.3}} />
      <View style={{backgroundColor: 'red', flex: 0.5}} />      
    </View>
    )
  }
}
