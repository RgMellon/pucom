import React from 'react';

import ButtonGoogle from '~/components/ButtonGoogle';

import {
  Container,
  Logo,
  Title,
  ButtonRegister,
  TextButtonRegister,
  ButtonSigIn,
  TextButtonSignIn,
} from './styles';

import logo from '~/assets/img/logo.png';

function SignInScreen({ navigation }) {
  // async function signInAsync() {
  //   await AsyncStorage.setItem('userToken', 'abc');
  //   this.props.navigation.navigate('App');
  // }

  function handleNavToRegister() {
    navigation.navigate('Register');
  }

  function handleLogin() {
    navigation.navigate('SignIn');
  }

  return (
    <Container>
      <Logo source={logo} />
      <Title>Promoções estão esperando por você, vem com a gente!</Title>
      <ButtonRegister onPress={handleNavToRegister}>
        <TextButtonRegister> CADASTRE-SE GRÁTIS </TextButtonRegister>
      </ButtonRegister>

      <ButtonGoogle />

      <ButtonSigIn onPress={handleLogin}>
        <TextButtonSignIn> ENTRAR </TextButtonSignIn>
      </ButtonSigIn>
    </Container>
  );
}

export default SignInScreen;
