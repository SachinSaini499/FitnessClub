import React, { Component } from 'react';
//import rect in our project
import {  StyleSheet,  View,  FlatList, ActivityIndicator, Image,Text,TouchableOpacity,ImageBackground,Icon} from 'react-native';
import {getScreen} from '../screens/Methods'
import filledheart from '../assets/images/heart.png'
import frameHeart from '../assets/images/logo.png'
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
        toggle:true
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
  _onPressHeartButton(txt)
 {
    var ScreenName=getScreen(txt);  
    console.log(txt);  
    //this.props.navigation.navigate(ScreenName);   
  }
  renderImage()
  {
    var imgSource = this.state.toggle? filledheart : frameHeart;
    return (
      <Image
        style={ styles.itemNameHeart }
        source={ imgSource }
      />
    );
  }

  render() {
    
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.props.data}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
             <TouchableOpacity  onPress={() => this._onPressButton(item.Excercisename)}>
             <ImageBackground source={item.workoutimage} style={styles.imageThumbnail}>           
            <Text style={styles.itemNameTop}>{item.strength}</Text>
            <TouchableOpacity style={styles.itemNameHeartOpacity} onPress={()=>this.setState({ toggle: !this.state.toggle })}>
            {this.renderImage()}
              </TouchableOpacity>
            {/* <TouchableOpacity style={styles.itemNameHeartOpacity}  onPress={()=>this.setState({toggle:!this.state.toggle})}>   
             { this.state.toggle==true?
               <Image style={styles.itemNameHeart}  source={require('../assets/images/heart.png')}/>             
               :                
               <Image style={styles.itemNameHeart} source={require('../assets/images/logo.png')}/> 
              }
              </TouchableOpacity> */}
            {/* <Image style={styles.itemNameHeart} source={require('../assets/images/heart.png')} />*/}
            <Text style={styles.itemNameBottom}>{item.Excercisename}</Text>
            </ImageBackground>
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
  }, 
  itemNameTop: {
    fontSize: 16,   
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute', // child
   top: 0, // position where you want
   right: '3%',
  }, 
  itemNameHeartOpacity: {
    height: 25,
    width:'10%',
    position: 'absolute', // child
    top: '12%',
    right: '5%',
  } ,
  itemNameHeart: {
    height:'100%',
    width:'100%',
    position: 'absolute', // child
    top: '12%',  
    right: '5%',
  }
  ,
  itemNameBottom: {
    fontSize: 16,   
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute', // child
   bottom: 0, // position where you want
   left: 0
  },
  imageThumbnail: {
    height: 200,
    width:'100%',
    position: 'relative', // because it's parent
    top: 2,
    left: 2
  },
});
