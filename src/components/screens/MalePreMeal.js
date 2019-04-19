import React, { Component } from 'react';
import { TextInput,StatusBar,StyleSheet, TouchableHighlight,Text, View, TouchableOpacity,Image,Dimensions,ScrollView ,Alert} from 'react-native';
import SimpleAccordion from 'react-native-simple-accordian';
import PreWorkoutMaleModelScreen from './PreWorkoutMaleModel.js';
const deviceWidth = Dimensions.get('window').width
const accordianData = '* Banana and Bread' ;
import * as _ from 'lodash';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalComponent from './PreWorkoutMaleModel';
import styles from '../assets/styles.js';
import Modal from "react-native-modal";

var mealList = [
  { food: 'Banana',},
  { food: 'Bread',},
  { food: 'Juice', }
];

const DrawerContent = (props) => (
  <View>
    <View
      style={{       
        backgroundColor: '#2ED085',            
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* <Text style={{ color: 'white', fontSize: 30 }}>
        Header
      </Text> */}
      <Text>Helloooooo</Text>
      <TouchableHighlight style={styles.button}>
          <Text>Login</Text>
        </TouchableHighlight> 
    </View>    
  </View>
)


var sampleAccordianData = [
  {
    title: 'Sunday',
    Component:DrawerContent, 
    content: accordianData  
  },
  {
    title: 'Monday',
    Component:DrawerContent,
    content: accordianData
  },
  {
    title: 'Tuesday',
    Component:DrawerContent,
    content: accordianData
  },
  {
    title: 'Wednesday',
    Component:DrawerContent,
    content: accordianData
  },
  {
    title: 'Thrusday',
    Component:DrawerContent,
    content: accordianData
  },
  {
    title: 'Friday',
    Component:DrawerContent,
    content: accordianData
  },  
  {
    title: 'Saturday',
    Component:DrawerContent,
    content: accordianData
  },  
];

export default class MalePreMeal extends Component {
  openPreMealPopup(txt){
      this.setState({isModalVisible: !this.state.isModalVisible });
      //alert("title : " + txt)
      //if(txt!="")
      {
      this.setState({mealTitle:txt});}
      //alert("from state"+this.state.mealTitle);
      }
      closePreMealPopup()
      {
        this.setState({isModalVisible: !this.state.isModalVisible });       
        this.setState({mealTitle:""});
        //alert(this.state.mealTitle);
      }
      addMeal()
      { 
        let mealTitleTemp=this.state.mealTitle; 
        let preMealTemp=this.state.preMeal;
        let preMealDescription=this.state.mealDescription;
        //alert("mealTitleTemp"+mealTitleTemp)  
         var sampleAccordianDataTemp = sampleAccordianData.map(function (element) 
         {           
           if(element.title==mealTitleTemp)
          {  
            element.content=element.content+"\n"+"* "+preMealTemp+"\n\t"+preMealDescription;
          } 
          return element;
         });
          sampleAccordianData = Array.from(sampleAccordianDataTemp);
          this.setState({isModalVisible: !this.state.isModalVisible });
          sampleAccordianData.forEach(element => {
           // alert(element.content)
          });
         //sampleAccordianData=oneBetterThanNums;
      }
    constructor(props){
        super(props)
        this.state = ({
            content:'',
            open: false,
            preMeal:"",
            mealTitle:"",
            mealDescription:"",
            isModalVisible:false,
            ModalFlatList:null,
            ModalType:'',
        });
      //  this.showModal=this.showModal.bind();
    }
  onChangeAccordian(section) {
    this.setState({ open: section });  
  } 
  renderHeader(section, i, isOpen) {
    return (      
      <View style={{backgroundColor:'#ffffff',flexDirection:'row',}}>
        <Text style={[style.headerText,{width:deviceWidth-80,color:'#14284B',padding:10,textAlign:'center'}]}>{section.title}</Text>     
      </View>
    );
  }
  renderContent(section, i, isOpen) {
    return (
      <View style={style.content}> 
          <Text style={{color:'#14284B', justifyContent:'center', alignItems: 'center'}} >{section.content}</Text>     
        {/* <Icon style={{textAlign:'right',justifyContent: 'flex-end',}} name="md-add" size ={30}  onPress={()=>{ this.setState({ ModalVisible: true}); }}/> */}
        <Icon style={{color:'#14284B', textAlign:'right',alignItems:'flex-end',justifyContent: 'flex-end',}} name="md-add" size ={30} onPress={() => this.openPreMealPopup(section.title)} />    
      </View>
    );
  }

  render() {
    return (
      <View style={{flex: 1,}}>
      <StatusBar backgroundColor='#2ED085'></StatusBar>
        {/* <View style={styles.headerTextView}>
          <Text style={styles.headerText1}>Accordian</Text>
        </View> */}
        <View style={styles.container}>
          <ScrollView >    
            <SimpleAccordion  style= {{
                borderWidth:1,
                borderRadius:25,
                margin:10,
                padding:10,
                backgroundColor:'#ffffff' ,                
                         
              }}
              activeSection={this.state.open}
              sections={sampleAccordianData}
              touchableComponent={TouchableOpacity}
              renderHeader={this.renderHeader}
              renderContent={this.renderContent.bind(this)}
              duration={1000}
              onChange={this.onChangeAccordian.bind(this)}
              
            />
          </ScrollView>          
          <Modal isVisible={this.state.isModalVisible}  backdropColor="#FFFFFF" backdropOpacity={10} hasBackdrop={false}
            style={{ justifyContent:'center', alignItems: 'center'}}>        
          <View style={{paddingTop:20,paddingBottom:20, justifyContent:'center',alignItems: 'center', backgroundColor:"#ffffff", borderColor: '#2ED085',borderWidth: 1, borderRadius:10, position: 'relative'}}>
          {/* <TouchableHighlight style={style.itemNameCloseOpacity}  onPress={this._toggleModal}>                                       
               <Image style={style.itemNameCancel} source={require('../assets/images/close_delete-256.png')}/>            
          </TouchableHighlight>          */}
          <TextInput  onChangeText={(preMeal) => this.setState({preMeal})} placeholder="Enter pre workout meal" placeholderTextColor='#14284B' autoFocus={true} clearButtonMode='always' style={styles.textInput2}/>  
          <TextInput onChangeText={(mealDescription) => this.setState({mealDescription})} placeholder="Description" multiline={true}  placeholderTextColor='#14284B'  style={[styles.textInput2,{textAlignVertical:'top', height:100,}]}/>         
          <View style={{ flexDirection: 'row'}}>
          <TouchableHighlight style={styles.modelButton} onPress={()=>this.addMeal()}>
           <Text style={styles.text}>Add</Text>
          </TouchableHighlight>      
          <TouchableHighlight style={styles.modelButton} onPress={()=>this.closePreMealPopup()}>
           <Text style={styles.text}>Cancel</Text>
          </TouchableHighlight> 
          </View>
          </View>
         </Modal>
        </View>
      </View>
      
    );
  }
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor:'#ffffff'      
    },
    headerText1:{
      color:'white',
      textAlign:'center',
      fontSize:22     
    },
    headerTextView:{
      height:50,
      borderWidth:1,
      backgroundColor:'#2ED085',
      justifyContent:'center',
    },
    title: {
      textAlign: 'center',
      fontSize: 22,
      fontWeight: '300',
      marginBottom: 20,
      color:'#ffffff'
    },
    header:{
        flex:1
    },
    headerText: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '500',
      color:'#2ED085'
    },
    content: {
      padding: 0,
      backgroundColor: '#ffffff' ,
      color:'#2ED085' ,
   
    },
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
      top: '-5%',
      right: '0%',
    } ,
    itemNameHeart: {
      height:'100%',
      width:'100%',
      position: 'absolute', // child
      top: '0%',  
      right: '0%',
    },
    itemNameCancel: {
      height: 35,
      width:35,
      position: 'absolute', // child    
      top: '-10%',
      right: '-10%',
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
    