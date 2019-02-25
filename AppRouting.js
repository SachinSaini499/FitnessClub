import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
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
   createStackNavigator,DrawerItems,
  
   
   
} from 'react-navigation'
import styles from './src/components/assets/styles';


const MaleStack= createStackNavigator({
  Male : {
    screen : HomeMaleScreen,
    navigationOptions:({navigation})=>{
      return {
        headerTitle:"Home",        
        headerLeft : <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
        onPress={()=>navigation.openDrawer()}/>,
        headerStyle: {
          backgroundColor: '#EC7807',
        },       
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
          headerStyle: {
            backgroundColor: '#EC7807',
          },         
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
            headerStyle: {
              backgroundColor: '#EC7807',
            },           
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
              headerStyle: {
                backgroundColor: '#EC7807',
              },
              
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
                headerStyle: {
                  backgroundColor: '#EC7807',
                },
               
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
                return {    headerStyle: {
                  backgroundColor: '#EC7807',
                },   
                 
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
                  return { headerStyle: {
                    backgroundColor: '#EC7807',
                  },                   
                    
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
                      headerStyle: {
                        backgroundColor: '#EC7807',
                      },
                     
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
      headerStyle: 
      {
      backgroundColor: '#EC7807',      
      },
     header : null,
     headerTitle : routeName,
     tabBarIcon: ({ focused, tintColor }) => {
      const iconName = 'md-person';
      return <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
      />;
  },
     showIcon: true,    
    }
  }
},
)
const PreMealTabNavigator = createMaterialBottomTabNavigator({
  Male:MalePreMealStack ,
  Female:FeMalePreMealStack
},
{
  navigationOptions:({navigation})=>{
    const {routeName} = navigation.state.routes[navigation.state.index]
    return{ headerStyle: {
      backgroundColor: '#EC7807',
    },
    header : null,    
    headerTitle : routeName,
    tabBarIcon: ({ focused, tintColor }) => {
      const iconName = 'md-person';
      return <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
      />;
    },}
  }
})

const WorkoutTabNavigator = createBottomTabNavigator({
  Male:MaleWorkoutStack ,
  Female:FemalePostWorkoutMealStack
},
{
  navigationOptions:({navigation})=>{
    const {routeName} = navigation.state.routes[navigation.state.index]
    return{ headerStyle: {
      backgroundColor: '#EC7807',
    },
    header : null,    
    headerTitle : routeName,
    tabBarIcon: ({ focused, tintColor }) => {
      const iconName = 'md-person';
      return <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
      />;
  },
    }
  }
})
const PostWorkoutMealTabNavigator = createBottomTabNavigator({
  Male:MalePostWorkoutMealStack ,
  Female:FemalePostWorkoutMealStack
},
{
  navigationOptions:({navigation})=>{
    const {routeName} = navigation.state.routes[navigation.state.index]
    return{ 
      headerStyle: {
      backgroundColor: '#EC7807',
      
    },
    header : null,    
    headerTitle : routeName,
    tabBarIcon: ({ focused, tintColor }) => {
      const iconName = 'md-person';
      return <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
      />;
  },
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
    return {  headerStyle: {
      backgroundColor: '#EC7807',
    },
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
      headerStyle: {
        backgroundColor: '#EC7807',
      },
     
      headerLeft: <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
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
      headerStyle: {
        backgroundColor: '#EC7807',
      },
    
      headerLeft: <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
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
      headerStyle: {
        backgroundColor: '#EC7807',
      },    
      headerLeft: <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
      onPress={()=>navigation.openDrawer()}/>
    }
  }
})
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
       <Image
          source={require('./src/components/assets/images/dummy2.png')}
          style={styles.image}
        />
    </View>
    <DrawerItems {...props} />
  </View>
)



const AppDrawerNavigator = createDrawerNavigator({
  Home : HomeStackNavigator, 
  PreMeal:PreMealStackNavigator,
  Workout: WorkoutStackNavigator,
  PostMeal:PostWorkoutMealStackNavigator
}, {
  // define customComponent here
  contentComponent: DrawerContent,
  contentOptions: {
    headerStyle: {
      backgroundColor: '#EC7807',
    },    
    activeTintColor: '#EC7807',
    itemsContainerStyle: {
      marginVertical: 0,
    },
    iconContainerStyle: {
      opacity: 1
    }
  }
}
);


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