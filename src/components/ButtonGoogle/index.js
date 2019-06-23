import React from 'react';
import {
  View, TouchableOpacity, Image, Text,
} from 'react-native';

import { GoogleSignin } from 'react-native-google-signin';

import Reactotron from 'reactotron-react-native';
import google from '../../assets/img/google.png';

import styles from './styles';

export default function ButtonGoogle() {
  async function handleSubmit() {
    try {
      await GoogleSignin.configure();
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // Chamar api aqui, passando userInfo
      Reactotron.log(userInfo);
    } catch (error) {
      Reactotron.log(error);
    }
  }

  return (
    <View>
      <TouchableOpacity style={styles.btnGoogle} onPress={() => handleSubmit()}>
        <Image source={google} />
        <Text style={styles.loginText}> Login </Text>

      </TouchableOpacity>
    </View>
  );
}
