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

import MaleWorkoutBiScreen from './src/components/screens/MaleWorkout_Bi'

import 
{ 
   createAppContainer, 
   createSwitchNavigator,
   createDrawerNavigator,
   createBottomTabNavigator,
   createStackNavigator,DrawerItems,   
   
} from 'react-navigation'
import styles from './src/components/assets/styles';





// const MaleWorkoutBiStackNavigator = createStackNavigator({
//   Male : {
//     screen : MaleWorkoutBiScreen,
//     navigationOptions:({navigation})=>{
//       return {
//         headerTitle:"Home",        
//         headerLeft : <Icon style={{paddingLeft: 10 }} name="arrow-back" size ={20} 
//         onPress={()=>navigation.openDrawer()}/>,
//         headerStyle: {
//           backgroundColor: '#EC7807',
//         },       
//       }      
//     }
//   },
//   // Detail : {
//   //   screen : Detail,
//   //   navigationOptions:({navigation})=>{
//   //     return {
//   //       headerTitle:"Detail"
//   //     }
//   //   }
//   // }
//   })





const MaleStack= createStackNavigator({
  Male : {
    screen : HomeMaleScreen,
    navigationOptions:({navigation})=>{
      return {
        header: null,        
        // headerLeft : <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
        // onPress={()=>navigation.openDrawer()}/>,
        // headerStyle: {
        //   backgroundColor: '#EC7807',
        // },       
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
          header: null,
          // headerStyle: {
          //   backgroundColor: '#EC7807',
          // },         
          
          // headerLeft : <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
          // onPress={()=>navigation.openDrawer()}/>          
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
            header: null,
            // headerStyle: {
            //   backgroundColor: '#EC7807',
            // },           
            // headerTitle:"Pre-Workout Meal",
            // headerLeft : <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
            // onPress={()=>navigation.openDrawer()}/>
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
              header: null,
              // headerStyle: {
              //   backgroundColor: '#EC7807',
              // },
              
              // headerTitle:"Pre-Workout Meal",
              // headerLeft : <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
              
              // onPress={()=>navigation.openDrawer()}/>
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
                header: null,
                // headerStyle: {
                //   backgroundColor: '#EC7807',
                // },
               
                // headerTitle:"Workout",
                // headerLeft : <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
                // onPress={()=>navigation.openDrawer()}/>
              }
            }
          },
          MaleWorkoutBi : {
            screen : MaleWorkoutBiScreen,
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
          }
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
                  header: null,
                //   headerStyle: {
                //   backgroundColor: '#EC7807',
                // },   
                 
                  // headerTitle:"Workout",
                  // headerLeft : <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
                  // onPress={()=>navigation.openDrawer()}/>
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
                    header: null,
                  //   headerStyle: {
                  //   backgroundColor: '#EC7807',
                  // },                   
                    
                  //   headerTitle:"Post-Workout Meal",
                  //   headerLeft : <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
                  //   onPress={()=>navigation.openDrawer()}/>
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
                      header: null,
                      // headerStyle: {
                      //   backgroundColor: '#EC7807',
                      // },
                     
                      // headerTitle:"Post-Workout Meal",
                      // headerLeft : <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
                      // onPress={()=>navigation.openDrawer()}/>
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
  Male: {
    screen: MaleStack,
    navigationOptions: () => ({
      activeTintColor: '#EC7807',
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="md-man"
                color={'#EC7807'}
                size={24}
            />
        )
    }),
} ,  
Female: {
  screen: FemaleStack,
  navigationOptions: () => ({
   
      tabBarIcon: ({tintColor}) => (
          <Icon
              name="md-woman"
              color={'#EC7807'}
              size={24}
          />
      )
  }), 
} 
},



)
const PreMealTabNavigator = createBottomTabNavigator({
  Male: {
    screen: MalePreMealStack,
    navigationOptions: () => ({
      activeTintColor: '#EC7807',
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="md-man"
                color={'#EC7807'}
                size={24}
            />
        )
    }),
} ,  
Female: {
  screen: FeMalePreMealStack,
  navigationOptions: () => ({
   
      tabBarIcon: ({tintColor}) => (
          <Icon
              name="md-woman"
              color={'#EC7807'}
              size={24}
          />
      )
  }), 
}
})

const WorkoutTabNavigator = createBottomTabNavigator(
  {
    Male: {
      screen: MaleWorkoutStack,
      navigationOptions: () => ({
        activeTintColor: '#EC7807',
          tabBarIcon: ({tintColor}) => (
              <Icon
                  name="md-man"
                  color={'#EC7807'}
                  size={24}
              />
          )
      }),
  } ,  
  Female: {
    screen: FemaleWorkoutStack,
    navigationOptions: () => ({
     
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="md-woman"
                color={'#EC7807'}
                size={24}
            />
        )
    }), 
  }  
}  )

const PostWorkoutMealTabNavigator = createBottomTabNavigator(
  {
    Male: {
      screen: MalePostWorkoutMealStack,
      navigationOptions: () => ({
        activeTintColor: '#EC7807',
          tabBarIcon: ({tintColor}) => (
              <Icon
                  name="md-man"
                  color={'#EC7807'}
                  size={24}
              />
          )
      }),
  } ,  
  Female: {
    screen: FemalePostWorkoutMealStack,
    navigationOptions: () => ({
     
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="md-woman"
                color={'#EC7807'}
                size={24}
            />
        )
    }), 
  }  
}
  
  )

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
      style: {
        backgroundColor: 'black',
      }, 
      headerTitle:"Home",
      headerStyle: {
      backgroundColor: '#EC7807',
    },
      headerLeft: <Icon style={{paddingLeft: 10 }} name="md-menu" size ={30} 
      onPress={()=>navigation.openDrawer()}/>
    }
  }
}
,
)
const PreMealStackNavigator = createStackNavigator({
  PreMeal : PreMealTabNavigator
},
{
  defaultNavigationOptions:({navigation})=>{
    return { 
      style: {
        backgroundColor: 'black',
      }, 
      headerTitle:"Pre-Workout Meal",
      headerStyle: {
      backgroundColor: '#EC7807',
    },headerTitleStyle: {
      color: '#FFFFFF'
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
      style: {
        backgroundColor: 'black',
      }, 
      headerTitle:"Workout",
      headerStyle: {
      backgroundColor: '#EC7807',
    },
    headerTitleStyle: {
      color: '#FFFFFF'
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
      style: {
        backgroundColor: '#FFFFFF',
      },
      headerTitle:"Post-Workout Meal",
      headerStyle: {
      backgroundColor: '#EC7807',
      
    },headerTitleStyle: {
      color: '#FFFFFF'
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
  'Home' : HomeStackNavigator, 
  'Pre-Workout Meal':PreMealStackNavigator,
  'Workout': WorkoutStackNavigator,
  'Post-Workout Meal':PostWorkoutMealStackNavigator
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