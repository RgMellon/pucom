import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  AsyncStorage,
} from 'react-native';

import { GoogleSignin } from 'react-native-google-signin';

import setUserOnStorage from '../../aux/setUserOnStorage';

import google from '../../assets/img/google.png';

import styles from './styles';

class ButtonGoogle extends Component {
  static navigationOptions = {
    header: null,
  };

  handleSubmit = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.configure();
      const userInfo = await GoogleSignin.signIn();

      await setUserOnStorage(userInfo);

      this.props.navi.navigate('App');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.btnGoogle} onPress={this.handleSubmit}>
          <Image source={google} />
          <Text style={styles.loginText}> LOGIN GOOGLE </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ButtonGoogle;
