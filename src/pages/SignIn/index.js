import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sigInRequest } from '../../store/modules/auth/actions';

import {
  Form,
  Title,
  SubmitButton,
  TextSubmit,
  FormInput,
  Back,
  TextBack,
  Container,
} from './styles';

import AuthLogin from '../_layouts/auth';

export default function SignIn({ navigation }) {
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  function handleSubmit() {
    dispatch(sigInRequest(email, password));
  }

  function handleBack() {
    navigation.navigate('Auth');
  }

  return (
    <AuthLogin>
      <Container>
        <Title>Ja tem uma conta ? </Title>
        <Form>
          <FormInput
            icon="mail-outline"
            placeholder="Seu email"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            onChangeText={setEmail}
          />

          <FormInput
            ref={passwordRef}
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite uma senha"
            autoCapitalize="none"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            onChangeText={setpassword}
          />

          <SubmitButton onClick={handleSubmit} loading={loading}>
            <TextSubmit> Entrar </TextSubmit>
          </SubmitButton>

          <Back onPress={handleBack}>
            <TextBack> Voltar </TextBack>
          </Back>
        </Form>
      </Container>
    </AuthLogin>
  );
}
