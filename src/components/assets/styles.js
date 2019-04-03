
import { StyleSheet } from 'react-native'

export default StyleSheet.create({  
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      padding: 10, 
    },  
    CircleShapeView: {
      width:'99%',
      height:'40%',         
      justifyContent: 'center', // Used to set Text Component Vertically Center
      alignItems: 'center' ,
      position: 'relative', // because it's parent
    top: 0,
    left: 0,
      backgroundColor: '#FEFBE8',
     // backgroundColor: '#00BCD4'
  },
   CircleShapeImage: {
    width: '50%',
    height: '70%',
    borderRadius: 150/2,
    position: 'absolute',
    top:'3%', 
  
}
,
   CircleShapeCamra: {
    width: '130%',
    height: '130%',   
    borderRadius: 150/2,
    position: 'absolute', // child
   
},
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold',
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
      textInput: {
      width: '98%',
      fontSize: 16,
      margin: 10,
      padding: 10, 
      borderColor: 'gray', 
      borderWidth: 2,
      borderRadius: 20
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#EC7807',
      padding: 10,
      borderRadius:10,
      width:200,
    },
    text:{
      fontWeight: 'bold',
      fontSize:20
    },
    image:
    {
      width: 260, height: 130,
    },
    container2: {
      flex: 1,     
      backgroundColor: "#e5e5e5"
    },
    SectionHeader:{
      backgroundColor : '#EC7807',
      fontSize : 20,
      padding: 0,
      color: 'black',
      fontWeight: 'bold'
   },
    SectionListItemS:{
      fontSize : 16,
      padding: 6,
      color: '#000',
      backgroundColor : '#F5F5F5'
  }
  });
  