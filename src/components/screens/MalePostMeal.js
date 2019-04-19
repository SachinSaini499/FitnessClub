
import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import { Text, View,TextInput ,Button,Image,TouchableHighlight,StatusBar,StyleSheet} from 'react-native';
import styles from '../assets/styles.js';
import SegmentedControlTab from "react-native-segmented-control-tab";
const accordianData = '* Banana and Bread' ;


var sampleAccordianData = [
  {
    title: 'Sunday',    
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


export default class MalePostMeal extends Component {

  constructor(props){
    super(props)
    this.state = ({  
      MealTitle:"Sunday",
      mealDescription:"",
      selectedIndex: 0,             
    }); 
   }  

   handleIndexChange = index => {
    this.setState({selectedIndex: index});
   
    if(this.state.selectedIndex==0)
    { // alert("handleIndexChangedfsdfds"+ this.state.selectedIndex)
    this.setState({mealDescription:""});}
  };
  
  _onSelectMealDay(title)
  {
    this.setState({MealTitle:title})
   //alert(title);
  }
  _onPressButton()
  { let temptitle=this.state.MealTitle;
    if(this.state.selectedIndex==1)
    {          
        let preMealDescription=this.state.mealDescription;
        //alert("mealTitleTemp"+mealTitleTemp)  
         var sampleAccordianDataTemp = sampleAccordianData.map(function (element) 
         {           
           if(element.title==temptitle)
          {  
            element.content=element.content+"\n"+"* "+preMealDescription;
          } 
          return element;
         });
          sampleAccordianData = Array.from(sampleAccordianDataTemp);
          this.setState({mealDescription:""});
          // sampleAccordianData.forEach(element => {
          //   alert(element.content)
          // });
    }
    else if(this.state.selectedIndex==0)
    {
      let temptitle=this.state.MealTitle;
      var found = sampleAccordianData.find(function(element) { 
    //alert(temptitle);
        return element.title == temptitle; 
    
      });
     // alert(found.title);
      var content=found.content;
      this.setState({mealDescription:content});
      //alert("Submit"+this.state.mealDescription +found.content)
    }
   
  }

  

  render() {
    let data = [{value: 'Sunday',},{value: 'Monday',},{value: 'Tuesday',},{value: 'Wednesday',},{value: 'Thursday',},{value: 'Friday',},{value: 'Saturday',}];
    return (
      <View style={{flex:1}}>
      <View style={{paddingLeft:15,paddingRight:15}}>
      <Dropdown label='Please Select Meal Day' data={data} baseColor="#14284B" textColor="#14284B"  pickerStyle={{borderRadius:10}} 
      selectedItemColor="#1DCA88"  itemColor="#14284B" itemCount={7} containerStyle={{borderRadius:10}} value="Sunday" onChangeText={(element) => this._onSelectMealDay(element)}
       />
       </View>
       <TextInput onChangeText={(mealDescription) => this.setState({mealDescription})} placeholder="Description" multiline={true}  placeholderTextColor='#14284B'  style={[styles.textInput2,{width:'93%', textAlignVertical:'top', height:'40%',}]}>
       {this.state.mealDescription}
       </TextInput>         
      
      <View style={{paddingLeft:15,paddingRight:15,paddingBottom:30,paddingTop:10}}>
       <SegmentedControlTab values={["SHOW", "ADD"]}  selectedIndex={this.state.selectedIndex} 
       selectedIndices={0} tabTextStyle={segmentstyles.tabTextStyle} activeTabStyle={segmentstyles.activeTabStyle}
       activeTabTextStyle={segmentstyles.activeTabTextStyle} tabStyle={segmentstyles.tabStyle} onTabPress={this.handleIndexChange}
       tabsContainerStyle={segmentstyles.tabsContainerStyle} allowFontScaling={false}/>
      </View>
       <TouchableHighlight style={[styles.button,{alignSelf:'center',width:'40%'}]}  onPress={()=>this._onPressButton()}>
          <Text style={styles.text}>Submit</Text>
        </TouchableHighlight> 
       </View>

    );
  }
}

const segmentstyles = StyleSheet.create({
  tabsContainerStyle: {
    //custom styles
  },
  tabStyle: {
    borderColor:'#14284B', 
  },
  tabTextStyle: {
    //custom styles
    color:'#14284B',
    fontWeight: 'bold',
    fontSize:13
  },
  activeTabStyle: {
    //custom styles
    backgroundColor:'#2ED085'
  },
  activeTabTextStyle: {
    color:'#14284B',
    fontWeight: 'bold',
    fontSize:13
  },
  tabBadgeContainerStyle: {
    //custom styles
  },
  activeTabBadgeContainerStyle: {
    //custom styles
  },
  tabBadgeStyle: {
    //custom styles
  },
  activeTabBadgeStyle: {
    //custom styles
  }
});

