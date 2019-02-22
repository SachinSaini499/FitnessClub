import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LoginScreen from './src/components/screens/Login'

import HomeMaleScreen from './src/components/screens/Male'
import HomeFeMaleScreen from './src/components/screens/Female'

import MalePreMealScreen from './src/components/screens/MalePreMeal'
import FeMalePreMealScreen from './src/components/screens/FemalePreMeal'

import MaleWorkoutScreen from './src/components/screens/MaleWorkout'
import FeMaleWorkoutScreen from './src/components/screens/FemaleWorkout'

import MalePostMealScreen from './src/components/screens/MalePostMeal'
import FemalePostMealScreen from './src/components/screens/FemalePostMeal'


import 
{ 
   createAppContainer, 
   createSwitchNavigator,
   createDrawerNavigator,
   createBottomTabNavigator,
   createStackNavigator
   
} from 'react-navigation'


const MaleStack= createStackNavigator({
  Male : {
    screen : MaleScreen,
    navigationOptions:({navigation})=>{
      return {
        headerTitle:"Male",
        headerLeft : <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
        onPress={()=>navigation.openDrawer()}/>
      }
    }
  },
  // Detail : {
  //   screen : Detail,
  //   navigationOptions:({navigation})=>{
  //     return {
  //       headerTitle:"Detail"
  //     }
  //   }
  // }
  })

  const FemaleStack= createStackNavigator({
    Female : {
      screen : FemaleScreen,
      navigationOptions:({navigation})=>{
        return {

          
          headerTitle:"Female",
          headerLeft : <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
          onPress={()=>navigation.openDrawer()}/>
        }
      }
    },
    // Detail : {
    //   screen : Detail,
    //   navigationOptions:({navigation})=>{
    //     return {
    //       headerTitle:"Detail"
    //     }
    //   }
    // }
    })
    const MalePreMealStack= createStackNavigator({
      Female : {
        screen : MalePreMealScreen,
        navigationOptions:({navigation})=>{
          return {
  
            
            headerTitle:"Male Pre Workout Meal",
            headerLeft : <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
            onPress={()=>navigation.openDrawer()}/>
          }
        }
      },
      // Detail : {
      //   screen : Detail,
      //   navigationOptions:({navigation})=>{
      //     return {
      //       headerTitle:"Detail"
      //     }
      //   }
      // }
      })
      const FeMalePreMealStack= createStackNavigator({
        Female : {
          screen : FeMalePreMealScreen,
          navigationOptions:({navigation})=>{
            return {
    
              
              headerTitle:"Female Pre Workout Meal",
              headerLeft : <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
              onPress={()=>navigation.openDrawer()}/>
            }
          }
        },
        // Detail : {
        //   screen : Detail,
        //   navigationOptions:({navigation})=>{
        //     return {
        //       headerTitle:"Detail"
        //     }
        //   }
        // }
        })
        const MaleWorkoutStack= createStackNavigator({
          Female : {
            screen : MaleWorkoutScreen,
            navigationOptions:({navigation})=>{
              return {
      
                
                headerTitle:"Male Workout",
                headerLeft : <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
                onPress={()=>navigation.openDrawer()}/>
              }
            }
          },
          // Detail : {
          //   screen : Detail,
          //   navigationOptions:({navigation})=>{
          //     return {
          //       headerTitle:"Detail"
          //     }
          //   }
          // }
          })
          const FemaleWorkoutStack= createStackNavigator({
            Female : {
              screen : FeMaleWorkoutScreen,
              navigationOptions:({navigation})=>{
                return {
        
                  
                  headerTitle:"Female Workout",
                  headerLeft : <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
                  onPress={()=>navigation.openDrawer()}/>
                }
              }
            },
            // Detail : {
            //   screen : Detail,
            //   navigationOptions:({navigation})=>{
            //     return {
            //       headerTitle:"Detail"
            //     }
            //   }
            // }
            })
            const MalePostWorkoutMealStack= createStackNavigator({
              Female : {
                screen : MalePostMealScreen,
                navigationOptions:({navigation})=>{
                  return {
          
                    
                    headerTitle:"Male Post Workout Meal",
                    headerLeft : <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
                    onPress={()=>navigation.openDrawer()}/>
                  }
                }
              },
              // Detail : {
              //   screen : Detail,
              //   navigationOptions:({navigation})=>{
              //     return {
              //       headerTitle:"Detail"
              //     }
              //   }
              // }
              })

              const FemalePostWorkoutMealStack= createStackNavigator({
                Female : {
                  screen : FeMalePostMealScreen,
                  navigationOptions:({navigation})=>{
                    return {
            
                      
                      headerTitle:"Female Post Workout Meal",
                      headerLeft : <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
                      onPress={()=>navigation.openDrawer()}/>
                    }
                  }
                },
                // Detail : {
                //   screen : Detail,
                //   navigationOptions:({navigation})=>{
                //     return {
                //       headerTitle:"Detail"
                //     }
                //   }
                // }
                })

