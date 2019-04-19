import React, { Component } from 'react';
//import rect in our project
import {Dimensions,  StyleSheet,TextInput,  View, TouchableHighlight, FlatList, ActivityIndicator, Image,Text,TouchableOpacity,ImageBackground,Icon} from 'react-native';
import {getScreen} from '../screens/Methods';
import filledheart from '../assets/images/heart.png';
import frameHeart from '../assets/images/logo.png';
import ActionButton from 'react-native-action-button';
import CustomModal from '../custom/ModalComponent';
import Modal from "react-native-modal";
import styles from '../assets/styles.js'
import Icon2 from 'react-native-vector-icons/FontAwesome';
import CustomModelComponent from '../custom/ModalComponent'
//import all the components we will need
 
export default class MaleWorkoutComponent extends Component {

static imageUrl=null;
_toggleModal2= ()=> this.setState({ ModalVisible: true })

_toggleHeart = () =>
this.setState({   
  isHeartVisible: !this.state.isHeartVisible

});

    // static     navigationOptions=({navigation})=>{
    //   return {  
    //    //header: null,
    //     style: {
    //       backgroundColor: 'black',
    //     }, 
    //     headerTitle:"",
    //     headerStyle: {
    //     backgroundColor: '#1DCA88',
    //   },
    //   headerTitleStyle: {
    //     color: '#FFFFFF'
    //   },
    //     headerLeft: <Icon style={{paddingLeft: 10,color:'white' }} name="md-arrow-round-back" size ={30} 
    //     />
    //   }
    // }
  constructor(props) {
    super(props);
    this.state = {
        title: "",
        toggle:true,
        modalflag:false,
        ModalVisible: false,
        isHeartVisible:true,
        isActionButtonvisible:true,
    };
  }
  componentWillReceiveProps(prevprops,nextprops) {
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
showModel()
{
  if(this.state.modalflag)
  {
    alert("true")
    this.setState({modalflag:false})
  }
  else
  {alert("false")
    this.setState({modalflag:true})
  }
}

  Image2(txt)
  {    
    if(this.state.toggle)
    {
      //imgSource=require('../assets/images/heart.png');
      alert("text1");
      this.state = {toggle:false};
      imageUrl =  require('../assets/images/heart.png');
    }
    else
    {
     // imgSource=require('../assets/images/logo.png');
     alert("text2");
      this.state = {toggle:true};
      imageUrl = require('../assets/images/logo.png');
    }    
   return imageUrl;
    // return (
    //   <Image  style={styles.itemNameHeart }
    //     source={ imgSource }
    //   />
    // );
  }
  render() { 
   
    var imageUrl2 =require('../assets/images/heart.png');
    if (this.state.toggle) 
    {
      image = (<Image  style={style.itemNameHeart} source={ require('../assets/images/heart.png')} />);
    }else
    {
      image = (<Image  style={style.itemNameHeart} source={ require('../assets/images/logo.png')} />);
    }
    const {navigate} = this.props.navigation;
    return (      
      <View style={style.MainContainer}>      
        <FlatList
          data={this.props.data}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 5, justifyContent: 'flex-end',
            borderRadius: 20,
            padding: 5,
            paddingLeft:10,
            paddingRight:10,
            height: 200, backgroundColor: '#1DCA88'  }}>
             <TouchableOpacity  onPress={() => alert("Test")}>
             <ImageBackground source={item.workoutimage} style={style.imageThumbnail}>           
            <Text style={style.itemNameTop}>{item.strength}</Text>
            {/* <TouchableOpacity style={style.itemNameHeartOpacity} onPress={()=> imageUrl2=this.Image2("test")}>           
             <Image  style={style.itemNameHeart} source={imageUrl2} />
            </TouchableOpacity> */}
            <TouchableOpacity style={style.itemNameHeartOpacity}  onPress={this._toggleHeart}>   
             {
                this.state.isHeartVisible==true?             
               <Image style={style.itemNameHeart} isVisible={this.state.isHeartVisible}  source={require('../assets/images/filled_heart.png')}/>                           
               :                
               <Image style={style.itemNameHeart} source={require('../assets/images/frameheart.png')}/> 
              }
              </TouchableOpacity>
            {/* <Image style={styles.itemNameHeart} source={require('../assets/images/heart.png')} />*/}
            <Text style={style.itemNameBottom}>{item.Excercisename}</Text>
            </ImageBackground>
            </TouchableOpacity>           
            </View>            
          )}
          //Setting the number of column
          
          keyExtractor={(item, index) => index}/>
          <CustomModelComponent navigation = {this.props.navigation} isValid={true} Visible={this.state.ModalVisible}></CustomModelComponent>
        <ActionButton active={false}  buttonColor="rgba(32,201,134,1)" offsetX={5} offsetY={5} position="right" onPress={this._toggleModal2}/>       
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
    color:'#14284B',
    fontSize: 16,   
    fontWeight: 'bold',
    color: 'black',
    position: 'absolute', // child
   top: 0, // position where you want
   right: '3%',
  }, 
  itemNameHeartOpacity: {
    height: "27%",
    width:'14%',
    position: 'absolute', // child
    top: '12%',
    right: '3%',
  } ,
  itemNameCloseOpacity: {
    height: 100,
    width:200,
    position: 'absolute', // child    
    top: '-2%',
    right: '2%',
  } ,
  itemNameHeart: {
    height:'76%',
    width:'80%',
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
    color:'#14284B',
    fontSize: 16,   
    fontWeight: 'bold',
    color: 'black',
    position: 'absolute', // child
   bottom: 0, // position where you want
   left: 0
  },
  imageThumbnail: {
    height: 180,
    width:'100%',
    position: 'relative', // because it's parent
    top: -5,
    left: 0,
    right:2
    ,bottom:2
  },
});
