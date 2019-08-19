import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

function AuthLoadingScreen({ navigation }) {
  const isSigned = useSelector(state => state.auth.signed);
  navigation.navigate(isSigned ? 'App' : 'Auth');

  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    ></View>
  );
}

export default AuthLoadingScreen;
