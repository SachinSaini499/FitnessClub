import React from "react";
import {StyleSheet,Text,View,Image,TouchableOpacity,Slider,TouchableWithoutFeedback,Dimensions} from "react-native";
import { RNCamera } from "react-native-camera";
import CustomModelComponent from '../custom/ModalComponent'
import Icon2 from 'react-native-vector-icons/FontAwesome';
const flashModeOrder= {off: "on",on: "off"};
const wbOrder = {auto: "sunny",sunny: "cloudy",cloudy: "shadow",shadow: "fluorescent",fluorescent: "incandescent",incandescent: "auto"};
const landmarkSize = 2;

export default class RecordingComponent extends React.Component {
  _toggleModal2= ()=> this.setState({ ModalVisible: true })
  state = {
    flash: "off",
    zoom: 0,
    autoFocus: "on",
    autoFocusPoint: {
      normalized: { x: 0.5, y: 0.5 }, // normalized values required for autoFocusPointOfInterest
      drawRectPosition: {
        x: Dimensions.get("window").width * 0.5 - 32,
        y: Dimensions.get("window").height * 0.5 - 32
      }
    },
    depth: 0,
    type: "back",
    whiteBalance: "auto",
    ModalVisible: false,
    vedioPath:"",
    ratio: "16:9",
    recordOptions: {
      mute: false,
      maxDuration: 5,
      quality: RNCamera.Constants.VideoQuality["288p"]
    },
    isRecording: false,
    shouldPopupOpen:false,
    canDetectFaces: false,
    canDetectText: false,
    canDetectBarcode: false,
    faces: [],
    textBlocks: [],
    barcodes: []
  };

  // _toggleModal(){ 
  //   this.setState({ModalVisible: !this.state.ModalVisible });
  //   alert(this.state.ModalVisible);
  //   }
  
  toggleFacing() {
    this.setState({
      type: this.state.type === "back" ? "front" : "back"
    });
    this.setState({shouldPopupOpen:false})
  }
  toggleFlash() {
    this.setState({
      flash: flashModeOrder[this.state.flash]
    });
    this.setState({shouldPopupOpen:false})
  }
  toggleWB() {
    this.setState({
      whiteBalance: wbOrder[this.state.whiteBalance]
    });
  }
  toggleFocus() {
    this.setState({
      autoFocus: this.state.autoFocus === "on" ? "off" : "on"
    });
    this.setState({shouldPopupOpen:false})
  }
  touchToFocus(event) {
    const { pageX, pageY } = event.nativeEvent;
    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;
    const isPortrait = screenHeight > screenWidth;
    let x = pageX / screenWidth;
    let y = pageY / screenHeight;
    // Coordinate transform for portrait. See autoFocusPointOfInterest in docs for more info

    if (isPortrait) {
      x = pageY / screenHeight;
      y = -(pageX / screenWidth) + 1;
    }
    this.setState({
      autoFocusPoint: {
        normalized: { x, y },
        drawRectPosition: { x: pageX, y: pageY }
      }
    });
    this.setState({shouldPopupOpen:false})
  }
  zoomOut() {
    this.setState({
      zoom: this.state.zoom - 0.1 < 0 ? 0 : this.state.zoom - 0.1
    });
    this.setState({shouldPopupOpen:false})
  }
  zoomIn() {
    this.setState({
      zoom: this.state.zoom + 0.1 > 1 ? 1 : this.state.zoom + 0.1
    });
    this.setState({shouldPopupOpen:false})
  }
  setFocusDepth(depth) {
    this.setState({
      depth
    });
    this.setState({shouldPopupOpen:false})
  }
  takePicture = async function() {
    if (this.camera) {
      const data = await this.camera.takePictureAsync();
      console.warn("takePicture ", data);
    }
    this.setState({shouldPopupOpen:false})
  };
  takeVideo = async function() {
    if (this.camera) {
      try {
       // alert("TakeVedio"+this.state.shouldPopupOpen);
        const promise = this.camera.recordAsync(this.state.recordOptions);
        if (promise) {
          this.setState({ isRecording: true });
          const data = await promise;
          this.setState({ isRecording: false });
          this.setState({vedioPath:data});
          this.setState({shouldPopupOpen:false})
          console.warn("takeVideo", data);
        }
      } catch (e) {
        console.error(e);
      }
    }
  }; 

  UploadVideo() {   
      try {       
        if(this.state.vedioPath)
        {         
          this.setState({ ModalVisible: true })
          this.setState({shouldPopupOpen:true})
        }
        alert("data: "+this.state.vedioPath+ this.state.ModalVisible)
      }
       catch (e) {
        console.error(e);
      }    
  }

