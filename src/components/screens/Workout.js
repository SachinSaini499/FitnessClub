import React, { Component } from 'react'
import { Text, View ,StatusBar} from 'react-native'

export default class Workout extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor='#ff4500'></StatusBar>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
