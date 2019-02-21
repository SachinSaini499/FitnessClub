import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LoginScreen from './src/components/screens/Login'
import HomeScreen from './src/components/screens/Home'
import PreMealScreen from './src/components/screens/PreMeal'
import WorkoutScreen from './src/components/screens/Workout'
import PostScreen from './src/components/screens/PostMeal'

import 
{ 
   createAppContainer, 
   createSwitchNavigator,
   createDrawerNavigator,
   createBottomTabNavigator,
   createStackNavigator
   
} from 'react-navigation'

const HomeTabNavigator = createBottomTabNavigator({
  HomeScreen,
  PreMealScreen,
  WorkoutScreen,
  PostScreen
},
{
  navigationOptions:({navigation})=>{
    const {routeName} = navigation.state.routes[navigation.state.index]
    return{
     header : null,
      headerTitle : routeName
    }
  }
}

)

const HomeStackNavigator = createStackNavigator({
  Home : HomeTabNavigator
},
{
  defaultNavigationOptions:({navigation})=>{
    return {
      headerLeft: <Icon style={{paddingLeft: 10 }} 
      name="md-menu" size ={30} 
      onPress={()=>navigation.openDrawer()}/>
    }
  }
})



const AppDrawerNavigator = createDrawerNavigator({
  Home : HomeStackNavigator
});


const SwitchNavigator = createSwitchNavigator({
    Login: LoginScreen,
    Home: AppDrawerNavigator,
  });
  
  const AppNavigator = createAppContainer(SwitchNavigator); 
  
  export default class App extends React.Component {
    render() {
      return (
       <AppNavigator />
      )
    }
  }