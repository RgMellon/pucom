import React, { Component } from 'react';

import styles from './styles';

import {
  Button, View, AsyncStorage, Text, Image
} from 'react-native';


// eslint-disable-next-line react/prefer-stateless-function
class SignInScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  // eslint-disable-next-line react/sort-comp
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text> OI </Text>
        </View>
      </>
    );
  }

  signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

export default SignInScreen;
