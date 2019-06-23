import React, { Component } from 'react';

import {
  View, AsyncStorage, Text, Image, TouchableOpacity, ScrollView, Button,
} from 'react-native';

import styles from './styles';

import cut from '../../assets/img/cut.png';
import logo from '../../assets/img/logo.png';
import facebook from '../../assets/img/facebook.png';
import send from '../../assets/img/send.png';

import ButtonGoogle from '~/components/ButtonGoogle';

class SignInScreen extends Component {

  static navigationOptions = {
    header: null,
  };


  signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <ScrollView style={styles.container}>

        <View style={styles.header}>
          <View style={styles.trace}>
            <Image style={styles.traceIcon} source={cut} />
            <View style={styles.wrapperLogo}>
              <Image source={logo} style={styles.logo} />
            </View>
          </View>
        </View>

        <View style={styles.wrapperLogin}>
          <Text style={styles.textLogin}> Fazer Login </Text>
        </View>

        <View style={styles.buttonsLogin}>
          <Text style={styles.subTitle}> Ainda não tenho uma conta </Text>
          <TouchableOpacity style={styles.btnFacebook} onPress={this.signInAsync}>
            <Image source={facebook} />
            <Text style={styles.loginText}> Login </Text>
          </TouchableOpacity>

          <ButtonGoogle />

          <TouchableOpacity style={styles.btnPucom}>
            <Text style={styles.loginText}> Login Pucom </Text>
            <Image source={send} />
          </TouchableOpacity>
        </View>
      </ScrollView>

    );
  }
}

export default SignInScreen;
