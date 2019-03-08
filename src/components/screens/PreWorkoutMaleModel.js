import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

const ModalComponent = props => (
          <View style={{marginTop: 22,width:50,height:50}}>
          <Modal animationType="slide" transparent={false}  visible={props.modelvisible}
             onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 22}}>
              <View>
                <Text>test</Text>             
              </View>
            </View>
          </Modal>        
        </View>
 );

 export default ModalComponent;





