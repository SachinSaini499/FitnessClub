import React from 'react';
import { View, Text ,Image,StatusBar} from 'react-native';
import styles from '../assets/styles.js'


class SplashScreen extends React.Component {
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('Login');
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor='#FFFFFF'></StatusBar>
      <Image source={require('../assets/images/logo.png')} style={{width: 150, alignItems: 'center',
    justifyContent: 'center',height: 150}}/>
        {/* <Text style={styles.textStyles}>
          Blitz Reading
        </Text> */}
      </View>
    );
  }
}



export default SplashScreen;