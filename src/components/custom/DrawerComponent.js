import React, { Component } from 'react'
import { Text, View,Image,TouchableOpacity } from 'react-native'
import styles from '../assets/styles';
import CustomModal from '../custom/ModalComponent'
import 
{ 
  DrawerItems,  
} from 'react-navigation'

export default class DrawerComponent extends Component {  
    
    constructor(props) {
        super(props);    
      
      }
  render() {
       return (      
         <View >
              <View style={styles.CircleShapeView}>  
              {/* <CustomModal modalVisible={false}></CustomModal> */}
                  <Image source={require('../assets/images/logo2.png')} style={styles.CircleShapeImage}/>
                  <TouchableOpacity  style={{width:'15%',height:'15%',bottom:'30%',right:'28%',position:'absolute'}}> 
                  <Image source={require('../assets/images/flat-camera-icon.png')} style={styles.CircleShapeCamra}/>
                  </TouchableOpacity>
                  <Text style={{ color: '#EC7807', fontSize: 15, bottom:'13%', position: 'absolute'}}>Sachin Saini</Text>
                  <Text style={{ color: '#EC7807', fontSize: 15, bottom:'1%', position: 'absolute'}}>09716955428</Text>
              </View>
              <DrawerItems {...props} />
            </View>
       
    )
  }
}
