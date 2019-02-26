import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image,Dimensions,ScrollView } from 'react-native';
import SimpleAccordion from 'react-native-simple-accordian';
const deviceWidth = Dimensions.get('window').width
const accordianData = 'This is sample Accordian Text....';
import * as _ from 'lodash'
import { Button } from 'react-native-paper';



const DrawerContent = (props) => (
  <View>
    <View
      style={{       
        backgroundColor: '#EC7807',            
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* <Text style={{ color: 'white', fontSize: 30 }}>
        Header
      </Text> */}
      <Text>Helloooooo</Text>
      <TouchableHighlight style={styles.button} onPress={()=>navigate('Home')}>
          <Text>Login</Text>
        </TouchableHighlight> 
    </View>
    <DrawerItems {...props} />
  </View>
)




const sampleAccordianData = [
  {
    title: 'Sunday',
    Component:'',
    content: accordianData
  },
  {
    title: 'Monday',
    content: accordianData
  },
  {
    title: 'Tuesday',
    content: accordianData
  },
  {
    title: 'Wednesday',
    content: accordianData
  },
  {
    title: 'Thrusday',
    content: accordianData
  },
  {
    title: 'Friday',
    content: accordianData
  },  
  {
    title: 'Saturday',
    content: accordianData
  },
  
];

export default class AccordianExample extends Component {
    constructor(props){
        super(props)
        this.state = ({
            content:'',
            open: false,
        });
    }

  onChangeAccordian(section) {
    this.setState({ open: section });

  }

  renderHeader(section, i, isOpen) {
    return (
      <View style={{backgroundColor:'#ffffff',flexDirection:'row',}}>
        <Text style={[styles.headerText,{width:deviceWidth-80,padding:10,textAlign:'left'}]}>{section.title}</Text>
      </View>
    );
  }

  renderContent(section, i, isOpen) {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{flex: 1,}}>
        {/* <View style={styles.headerTextView}>
          <Text style={styles.headerText1}>Accordian</Text>
        </View> */}
        <View style={styles.container}>
          <ScrollView >    
            <SimpleAccordion
              style= {{
                borderWidth:1,
                borderRadius:25,
                margin:10,
                padding:10,
                backgroundColor:'#ffffff'
                
              }}
              activeSection={this.state.open}
              sections={sampleAccordianData}
              touchableComponent={TouchableOpacity}
              renderHeader={this.renderHeader}
              renderContent={this.renderContent}
              duration={1000}
              onChange={this.onChangeAccordian.bind(this)}
            />
          </ScrollView>
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor:'#EC7807'
      
    },
    headerText1:{
      color:'white',
      textAlign:'center',
      fontSize:22
     
    },
    headerTextView:{
      height:50,
      borderWidth:1,
      backgroundColor:'#383636',
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
    },
    content: {
      padding: 20,
      backgroundColor: '#ffffff'
     
    },
  });
    