const HomeTabNavigator = createBottomTabNavigator({
  Male:MaleStack ,
  Female:FemaleStack
},
{
  navigationOptions:({navigation})=>{
    const {routeName} = navigation.state.routes[navigation.state.index]
    return{
     header : null,
      headerTitle : routeName,
    }
  }
})
const PreMealTabNavigator = createBottomTabNavigator({
  MalePreMeal:MalePreMealStack ,
  FeMalePreMeal:FeMalePreMealStack
},
{
  navigationOptions:({navigation})=>{
    const {routeName} = navigation.state.routes[navigation.state.index]
    return{
     header : null,
      headerTitle : routeName,
    }
  }
})

const WorkoutTabNavigator = createBottomTabNavigator({
  MaleWorkout:MaleWorkoutStack ,
  FeMaleWorkout:FeMaleWorkoutScreen
},
{
  navigationOptions:({navigation})=>{
    const {routeName} = navigation.state.routes[navigation.state.index]
    return{
     header : null,
      headerTitle : routeName,
    }
  }
})
const PostWorkoutMealTabNavigator = createBottomTabNavigator({
  MalePostMeal:MalePostMealScreen ,
  FemalePostMeal:FemalePostMealScreen
},
{
  navigationOptions:({navigation})=>{
    const {routeName} = navigation.state.routes[navigation.state.index]
    return{
     header : null,
      headerTitle : routeName,
    }
  }
})

// const MaleTabNavigator = createBottomTabNavigator({
//   Male:MaleScreen 
// },
// {
//   navigationOptions:({navigation})=>{
//     const {routeName} = navigation.state.routes[navigation.state.index]
//     return{
//       headerLeft: <Icon style={{paddingLeft: 10 }} 
//       name="md-menu" size ={30} 
//       onPress={()=>navigation.openDrawer()}/>
//     //  header : null,
//     //   headerTitle : routeName
//     }
//   }
// }
// )
// const FemaleTabNavigator = createBottomTabNavigator({
//   Female:FemaleScreen
// },
// {
//   navigationOptions:({navigation})=>{
//     const {routeName} = navigation.state.routes[navigation.state.index]
//     return{
//       headerLeft: <Icon style={{paddingLeft: 10 }} 
//       name="md-menu" size ={30} 
//       onPress={()=>navigation.openDrawer()}/>
//     //  header : null,
//     //   headerTitle : routeName
//     }
//   }
// }
// )


const HomeStackNavigator = createStackNavigator({
  Home : HomeTabNavigator
},
{
  defaultNavigationOptions:({navigation})=>{
    return {
      headerLeft: <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
      onPress={()=>navigation.openDrawer()}/>
    }
  }
})
const PreMealStackNavigator = createStackNavigator({
  PreMeal : PreMealTabNavigator
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
const WorkoutStackNavigator = createStackNavigator({
  Workout : WorkoutTabNavigator
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
const PostWorkoutMealStackNavigator = createStackNavigator({
  PostWorkoutMeal : PostWorkoutMealTabNavigator
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
  Home : HomeStackNavigator, 
  PreMeal:PreMealStackNavigator,
  Workout: WorkoutStackNavigator,
  PostMeal:PostWorkoutMealStackNavigator
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