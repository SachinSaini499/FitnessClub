import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, Button, SectionList, Alert} from 'react-native'

import styles from '../assets/styles.js';

export default class PreMeal extends Component {
  GetSectionListItem=(item)=>{
    Alert.alert(item)
}
  
  render() {
    return (
      <View style={styles.container2}>
      <SectionList
       sections={[
         { title: 'Sunday', data: ['1.Egg', '2.Bread', '3.Sprouts','4.Banana'] },
         { title: 'Monday', data: ['1.Egg', '2.Bread', '3.Sprouts','4.Banana'] },
         { title: 'Tuesday',data: ['1.Egg', '2.Bread', '3.Sprouts','4.Banana'] },
         { title: 'Wednesday',data: ['1.Egg', '2.Bread', '3.Sprouts','4.Banana'] },
         { title: 'Thursday', data: ['1.Egg', '2.Bread', '3.Sprouts','4.Banana'] },
         { title: 'Friday',data: ['1.Egg', '2.Bread', '3.Sprouts','4.Banana'] },
         { title: 'Saturday',data: ['1.Egg', '2.Bread', '3.Sprouts','4.Banana'] },
       ]}
       renderSectionHeader={ ({section}) => <Text  style={styles.SectionHeader}> { section.title } </Text> }
       renderItem={ ({item}) => <Text style={styles.SectionListItemS} 
       onPress={this.GetSectionListItem.bind(this, item)}> { item } </Text> }
       keyExtractor={ (item, index) => index }
     />
      </View>
    );
  }
}
