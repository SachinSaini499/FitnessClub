// import React, { Component } from 'react';
// import { StyleSheet, View, Text,Image,TouchableOpacity ,StatusBar,ImageBackground} from 'react-native';
// import { FlatGrid } from 'react-native-super-grid';
// import {getScreen} from './Methods'



// // import {signup} from './FirebaseService'
// export default class setting extends Component {

//   constructor(props){
//     super(props);
//     this._onPressButton = this._onPressButton.bind(this);
//   }
//   _onPressButton(txt) {
   
//     var ScreenName=getScreen(txt);  
//     console.log(txt);  
//     // signup("lokesh.gupta@rsystems.com","Admin@123");
//     this.props.navigation.navigate(ScreenName);
   
//   }

//   render() {
//     const items = [
//       { name: 'PRE MEAL', code: '#1abc9c',workoutimage: require('../assets/images/premeal.png') },
//       { name: 'WORKOUT', code: '#3498db',workoutimage: require('../assets/images/workout.png') }, 
//       { name: 'POST MEAL', code: '#34495e',workoutimage: require('../assets/images/postmeal.png') },
//       { name: 'SETTINGS', code: '#27ae60',workoutimage: require('../assets/images/setting.png') }, 
//       { name: 'SETTINGS', code: '#27ae60',workoutimage: require('../assets/images/setting.png') }, 
//       { name: 'SETTINGS', code: '#27ae60',workoutimage: require('../assets/images/setting.png') }, 
//     ];
//     const {navigate} = this.props.navigation;
//     return (
//       <FlatGrid       
//         items={items}
//         style={styles.gridView}       
//         renderItem={({ item, index }) => (
//           <View style={[styles.itemContainer, { backgroundColor: '#2ED085' }]}>  
//           <StatusBar backgroundColor='#2ED085'></StatusBar>         
//            <TouchableOpacity  onPress={() => this._onPressButton(item.name)}>         
              
//             <Text style={styles.itemName}>{item.name}</Text>            
              
//             </TouchableOpacity >            
//           </View>
//         )}
//       />
//     );
//   }
// }
// const styles = StyleSheet.create({
//   gridView: {
//     marginTop: 2,
    
//     flex: 1,
//   },
//   innerContainer: {    
//     top: 0, left: 0, 
//     right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'center'
//   },
//   itemContainer: {    
//     justifyContent: 'flex-end',
//     borderRadius: 2,
//     padding: 2,
//     height: 180,
//   },
//   itemName: {
//     fontSize: 16,
//     color: 'black',
//     fontWeight: '600',
//   },
//   itemCode: {
//     fontWeight: '600',
//     fontSize: 12,
//     color: '#fff',
//   },
//   imageThumbnail: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 150,   
//     width:'100%',
//   },
// });

import React from "react";
import { FlatList } from "react-native";
import { Text, ListItem, Left, Body, Icon, Right, Title, View } from "native-base";
import Icon2 from 'react-native-vector-icons/FontAwesome';
export default class setting extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: "General", header: true },
        { name: "Language Setting", header: false },
        { name: "Unit of Measure", header: false },
        { name: "Reminders", header: false },
        { name: "Notification", header: true },
        { name: "Health Tips", header: false },
        { name: "About", header: true },
        { name: "Feedback", header: false },
        { name: "Rate Fitness Club", header: false },
        { name: "Privacy Policy", header: false },
        { name: "Share this App", header: false },
        { name: "Version", header: false },
 
      ],
      stickyHeaderIndices: []
    };
  }
  componentWillMount() {
    var arr = [];
    this.state.data.map(obj => {
      if (obj.header) {
        arr.push(this.state.data.indexOf(obj));
      }
    });
    arr.push(0);
    this.setState({
      stickyHeaderIndices: arr
    });
  }
  renderItem = ({ item }) => {
    if (item.header) {
      return (
        <ListItem itemDivider style={{backgroundColor:'#2ED085',alignContent:"center",justifyContent:"center",alignItems:'center' }}>
        
          <Body style={{jalignContent:"center",justifyContent:"center",alignItems:'center'}}>
            <Text style={{ fontWeight: "bold" ,color:"#14284B"}}>
              {item.name}
            </Text>
          </Body>
         
        </ListItem>
      );
    } else if (!item.header) {
      return (
        <ListItem style={{ marginLeft: 0 }}>
          <Body>
            <View style={{flexDirection:'row'}}>
            <Text style={{alignSelf:'flex-start'}}>{item.name}</Text>           
            {/* <Icon2 name="refresh" color="black"  />*/}           
            </View>
          </Body>
        </ListItem>
      );
    }
  };
  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.name}
        stickyHeaderIndices={this.state.stickyHeaderIndices}
      />
    );
  }
}

