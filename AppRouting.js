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
    screen : HomeMaleScreen,
    navigationOptions:({navigation})=>{
      return {
        headerTitle:"Home",
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
      screen : HomeFeMaleScreen ,
      navigationOptions:({navigation})=>{
        return {

          
          headerTitle:"Home",
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
      Male : {
        screen : MalePreMealScreen,
        navigationOptions:({navigation})=>{
          return {
  
            
            headerTitle:"Pre-Workout Meal",
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
    
              
              headerTitle:"Pre-Workout Meal",
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
          Male : {
            screen : MaleWorkoutScreen,
            navigationOptions:({navigation})=>{
              return {    
                
                headerTitle:"Workout",
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
                  
                  headerTitle:"Workout",
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
              Male : {
                screen : MalePostMealScreen,
                navigationOptions:({navigation})=>{
                  return {
          
                    
                    headerTitle:"Post-Workout Meal",
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
                  screen : FemalePostMealScreen,
                  navigationOptions:({navigation})=>{
                    return {
            
                      
                      headerTitle:"Post-Workout Meal",
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
      headerTitle : routeName
      
    }
  }
}
,
)
const PreMealTabNavigator = createBottomTabNavigator({
  Male:MalePreMealStack ,
  FeMale:FeMalePreMealStack
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
  Male:MaleWorkoutStack ,
  FeMale:FeMaleWorkoutScreen
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
  Male:MalePostMealScreen ,
  Female:FemalePostMealScreen
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