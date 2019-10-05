import React from 'react';
import { View } from 'react-native';

import image from './avatar3.png';

import {
  Container,
  Header,
  ImageRegister,
  Content,
  Title,
  RegisterInput,
} from './styles';

export default function RegisterInfos() {
  return (
    <Container>
      <Header>
        <ImageRegister source={image} />
      </Header>
      <Content>
        <Title> Quase lá...</Title>
        <RegisterInput
          icon="mail-outline"
          placeholder="CEP"
          autoCorrect={false}
          returnKeyType="next"
          // onSubmitEditing={() => passwordRef.current.focus()}
          // onChangeText={setEmail}
        />

        <RegisterInput
          icon="mail-outline"
          placeholder="Sexo"
          autoCorrect={false}
          returnKeyType="next"
          // onSubmitEditing={() => passwordRef.current.focus()}
          // onChangeText={setEmail}
        />

        <RegisterInput
          icon="mail-outline"
          placeholder="Data de nascimento "
          autoCorrect={false}
          returnKeyType="next"
          // onSubmitEditing={() => passwordRef.current.focus()}
          // onChangeText={setEmail}
        />
      </Content>
    </Container>
  );
}
