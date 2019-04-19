import React, { Component } from 'react'
import { Text, View ,StatusBar} from 'react-native'

export default class Workout extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor='#2ED085'></StatusBar>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