  renderCamera() {
    const { canDetectFaces, canDetectText, canDetectBarcode } = this.state;
    const drawFocusRingPosition = {
      top: this.state.autoFocusPoint.drawRectPosition.y - 32,
      left: this.state.autoFocusPoint.drawRectPosition.x - 32
    };

    return (
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={{
          flex: 1,
          justifyContent: "space-between",
          position: 'relative'
        }}
        type={this.state.type}
        flashMode={this.state.flash}
        autoFocus={this.state.autoFocus}
        autoFocusPointOfInterest={this.state.autoFocusPoint.normalized}
        zoom={this.state.zoom}
        whiteBalance={this.state.whiteBalance}
        ratio={this.state.ratio}
        focusDepth={this.state.depth}
        permissionDialogTitle={"Permission to use camera"}
        permissionDialogMessage={
          "We need your permission to use your camera phone"
        }
        faceDetectionLandmarks={
          RNCamera.Constants.FaceDetection.Landmarks
            ? RNCamera.Constants.FaceDetection.Landmarks.all
            : undefined
        }
        onFacesDetected={canDetectFaces ? this.facesDetected : null}
        onTextRecognized={canDetectText ? this.textRecognized : null}
        onGoogleVisionBarcodesDetected={
          canDetectBarcode ? this.barcodeRecognized : null
        }> 

              
            <TouchableOpacity
              style={styles.flashButton}
              onPress={this.toggleFlash.bind(this)}>             
              <Icon2 name="bolt" color="white" style={{padding:5}}/>  
              <Text style={[styles.flipText,{fontSize:12,color:'yellow'}]}>{this.state.flash} </Text>
     
            </TouchableOpacity>         
            <TouchableOpacity style={[styles.flipButton,{position: 'absolute',bottom:'3%'}]} onPress={this.toggleFacing.bind(this)}>
            <Icon2 name="refresh" color="white" />              
            </TouchableOpacity>      

          {/* {this.state.zoom !== 0 && (
            <Text style={[styles.flipText, styles.zoomText]}>
              Zoom: {this.state.zoom}
            </Text>
          )} */}
            <TouchableOpacity style={[styles.recButton, {position: 'absolute',width:'10%', bottom:'9%', alignSelf: "flex-end" }]} onPress={this.zoomIn.bind(this)} >
              <Text style={[styles.flipText,{color:'white'}]}> + </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.recButton, {position: 'absolute',bottom:'2%',width:'10%', alignSelf: "flex-end" }]} onPress={this.zoomOut.bind(this)}>
              <Text style={[styles.flipText,{fontSize:20,color:'white'}]}> - </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[styles.recButton,{right:'46%', position: 'absolute',backgroundColor: this.state.isRecording ? "white" : "darkred"}]}
              onPress={this.state.isRecording ?() =>{} :this.takeVideo.bind(this)}>
              {this.state.isRecording ? 
              (<Text style={styles.flipText}> Pause </Text>) : 
              (<Text style={styles.flipText}> REC </Text>)}
            </TouchableOpacity>        
            <TouchableOpacity 
            style={[styles.uploadButton,{ right:'25%',alignSelf:"center", position: 'absolute',}]}
              onPress={() =>this.UploadVideo()}>              
                 <Icon2 name="upload" color="white" />                      
          </TouchableOpacity>  
            {/* <TouchableOpacity style={[styles.flipButton,styles.picButton,{ flex: 0.3, alignSelf: "flex-end" }]} onPress={this.takePicture.bind(this)}
            >
              <Text style={styles.flipText}> SNAP </Text>
            </TouchableOpacity> */}
        <CustomModelComponent navigation = {this.props.navigation} isValid={this.state.shouldPopupOpen} Visible={this.state.ModalVisible}></CustomModelComponent>   
      </RNCamera>
    );
  }

  render() {
    return <View style={styles.container}>{this.renderCamera()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#000"
  },
  recButton: {   
    height: 30,
    width:'20%',
    bottom:'2%'
    ,      
    borderRadius: 8,
    borderColor: "white",
    borderWidth: 1,  
    alignItems: "center",
    justifyContent: "center"
  },  
  uploadButton: {   
    height: 30,
    width:'20%',
    bottom:'2%',      
    borderRadius: 8,
    borderColor: "white",
    borderWidth: 1,  
    alignItems: "center",
    justifyContent: "center"
  },
  flipButton: {
    height: 30,
    width:'20%',
    bottom:'2%'
    ,  
  
    
    alignItems: "center",
    justifyContent: "center"
  },
  flashButton: {
    flexDirection:'row',
    height: '10%',
    width:'15%', 
    padding:10,margin:10,  
      },
  autoFocusBox: {
    position: "absolute",
    height: 64,
    width: 64,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "white",
    opacity: 0.4
  },

  flipText: {
    color: "black",
    fontSize: 15
  },

  zoomText: {
    position: "absolute",
    bottom: 70,
    zIndex: 2,
    left: 2
  },

  picButton: {
    backgroundColor: "darkseagreen"
  },

  facesContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    top: 0
  },

  face: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 2,
    position: "absolute",
    borderColor: "#FFD700",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },

  landmark: {
    width: landmarkSize,
    height: landmarkSize,
    position: "absolute",
    backgroundColor: "red"
  },

  faceText: {
    color: "#FFD700",
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    backgroundColor: "transparent"
  },

  text: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 2,
    position: "absolute",
    borderColor: "#F00",
    justifyContent: "center"
  },

  textBlock: {
    color: "#F00",
    position: "absolute",
    textAlign: "center",
    backgroundColor: "transparent"
  }
});

