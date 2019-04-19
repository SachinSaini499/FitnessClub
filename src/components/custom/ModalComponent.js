import React, { Component } from 'react';
//import rect in our project
import {Dimensions,  StyleSheet,TextInput,  View, TouchableHighlight, FlatList, ActivityIndicator, Image,Text,TouchableOpacity,ImageBackground,Icon} from 'react-native';
import {getScreen} from '../screens/Methods';
import filledheart from '../assets/images/heart.png';
import frameHeart from '../assets/images/logo.png';
import ActionButton from 'react-native-action-button';
import Modal from "react-native-modal";
import styles from '../assets/styles.js'
import Icon2 from 'react-native-vector-icons/FontAwesome';

//import all the components we will need
 
export default class ModalComponent extends Component 
{
static imageUrl=null;

_toggleModal2= ()=> this.setState({ isModalVisible: false })
  componentWillReceiveProps(prevprops,nextprops) 
  {
   if(this.props.isValid)
   {
     //alert("componentWillReceiveProps")
this.setState({ 
      isModalVisible: this.props.Visible});
     // alert("componentWillReceiveProps"+this.state.isModalVisible);
    }
  }

  constructor(props) {
    super(props);
    this.state = {       
        toggle:true,
        modalflag:false,
        isModalVisible: this.props.Visible, 
    };    
  } 

  render() {
    const {navigate} = this.props.navigation;
    return ( 
      <View style={{flex:1}}>
          <Modal  isVisible={this.state.isModalVisible}  backdropColor="#FFFFFF" backdropOpacity={10} hasBackdrop={false}
            style={{ justifyContent:'center', alignItems: 'center'}}>        
          <View style={{margin:0, justifyContent:'center',alignItems: 'flex-start',backgroundColor:"#F5F5F5",borderColor: '#2ED085',borderWidth: 1, borderRadius:10, position: 'relative'}}>
          <TouchableHighlight style={style.itemNameCloseOpacity}  onPress={this._toggleModal2}>                                       
           <Image style={style.itemNameCancel} source={require('../assets/images/close_delete-256.png')}/>               
          </TouchableHighlight>  
          <TextInput placeholder="Exercise name" placeholderTextColor= '#14284B' style={styles.textInput2}/>
          <TextInput placeholder="Stregnth Level" placeholderTextColor= '#14284B' style={styles.textInput2}/>
          <View style={{ flexDirection: 'row',width:'30%',height:'15%',margin:6}}>
          <TextInput placeholder="Exercise Image" placeholderTextColor= '#14284B' style={[styles.textInput2,{width:'200%',height:'100%'}]}/>          
          <View  style={{width:'100%',height:'100%',padding:5}}>
          <TouchableHighlight style={[styles.modelButton,{width:'90%',height:'20%',}]} onPress={this._toggleModal2}>
           <Text style={[styles.text,{fontSize:12 ,color:'#14284B'}]}>Browse</Text>
          </TouchableHighlight>      
          <TouchableHighlight style={[styles.modelButton,{width:'90%',height:'20%'}]} onPress={this._toggleModal2}>
           <Text style={[styles.text,{fontSize:12, color:'#14284B'}]}>Capture</Text>
          </TouchableHighlight> 
          </View>
          </View>
          <View style={{ flexDirection: 'row',width:'30%',height:'15%',margin:6}}>
          <TextInput placeholder="Exercise Recording" style={[styles.textInput2,{width:'200%',height:'100%'}]}/>          
          <View  style={{width:'100%',height:'100%',padding:5}}>
          <TouchableHighlight style={[styles.modelButton,{width:'90%',height:'20%',}]} onPress={this._toggleModal2}>
           <Text style={[styles.text,{fontSize:12, color:'#14284B'}]}>Browse</Text>
          </TouchableHighlight>      
          <TouchableHighlight style={[styles.modelButton,{width:'90%',height:'20%'}]} onPress={() => {
           navigate('RecordingComponentScreenStack');
           this.setState({isModalVisible: false})}}>
           <Text style={[styles.text,{fontSize:12, color:'#14284B'}]}>Record</Text>
          </TouchableHighlight> 
          </View>
          </View>   
          <Text ></Text>
          <TouchableHighlight style={[styles.modelButton,{alignSelf:'center',width:'30%'}]} onPress={this._toggleModal2}>
           <Text style={[styles.text,{ color:'#14284B'}]}>ADD </Text>
          </TouchableHighlight>         
          </View>
         </Modal>  
         </View>     
    );
  }
}
 
const style = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',   
    flex: 1,
    paddingTop: 3,
  }, 
  itemNameTop: {
    fontSize: 16,   
    fontWeight: 'bold',
    color: 'black',
    position: 'absolute', // child
   top: 0, // position where you want
   right: '3%',
  }, 
  itemNameHeartOpacity: {
    height: 30,
    width:'10%',
    position: 'absolute', // child
    top: '12%',
    right: '5%',
  } ,
  itemNameCloseOpacity: {
    height: 100,
    width:200,
    position: 'absolute', // child    
    top: '-2%',
    right: '2%',
  } ,
  itemNameHeart: {
    height:'100%',
    width:'100%',
    position: 'absolute', // child
    top: '0%',  
    right: '0%',
  },
  itemNameCancel: {
    height: 50,
    width:50,
    position: 'absolute', // child    
    top: '-17%',
    right: '-15%',
  }
  ,
  itemNameBottom: {
    fontSize: 16,   
    fontWeight: 'bold',
    color: 'black',
    position: 'absolute', // child
   bottom: 0, // position where you want
   left: 0
  },
  imageThumbnail: {
    height: 200,
    width:'100%',
    position: 'relative', // because it's parent
    top: 2,
    left: 2,
    right:2
    ,bottom:2
  },
});
