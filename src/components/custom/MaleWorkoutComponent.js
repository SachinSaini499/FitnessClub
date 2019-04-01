import React, { Component } from 'react';
//import rect in our project
import {  StyleSheet,  View,  FlatList, ActivityIndicator, Image,Text,TouchableOpacity,} from 'react-native';
//import all the components we will need
 
export default class MaleWorkoutComponent extends Component {
    static   navigationOptions=({navigation})=>{
        return {  
         //header: null,
          style: {
            backgroundColor: 'black',
          }, 
          headerTitle:"Chest",
          headerStyle: {
          backgroundColor: '#EC7807',
        },
        headerTitleStyle: {
          color: '#FFFFFF'
        },
          headerLeft: <Icon style={{paddingLeft: 10 }} name="md-arrow-round-back" size ={30} 
          onPress={()=>this.props.navigation.navigate('MaleWorkoutStack')}/>
        }
      }
  constructor(props) {
    super(props);
    this.state = {
        title: "",
    };
  }
  componentWillReceiveProps(nextprops) {
     // alert(JSON.stringify(nextprops));
    // nextprops.navigation.setParams({ title:nextprops.title });
  }
  componentDidMount(){
    //this.props.navigation.setParams({ title:this.props.title });

      //this.setState({title:this.props.title})
   // alert(this.props.title);
  }
  _onPressButton(txt) {
    var ScreenName=getScreen(txt);  
    console.log(txt);  
    this.props.navigation.navigate(ScreenName);   
  }
//   componentDidMount() {
//     var that = this;
//     // let items = Array.apply(null, Array(60)).map((v, i) => {
//     //   return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
//     // });
//     const items = [
//       { name: 'PRE MEAL', code: '#1abc9c',workoutimage: require('../assets/images/premeal.png') },
//       { name: 'WORKOUT', code: '#3498db',workoutimage: require('../assets/images/workout.png') }, 
//       { name: 'POST MEAL', code: '#34495e',workoutimage: require('../assets/images/postmeal.png') },
//       { name: 'SETTINGS', code: '#27ae60',workoutimage: require('../assets/images/setting.png') }, 
//     ];
//     that.setState({
//       dataSource: items,
//     });
//   }
  render() {
    
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.props.data}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
             <TouchableOpacity  onPress={() => this._onPressButton(item.name)}>
            <Image style={styles.imageThumbnail} source={item.workoutimage}  />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemName}>{item.name}</Text>
            </TouchableOpacity>
            </View>
          )}
          //Setting the number of column
          numColumns={1}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 3,
  }, itemName: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width:'100%'
  },
});
