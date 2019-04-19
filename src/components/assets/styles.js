
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
      backgroundColor: '#2ED085',
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
      color:'#14284B',
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold',
    },
    outputMessage: {
      color:'red',
      fontSize: 15,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold',
    },
    instructions: {
      textAlign: 'center',
      color: '#2ED085',
      marginBottom: 5,
    },
      textInput: {
      width: '98%',
      fontSize: 16,
      margin: 10,
      padding: 10, 
      color:'#14284B',
      borderColor: 'gray', 
      borderWidth: 2,
      borderRadius: 20
    }, 
    textInput2: {
      width: 250,     
      fontSize: 16,
      margin: 10,
      padding: 10, 
      borderColor: 'gray', 
      borderWidth: 2,
      borderRadius: 10
    },
    button: {
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor: '#2ED085',
      padding: 10,      
      borderRadius:10,
      width:'50%',
    }, 
    modelButton: {
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor: '#2ED085',
      padding: 10,
      margin:5,      
      borderRadius:10,
      width:'30%',
    },
    recButton: {
      alignItems: 'flex-end',
      justifyContent:'center',
      backgroundColor: '#2ED085',
      padding: 10,
      margin:5,      
      borderRadius:10,
      width:'30%',
    },
    text:{
      color:'#14284B',
      fontWeight: 'bold',
      fontSize:15
    },
    image:
    {
      width: 260, height: 130,
    },
    container2: {
      flex: 1,     
      backgroundColor: "#2ED085"
    },
    SectionHeader:{
      backgroundColor : '#2ED085',
      fontSize : 20,
      padding: 0,
      color: 'black',
      fontWeight: 'bold'
   },
    SectionListItemS:{
      fontSize : 16,
      padding: 6,
      color: '#2ED085',
      backgroundColor : '#F5F5F5'
  }
  });
  