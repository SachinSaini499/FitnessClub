import React, { Component } from 'react'
import { Text, View,Image,TouchableOpacity ,Modal} from 'react-native'


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

import SettingScreen from './src/components/screens/setting'

import MaleWorkoutDetailsScreen from './src/components/screens/MaleWorkoutDetails'
import RecordingComponentScreen from './src/components/custom/RecordingComponent'

import MaleWorkoutComponentScreen from './src/components/custom/MaleWorkoutComponent'

import CustomModal from './src/components/custom/ModalComponent'

import CustomDrawerComponent from '../FitnessClub/src/components/custom/DrawerComponent'

import SplashScreen from './src/components/screens/SplashScreen'

import 
{ 
   createAppContainer, 
   createSwitchNavigator,
   createDrawerNavigator,
   createBottomTabNavigator,
   createStackNavigator,DrawerItems,   
   
} from 'react-navigation'
import styles from './src/components/assets/styles';
import { ScrollView } from 'react-native-gesture-handler';

// const MaleWorkoutBiStackNavigator = createStackNavigator({
//   Male : {
//     screen : MaleWorkoutBiScreen,
//     navigationOptions:({navigation})=>{
//       return {
//         headerTitle:"Home",        
//         headerLeft : <Icon style={{paddingLeft: 10 }} name="arrow-back" size ={20} 
//         onPress={()=>navigation.openDrawer()}/>,
//         headerStyle: {
//           backgroundColor: '#1DCA88',
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
        style: {
          backgroundColor: 'black',
        }, 
        headerTitle:"Home",
        headerStyle: {
        backgroundColor: '#1DCA88',
      },headerTitleStyle: {
        color: '#14284B'
      },
        headerLeft: <Icon style={{paddingLeft: 10 ,color:'#14284B',}} name="md-menu" size ={30} 
        onPress={()=>navigation.openDrawer()}/>
      }      
    }
  }, MalePreWorkoutMeal: {
    screen : MalePreMealScreen,
    navigationOptions:({navigation})=>{
      return {
        header: null,        
        // headerLeft : <Icon style={{paddingLeft: 10,color:'#14284B' }} name="md-menu" size ={30} 
        // onPress={()=>navigation.openDrawer()}/>,
        // headerStyle: {
        //   backgroundColor: '#1DCA88',
        // },       
      }      
    }
  },
  MaleWorkout : {
    screen : MaleWorkoutScreen,
    navigationOptions:({navigation})=>{
      return {
        header: null,        
        // headerLeft : <Icon style={{paddingLeft: 10 ,color:'#14284B'}} name="md-menu" size ={30} 
        // onPress={()=>navigation.openDrawer()}/>,
        // headerStyle: {
        //   backgroundColor: '#1DCA88',
        // },       
      }      
    }
  },
  MalePostWorkoutMeal : {
    screen : MalePostMealScreen,
    navigationOptions:({navigation})=>{
      return {
        header: null,        
        // headerLeft : <Icon style={{paddingLeft: 10,color:'#14284B' }} name="md-menu" size ={30} 
        // onPress={()=>navigation.openDrawer()}/>,
        // headerStyle: {
        //   backgroundColor: '#1DCA88',
        // },       
      }      
    }
  },  
  MaleSetting : {
    screen : SettingScreen,
    navigationOptions:({navigation})=>{
      return {    
        style: {
          backgroundColor: 'black',
        }, 
        headerTitle:"Setting",
        headerStyle: {
        backgroundColor: '#1DCA88',
      },
      headerTitleStyle: {
        color: '#14284B'
      },
        headerLeft: <Icon style={{paddingLeft: 10,color:'#14284B' }} name="md-menu" size ={30} 
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
    FemaleHomeStack : {
      screen : HomeFeMaleScreen ,
      navigationOptions:({navigation})=>{
        return { 
          style: {
            backgroundColor: 'black',
          }, 
          headerTitle:"Home",
          headerStyle: {
          backgroundColor: '#1DCA88',
        },headerTitleStyle: {
          color: '#14284B'
        },
          headerLeft: <Icon style={{paddingLeft: 10 ,color:'#14284B'}} name="md-menu" size ={30} 
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
      MalePreWorkoutMealStack : {
        screen : MalePreMealScreen,
        navigationOptions:({navigation})=>{
          return {
            header: null,
            // headerStyle: {
            //   backgroundColor: '#1DCA88',
            // },           
            // headerTitle:"Pre-Workout Meal",
            // headerLeft : <Icon style={{paddingLeft: 10,color:'#14284B' }} name="md-menu" size ={30} 
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
        FemalePreWorkoutMealStack : {
          screen : FeMalePreMealScreen,
          navigationOptions:({navigation})=>{
            return {
              header: null,
              // headerStyle: {
              //   backgroundColor: '#1DCA88',
              // },
              
              // headerTitle:"Pre-Workout Meal",
              // headerLeft : <Icon style={{paddingLeft: 10,color:'#14284B' }} name="md-menu" size ={30} 
              
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
          MaleWorkoutStackk : {
            screen : MaleWorkoutScreen,
            navigationOptions:({navigation})=>{
              return {    
                style: {
                  backgroundColor: 'black',
                }, 
                headerTitle:"Workout",
                headerStyle: {
                backgroundColor: '#1DCA88',
              },
              headerTitleStyle: {
                color: '#14284B'
              },
                headerLeft: <Icon style={{paddingLeft: 10,color:'#14284B' }} name="md-menu" size ={30} 
                onPress={()=>navigation.openDrawer()}/>
              }
            }
          },
          MaleWorkoutDetailsStack : {
            screen : MaleWorkoutDetailsScreen,
            navigationOptions:({navigation})=>{
              return {  
               //header: null,
              //   style: {
              //     backgroundColor: 'black',
              //   }, 
              //   headerTitle:"",
              //   headerStyle: {
              //   backgroundColor: '#1DCA88',
              // },
              // headerTitleStyle: {
              //   color: '#FFFFFF'
              // },
              //   headerLeft: <Icon style={{paddingLeft: 10,,color:'#14284B' }} name="md-arrow-round-back" size ={30} 
              //   />
              }
            }
          },
          RecordingComponentScreenStack : {
            screen : RecordingComponentScreen,
            navigationOptions:({navigation})=>{
              return {  
                header: null,
              //   style: {
              //     backgroundColor: 'black',
              //   }, 
              //   headerTitle:"Chest",
              //   headerStyle: {
              //   backgroundColor: '#1DCA88',
              // },
              // headerTitleStyle: {
              //   color: '#FFFFFF'
              // },
              //   headerLeft: <Icon style={{paddingLeft: 10,color:'#14284B' }} name="md-arrow-round-back" size ={30} 
              //   onPress={()=>this.props.navigation.navigate('MaleWorkoutStack')}/>
              }
            }
          },    MaleWorkoutComponentScreenStack : {
            screen : MaleWorkoutComponentScreen,
            navigationOptions:({navigation})=>{
              return {  
                header: null,
              //   style: {
              //     backgroundColor: 'black',
              //   }, 
              //   headerTitle:"Chest",
              //   headerStyle: {
              //   backgroundColor: '#1DCA88',
              // },
              // headerTitleStyle: {
              //   color: '#FFFFFF'
              // },
              //   headerLeft: <Icon style={{paddingLeft: 10 ,color:'#14284B'}} name="md-arrow-round-back" size ={30} 
              //   onPress={()=>this.props.navigation.navigate('MaleWorkoutStack')}/>
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
            FemaleWorkoutStackk : {
              screen : FeMaleWorkoutScreen,
              navigationOptions:({navigation})=>{
                return {    
                  style: {
                    backgroundColor: 'black',
                  }, 
                  headerTitle:"Workout",
                  headerStyle: {
                  backgroundColor: '#1DCA88',
                },
                headerTitleStyle: {
                  color: '#14284B'
                },
                  headerLeft: <Icon style={{paddingLeft: 10,color:'#14284B' }} name="md-menu" size ={30} 
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
              MalePostMealStack : {
                screen : MalePostMealScreen,
                navigationOptions:({navigation})=>{
                  return { 
                    header: null,
                  //   headerStyle: {
                  //   backgroundColor: '#1DCA88',
                  // },                   
                    
                  //   headerTitle:"Post-Workout Meal",
                  //   headerLeft : <Icon style={{paddingLeft: 10 ,color:'#14284B'}} name="md-menu" size ={30} 
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
                FemalePostMealStack : {
                  screen : FemalePostMealScreen,
                  navigationOptions:({navigation})=>{
                    return {
                      header: null,
                      // headerStyle: {
                      //   backgroundColor: '#1DCA88',
                      // },
                     
                      // headerTitle:"Post-Workout Meal",
                      // headerLeft : <Icon style={{paddingLeft: 10 ,color:'#14284B'}} name="md-menu" size ={30} 
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

                
              const MaleSettingStack= createStackNavigator({
                MaleSettingStack : {
                  screen : SettingScreen,
                  navigationOptions:({navigation})=>{
                    return {
                      header: null,
                      // headerStyle: {
                      //   backgroundColor: '#1DCA88',
                      // },
                     
                      // headerTitle:"Post-Workout Meal",
                      // headerLeft : <Icon style={{paddingLeft: 10 ,color:'#14284B'}} name="md-menu" size ={30} 
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

                
              const FemaleSettingStack= createStackNavigator({
                FemaleSettingStack : {
                  screen : SettingScreen,
                  navigationOptions:({navigation})=>{
                    return {
                      header: null,
                      // headerStyle: {
                      //   backgroundColor: '#1DCA88',
                      // },
                     
                      // headerTitle:"Post-Workout Meal",
                      // headerLeft : <Icon style={{paddingLeft: 10 ,color:'#14284B'}} name="md-menu" size ={30} 
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
      activeTintColor: '#1DCA88',
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="md-man"
                color={'#1DCA88'}
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
              color={'#1DCA88'}
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
      activeTintColor: '#1DCA88',
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="md-man"
                color={'#1DCA88'}
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
              color={'#1DCA88'}
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
        activeTintColor: '#1DCA88',
          tabBarIcon: ({tintColor}) => (
              <Icon
                  name="md-man"
                  color={'#1DCA88'}
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
                color={'#1DCA88'}
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
        activeTintColor: '#1DCA88',
          tabBarIcon: ({tintColor}) => (
              <Icon
                  name="md-man"
                  color={'#1DCA88'}
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
                color={'#1DCA88'}
                size={24}
            />
        )
    }), 
  }  
})

const SettingTabNavigator = createBottomTabNavigator(
  {
    Male: {
      screen: MaleSettingStack,
      navigationOptions: () => ({
        activeTintColor: '#1DCA88',
          tabBarIcon: ({tintColor}) => (
              <Icon
                  name="md-man"
                  color={'#1DCA88'}
                  size={24}
              />
          )
      }),
  } ,  
  Female: {
    screen: FemaleSettingStack,
    navigationOptions: () => ({
     
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="md-woman"
                color={'#1DCA88'}
                size={24}
            />
        )
    }), 
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
      header : null,
    //   style: {
    //     backgroundColor: 'black',
    //   }, 
    //   headerTitle:"Home",
    //   headerStyle: {
    //   backgroundColor: '#1DCA88',
    // },
    //   headerLeft: <Icon style={{paddingLeft: 10 ,color:'#14284B'}} name="md-menu" size ={30} 
    //   onPress={()=>navigation.openDrawer()}/>
    }
  }
}

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
      backgroundColor: '#1DCA88',
    },headerTitleStyle: {
      color: '#14284B'
    },
      headerLeft: <Icon style={{paddingLeft: 10,color:'#14284B' }} name="md-menu" size ={30} 
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
      header: null,
    //   style: {
    //     backgroundColor: 'black',
    //   }, 
    //   headerTitle:"Workout",
    //   headerStyle: {
    //   backgroundColor: '#1DCA88',
    // },
    // headerTitleStyle: {
    //   color: '#FFFFFF'
    // },
    //   headerLeft: <Icon style={{paddingLeft: 10,color:'#14284B' }} name="md-menu" size ={30} 
    //   onPress={()=>navigation.openDrawer()}/>
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
        backgroundColor: '#14284B',
      },
      headerTitle:"Post-Workout Meal",
      headerStyle: {
      backgroundColor: '#1DCA88',
      
    },
    headerTitleStyle: 
    {
      color: '#14284B'
    },
      headerLeft: <Icon style={{paddingLeft: 10 ,color:'#14284B'}} name="md-menu" size ={30} 
      onPress={()=>navigation.openDrawer()}/>
    }
  }
})

const SettingStackTabNavigator = createStackNavigator({
  SettingNavigator : SettingTabNavigator
},
{
  defaultNavigationOptions:({navigation})=>{
    return { 
      style: {
        backgroundColor: '#14284B',
      },
      headerTitle:"Setting",
      headerStyle: {
      backgroundColor: '#1DCA88',
      
    },
    headerTitleStyle: 
    {
      color: '#14284B'
    },
      headerLeft: <Icon style={{paddingLeft: 10 ,color:'#14284B'}} name="md-menu" size ={30} 
      onPress={()=>navigation.openDrawer()}/>
    }
  }
})

const DrawerContent = (props) => 
(  
  <View >
    <View style={styles.CircleShapeView}>  
   
        <Image source={require('./src/components/assets/images/logo2.png')} style={styles.CircleShapeImage}/>
        <TouchableOpacity onPress={()=>alert("alert")} style={{width:'15%',height:'15%',bottom:'30%',right:'28%',position:'absolute'}}> 
        <Image source={require('./src/components/assets/images/flat-camera-icon.png')} style={styles.CircleShapeCamra}/>
        </TouchableOpacity>
        <Text style={{ color: '#14284B', fontSize: 15, bottom:'13%', position: 'absolute'}}>Sachin Saini</Text>
        <Text style={{ color: '#14284B', fontSize: 15, bottom:'1%', position: 'absolute'}}>09716955428</Text>
    </View>
    <DrawerItems {...props} />
  </View>
)
const AppDrawerNavigator = createDrawerNavigator({
  'Home' : HomeStackNavigator, 
  'Pre-Workout Meal':PreMealStackNavigator,
  'Workout': WorkoutStackNavigator,
  'Post-Workout Meal':PostWorkoutMealStackNavigator,
  'Setting':SettingStackTabNavigator,
 // 'Logout':HomeStackNavigator
}, {
  // define customComponent here
  contentComponent: DrawerContent,
  contentOptions: {
    headerStyle: 
    {
      backgroundColor: 'black',            
    },
    tintColor:    '#14284B',
    activeTintColor: '#14284B',
    itemsContainerStyle: {
      marginVertical: 0,
      backgroundColor: '#1DCA88',      
      color:'#1DCA88',      
    },
    inactiveBackgroundColor: '#1DCA88',
    activeBackgroundColor:'#ffffff',
    iconContainerStyle: {
      opacity: 1,
      backgroundColor:'#1DCA88',
      tintColor:    '#1DCA88',
    }
  }
}
);


const SwitchNavigator = createSwitchNavigator({
  Splash:SplashScreen,
  Login: LoginScreen,
  Home: AppDrawerNavigator,
  });
  
  const AppNavigator = createAppContainer(SwitchNavigator); 
  
  export default class App extends React.Component {
//     constructor(props) {
//       super(props);  
//      this.state={
//        modalKey:false
// }
//     }
    // componentDidMount()
    // {
    //   alert(this.state.modalKey);
    // }
    render() {
      return (
        
       <AppNavigator />
      
      )
    }
  }