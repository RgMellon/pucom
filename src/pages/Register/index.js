import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signUpRequest } from '~/store/modules/auth/actions';

import { Form, Container, FormInput, SubmitButton, Title } from './styles';

import AuthLayout from '~/pages/_layouts/auth';

export default function Register({ navigation }) {
  const passwordRef = useRef();
  const emailRef = useRef();

  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

  // function handleBack() {
  //   navigation.navigate('AuthLoading');
  // }

  return (
    <AuthLayout>
      <Container>
        <Title>Criar conta </Title>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorret={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            onChangeText={setName}
          />

          <FormInput
            ref={emailRef}
            icon="mail-outline"
            keyboardType="email-address"
            autoCorret={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            onChangeText={setEmail}
          />

          <FormInput
            ref={passwordRef}
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            onChangeText={setPassword}
          />

          <SubmitButton onClick={handleSubmit} loading={loading}>
            Cadastrar
          </SubmitButton>
        </Form>
      </Container>
    </AuthLayout>
  );
}
